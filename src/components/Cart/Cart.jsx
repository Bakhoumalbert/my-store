import { useEffect } from "react";

export const Cart = ({ cart, updateCart }) => {
  
  
  const total = cart.reduce(
    (acc, prod) => acc + prod.amount * prod.price,
    0
  );
  console.log("total", total);
  
  useEffect(() => {
    document.title = `LMJ: ${total}€ d'achats`;
  }, [total]);

  return (
    <div className="flex flex-col gap-4">
      
      {cart.length > 0 ? (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <ul>
              {cart.map(({ title, price, amount }, index) => (
                <div key={`${title}-${index}`}>
                  {title } : ${price} x {amount}
                </div>
              ))}
            </ul>
            <h3>Total : ${total}</h3>
          </div>
          <div className="flex justify-between items-center">
            <button className="bg-green-600 text-white py-2 px-2 rounded-md hover:bg-green-700">Acheter</button>
            <button className="bg-red-600 text-white py-2 px-2 rounded-md hover:bg-red-700" onClick={() => updateCart([])}>Vider le panier</button>
          </div>
        </div>
      ) : (
        <div>Votre panier est vide</div>
      )}
    </div> 
  );
}