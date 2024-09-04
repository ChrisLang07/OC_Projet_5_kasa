import { useState, useEffect } from 'react';
import Card from "../pages/Card";
import FetchDatas from './FetchDatas';
import '../assets/styles/components/Gallery.scss';


export default function Gallery() {
    const [products, setProducts] = useState([]);
    const url = 'http://localhost:3000/logements.json';

    useEffect(() => {
      async function getData() {
        const response = await FetchDatas(url);
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