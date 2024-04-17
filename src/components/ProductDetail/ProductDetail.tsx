import './style.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

export const ProductDetail = () => {
  const [products, setProducts] = useState([]);
  const {productId} = useParams()
  const product = products.find((item) => item.id === productId);
  console.log(product)

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://apps.kodim.cz/react-2/xxxmuck/products')
      const data = await response.json()
      console.log(data)
      setProducts(data);
    }

    fetchProducts()
  }, []);

  if (product === null) {
    return <div>Načítám...</div>;
  }


  return (
    <div className='product-detail'>
      {product && (
        <>
          <picture className='product-detail__pic'>
            <img className='product-detail__img' src={product.image} alt={product.name} />
          </picture>
          <div className='product-detail__desc'>
            <p className='product-detail__title'>{product.name}</p>
            <button className='product-detail__button'>Objednat</button>
          </div>
        </>
      )}
    </div>
  )
}

