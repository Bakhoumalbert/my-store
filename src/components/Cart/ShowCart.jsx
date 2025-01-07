import React from 'react'
import { Cart } from './Cart'

export const ShowCart = ({cart, updateCart, ishowCart, setIshowCart}) => {

  return (
    <div className="right-0 top-0 w-full h-full">
        <div className="bg-white rounded-lg shadow-lg w-3/4 max-w-xl p-6 relative top-0 right-0">
            {/* Bouton pour vider le panier */}
            <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Votre Panier</h2>
            
            </div>

            {/* Composant Cart */}
            <div className=''>
                <Cart cart={cart} updateCart={updateCart} />
            </div>

            {/* Bouton pour fermer le panier */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={() => setIshowCart(!ishowCart)} // Ajouter une logique pour masquer le panier
              >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
              >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              </button>

              {/* <div className=''>
                <button
                    className="
                    onClick={() => updateCart([])} // Exemple : met le panier à vide
                >
                    Vider le Panier
                </button>
              </div> */}
        </div>
    </div>

  )
}
