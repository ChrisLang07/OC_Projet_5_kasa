import { useState, useEffect } from "react";
import FetchDatas from '../components/FetchDatas';
import Accordion from '../components/Accordion';
import Background from '../assets/images/background_about.png';
import '../assets/styles/components/About.scss';

export default function About() {

  const [lists, setLists] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await FetchDatas('http://localhost:3000/lists.json');
      setLists(response);
    }
    getData();
  
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
  
  
  