import './style.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

interface Product {
  id: string
  name: string;
  image: string;
}

export const ProductDetail = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([]);
  const {productId} = useParams();
  const product = products.find((item) => item.id === productId);
  console.log(product)

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      const response = await fetch('https://apps.kodim.cz/react-2/xxxmuck/products')
      const data = await response.json() as Product[];
      console.log(data);
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

