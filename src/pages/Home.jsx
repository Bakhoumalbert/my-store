import { useEffect } from "react";
import { useState } from "react";
import { ProductList } from "../components/products/ProductsList";
import { Cart } from "../components/Cart/Cart";
import { ShowCart } from "../components/Cart/ShowCart";



export const Home = () => {

    const [isFavorites, setFavorites] = useState([]);
    const [ishowCart, setIshowCart] = useState(false);
    

    const handlefavorite = (id) => {
      if (isFavorites.includes(id)) {
        setFavorites(isFavorites.filter((item) => item !== id));
        return;
      }
      setFavorites([...isFavorites, id]);
    }
    
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(json => setProducts(json))
        .catch(error => setError(error.message));
    }
    , []);
    
  const savedCart = localStorage.getItem("cart");
  console.log("parse = ", JSON.parse(savedCart));
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  console.log("stringify = ", JSON.stringify(cart));


  return (
    <>
        {
            products.length === 0 && !error &&  <div>Loading...</div>
        }
        {
            error &&  <div className="text-red-600">Error : {error}</div>
        }
            <div className="max-w-[1100px] mx-auto px-16 relative">
              <div className="absolute -top-2 -right-4">
                <button className="bg-green-300 hover:bg-green-200 h-10 p-4 rounded-md flex items-center" onClick={() => setIshowCart(!ishowCart)}><p>Panier</p></button> 
              </div>
              {
                ishowCart &&
                <div className="fixed inset-0 z-50 bg-black/50 top-0 right-0">
                <ShowCart cart={cart} updateCart={updateCart} ishowCart={ishowCart} setIshowCart={setIshowCart} />
                </div>
              }
                <ProductList cart={cart} updateCart={updateCart} products={products} />
            </div>
    </>
  )
}
