import './style.css';

export const Product = ({id, name, image}) => {
  return (
    <div className='product'>
      <picture className='product__pic'>
        <img className='product__img' src={image} alt={name} />
      </picture>
      <p className='product__title'>{name}</p>
    </div>
  )
}
