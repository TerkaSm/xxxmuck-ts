import './style.css';

interface Props {
  id: string
  name: string;
  image: string;
}

export const Product = ({id, name, image}: Props): JSX.Element => {
  return (
    <div key={id} className='product'>
      <picture className='product__pic'>
        <img className='product__img' src={image} alt={name} />
      </picture>
      <p className='product__title'>{name}</p>
    </div>
  )
}
