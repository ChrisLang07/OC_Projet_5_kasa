import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Host from '../components/Host';
import Tags from '../components/Tags';
import Rating from '../components/Rating';
import ImageSlider from '../components/SlideShow';
import Accordion from '../components/Accordion';
import '../assets/styles/components/Apartment.scss';
import '../assets/styles/components/Host.scss';
import '../assets/styles/components/Tags.scss';

export default function Apartment() {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const url = 'http://localhost:3000/logements.json';

    useEffect(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          const location = data.find((location) => id === location.id);
          if (location) {
            setProduct(location);
          } else {
            navigate("/404");
          }
        })
        .catch((error) => console.log(error));
    }, [id, navigate]);

    return (
      <div>
        {product.pictures && <ImageSlider images={product.pictures} />}

        <div className="infos">
          <h1 className="apartment-title">{product.title}</h1>
          {product.host && <Host host={product.host} />}
          <h2 className="apartment-gps">{product.location}</h2>

          {<Tags tags={product.tags} />}
          {product.rating && <Rating rating={product.rating} />}
        </div>
        <div className='apartment-accordions'>
          {product.description && (
            <Accordion title="Description" description={product.description} />
          )}
          {product.equipments && (
            <Accordion title="Equipements" entities={product.equipments} />
          )}
        </div>
      </div>
    );
}
