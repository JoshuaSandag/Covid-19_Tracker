import React, {useEffect, useState} from "react";
import axios from "axios";
import "../../App.css";
import NumberFormat from "react-number-format";
import Loader from "react-loader-spinner";

function Card (){
    const [confirmed, setConfirmed] = useState("");
    const [deaths, setDeaths] = useState("");
    const [recovered, setRecovered] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      axios 
       .get("https://indonesia-covid-19.mathdro.id/api")
       .then((res) =>
       { 
       setConfirmed(res.data.jumlahKasus);
       setDeaths(res.data.meninggal);
       setRecovered(res.data.sembuh);
       setLoading(false);
      })  
    }, []);
  
    return(
    <>
       { loading?(
        <>
          <Loader type="Bars" color="rgb(83, 55, 55)" height={150} width={150}/>
          <p>Memuat Data, Pastikan Internet Berjalan Dengan Baik </p>
        </>
        ) :(

        <div className = "box">
          <h1 className ="card-container1">
            <h4>Positif</h4> 
            <NumberFormat value = {confirmed} thousandSeparator={true} displayType ={'text'}/>
          </h1>

          <h1 className ="card-container2">
            <h4>Meninggal</h4> 
            <NumberFormat value = {deaths} thousandSeparator={true} displayType ={'text'}/>
          </h1>

          <h1 className ="card-container3">
            <h4>Sembuh</h4> 
            <NumberFormat value = {recovered} thousandSeparator={true} displayType ={'text'}/>
          </h1>
        </div>
       )};
    </>
  );    
};

export default Card;