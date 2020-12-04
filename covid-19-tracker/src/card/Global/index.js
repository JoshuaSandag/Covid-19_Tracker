import React, {useEffect, useState} from 'react';
import axios from "axios";
import "../../App.css";

function Card (){
    const [confirmed, setConfirmed] = useState([]);
    const [deaths, setDeaths] = useState([]);
    const [recovered, setRecovered] = useState([]);
    useEffect(() => {
      axios 
       .get("https://covid19.mathdro.id/api")
       .then((response) =>
       { 
       setConfirmed(response.data.confirmed.value);
       setDeaths(response.data.deaths.value);
       setRecovered(response.data.recovered.value);
      })  
   }, []);
  
    return(
    <div className = "box">
  
      <h1 className ="card-container1">Positif {confirmed}</h1>
      <h1 className ="card-container2">Meninggal {deaths}</h1>
      <h1 className ="card-container3">Sembuh {recovered}</h1>
  
    </div>
  );    
};

export default Card;


