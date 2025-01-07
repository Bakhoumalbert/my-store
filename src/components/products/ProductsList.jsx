import { AiOutlineSearch } from "react-icons/ai";
import { ArticleCard } from "../ArticleCard";
import { useState } from "react";

export const ProductList = ({products, cart, updateCart }) => {

  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);


  const stockProduct = products.filter(product => {

      if(search && !product.title.toLowerCase().includes(search.toLowerCase())) {
          return false
      }

      if (product.price < minPrice || product.price > maxPrice) {
        return false;
      }
      
      return true
  })

  const handleReset = () => {
    setSearch("");
    setMinPrice(0);
    setMaxPrice(10000);
  }

  function addToCart(id, title, price) {
		const currentProductSaved = products.find((product) => product.id === id);

		if (currentProductSaved) {
			const cartFilteredCurrentProduct = cart.filter(
				(product) => product.id !== id
			)
			updateCart([
				...cartFilteredCurrentProduct,
				{ title, price, amount: currentProductSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, {id, title, price, amount: 1 }])
		}
	}

  return (
    <div className="flex flex-col container mx-auto gap-6">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center gap-4">
          <h3 className="text-lg text-gray-400 font-bold">Price filter</h3>
          <h3 className="text-xl text-gray-400 font-bold mr-52">Search Products</h3>
        </div>
        <div className="flex justify-between items-center gap-4">
        <div>
          <div className="flex items-center gap-4">
            <label htmlFor="price">Price</label>
            <span className="flex items-center">  
              $
              <input
                type="number"
                min="0"
                max="1000"
                value={minPrice}
                className="w-18 h-6 p-2 rounded-md text-black bg-gray-300/100" 
                onChange={(e) => setMinPrice(e.target.value)}
                />
              </span>
            <span>-</span>
            <span className="flex items-center">
              $
              <input
                type="number"
                min="0"
                max="1000"
                value={maxPrice}
                className="w-18 h-6 p-2 rounded-md text-black bg-gray-300/100" 
                onChange={(e) => setMaxPrice(e.target.value)}
                />
              </span>
          </div>
          
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="flex justify-between items-center max-w[700px] h-10 p-4 rounded-md text-black bg-gray-300/100">
          <div className="flex items-center">
            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              className="bg-transparent w-[300px] sn:w-[300px] font-[Poppins] focus:outline-none"
              type="text"
              placeholder="Rechercher un produit"
            />
          </div>
          <div className="flex items-center justify-center">
            <button>
              <AiOutlineSearch
                size={20}
                className="icon"
                style={{ color: "#fffff" }}
              />
            </button>
          </div>
        </form>
        <button className="bg-gray-400 h-10 p-4 rounded-md flex items-center" onClick={handleReset}><p>Reset</p></button>
        </div>
      </div>
      <h2 className="text-2xl font-bold">Products</h2>
      <div className="grid grid-cols-3 gap-4">
        {
          stockProduct.map((prod, index) => (
              <ArticleCard handleAddCart={addToCart} key={index} product={prod} />
          ))
        }  
      </div>  
    </div>
  )
}
