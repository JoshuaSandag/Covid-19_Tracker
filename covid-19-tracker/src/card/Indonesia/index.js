import React, {useEffect, useState} from 'react';
import axios from "axios";
import "../../App.css";

function Card  (){
    const [confirmed, setConfirmed] = useState([]);
    const [deaths, setDeaths] = useState([]);
    const [recovered, setRecovered] = useState([]);
    useEffect(() => {
      axios 
       .get("https://indonesia-covid-19.mathdro.id/api")
       .then((response) =>
       { 
       setConfirmed(response.data.jumlahKasus);
       setDeaths(response.data.meninggal);
       setRecovered(response.data.sembuh);
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