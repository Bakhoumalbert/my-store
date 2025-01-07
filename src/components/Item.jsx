import './Item.css'

export const Item = ({product, isFavorites, onFavorites }) => {
  

  const {id, title, imageSrc, specification, stockCount, price } = product
  return (
      <article className='Container'>

        <button
          onClick={(id) => onFavorites}
          className='Favorite'>
            {isFavorites ? '❤️' : '🤍'}
        </button>
        <h2>{title}</h2>
        <img
          src={imageSrc}
          alt='...'
          width='120'
          height='128'
          />
        <p>

          {specification.map((spec, it) => (
            <li key={it}>{spec}</li>
          ))}
          <button>
            show
          </button>
        </p>
        
        <p>
        {stockCount > 0 ? ( 
          <p className='AvailableStatus'>Available</p>
        ) : (
          <p className='NotAvailableStatus'>Not available</p>
        )}
        </p>
        <p>price : ${price}</p>
        <p className='NotAvailableStatus'>Not available</p>
            <button>Buy</button>
            <button>Buy 2</button>
      </article>
  )
}
