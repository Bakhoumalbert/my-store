import { useState } from "react";

export const ArticleCard = ({product, handleAddCart }) => {
  
  const [isFavorite, setIsfavorite] = useState(false);
  
  const {id, title, imageSrc, specification, stockCount, price } = product

  const [show, setShow] = useState(false);

  return (
    <article className="relative w-full border border-white rounded-lg p-4 text-center bg-slate-400">
      <button
        onClick={() => setIsfavorite(!isFavorite)}
        className="absolute top-2 right-3 text-2xl border-0 bg-none hover:top-2 hover:right-2 hover:text-3xl"
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>

      <h2 className="text-lg font-semibold">{title}</h2>

      <img
        src={imageSrc}
        alt="Product image"
        width="132"
        height="132"
        className="mx-auto my-4"
      />

      <div className="mb-4">
        {
        show && (
          <ul className="flex flex-col gap-2 ">
            {specification.map((spec, index) => (
              <li key={index} className="flex text-white text-sm items-center justify-center">
                {spec}
              </li>
            ))}
          </ul>
        )
        }
        {/* specification.map((spec, index) => (
          <li key={index} className="flex text-white items-center justify-center">
            {spec}
          </li>
        ))} */}
        <button onClick={() => setShow(!show)} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
          Show
        </button>
      </div>

      <p className="mb-4">
        {stockCount > 0 ? (
          <span className="text-sm text-lightgreen">Available</span>
        ) : (
          <span className="text-sm text-lightsalmon">Not available</span>
        )}
      </p>

      <p className="mb-4">
        <span className="font-bold">Price:</span> ${price}
      </p>

      <div className="space-x-2">
        <button onClick={() => handleAddCart(id, title, price)} className="px-4 py-2 bg-green-300 text-white rounded hover:bg-green-200">
          Buy 2
        </button>
      </div>
    </article>
  )
}
