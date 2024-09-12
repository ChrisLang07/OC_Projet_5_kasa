import { useState, useEffect } from 'react';
import Card from "../pages/Card";
import '../assets/styles/components/Gallery.scss';


export default function Gallery() {
    const [products, setProducts] = useState([]);
    const url = 'http://localhost:3000/logements.json';

    useEffect(() => {
      fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.log(error))
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