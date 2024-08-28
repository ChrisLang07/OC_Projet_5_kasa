import { useState, useEffect } from "react";
import FetchDatas from './FetchDatas';


export default function Host({id}) {
    const [host, setHost] = useState([]);
    

    useEffect(() => {
      async function getData() {
        const response = await FetchDatas("http://localhost:3000/logements.json");
        
        response.forEach((location) => {
          if (id === location.id) {
            setHost(location.host);
            return;
          }
        });
      }

      getData();
    
    }, [id]);
  
    return (
        <div className="profile">
          <h3 className="profile-name">{host.name}</h3>
          <img className='profile-pic' src={host.picture} alt={host.name} />
        </div>
    )
}