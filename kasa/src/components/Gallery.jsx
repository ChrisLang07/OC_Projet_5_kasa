import { useState, useEffect } from 'react';
import Card from "./Card";
import FetchDatas from './FetchDatas';
import '../styles/Gallery.scss';

export default function Gallery() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      async function getData() {
        const response = await FetchDatas("http://localhost:3000/logements.json");
        setProducts(response);
      }
      
      getData();
    
    }, []);

    return (
      <main>
        <section className="grid">
          {products.map((product) => (      
            <Card key={product.id} location={product} />
          ))}
        </section>
      </main>
    );
}