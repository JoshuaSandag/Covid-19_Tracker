import React, {useEffect, useState} from "react";
import axios from "axios";
import "../../App.css";
import Numberformat from "react-number-format";

function Card (){
    const [provinceData, getProvince] = useState([]);
    useEffect(()=>{
      axios
        .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
        .then(response => {getProvince(response.data.data)});
    }, []);
    
    return(
      <div>
        <table border ="1">
          <tr>
            <th>Provinsi</th>
            <th>Positif</th>
            <th>Sembuh</th>
            <th>Meninggal</th>
          </tr>
          {provinceData.map((item, index)=>   {
            return(
              <tr>
                <th className = "rata_kiri">  {item.provinsi} </th>
                <th><Numberformat value = {item.kasusPosi} thousandSeparator={true} displayType ={'text'}/> </th>
                <th><Numberformat value = {item.kasusSemb} thousandSeparator={true} displayType ={'text'}/> </th>
                <th><Numberformat value = {item.kasusMeni} thousandSeparator={true} displayType ={'text'}/> </th>
              </tr>
            )
          })}
        </table>
      </div>
    )
}


export default Card;