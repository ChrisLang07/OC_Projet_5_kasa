import { useState, useEffect } from "react";
import Accordion from '../components/Accordion';
import Background from '../assets/images/background_about.png';
import '../assets/styles/components/About.scss';

export default function About() {
  const [lists, setLists] = useState([]);
  const url = 'http://localhost:3000/lists.json';

  useEffect(() => {
    fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status:${response.status}`);
      }
      return response.json();
    })
    .then((data) => setLists(data))
    .catch((error) => console.log(error));
  }, []);
    

  return (
    <div>
      <img className="about-img" src={Background} alt="" />
      <div className="accordions">
        {lists.map((list, key) => (
          <Accordion key={key} title={list.title} description={list.description} />
        ))}
      </div>
    </div>
  )
};
  
  
  