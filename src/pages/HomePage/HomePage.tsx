import './style.css';
import { useState, useEffect } from 'react';
import { Product } from '../../components/Product/Product';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        'https://apps.kodim.cz/react-2/xxxmuck/products',
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  if (products === null) {
    return <div>Načítám...</div>;
  }

  return (
    <div className="container">
      <main>
        <div className="hero">
          <h1 className="hero__title">Aktuální nabídka</h1>
          <p className="hero__desc">
            Nejnovější prémiové produkty od předních českých designérů
            <br />
            Doprava zdarma až k vám domů, na cenu nehleďte.
          </p>
        </div>
        <div className="products">
          {products &&
            products.map(({ id, name, image }) => {
              return (
                <Link to={`/product/${id}`} key={id}>
                  <Product id={id} name={name} image={image} />
                </Link>
              );
            })}
        </div>
      </main>
    </div>
  );
};
