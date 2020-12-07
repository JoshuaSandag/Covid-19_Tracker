import React, {useEffect, useState} from "react";
import axios from "axios";
import "../../App.css";
import Numberformat from "react-number-format";
import Loader from "react-loader-spinner";

function Card (){
    const [provinceData, setProvince] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
      axios
        .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
        .then((res)=>{
          setProvince(res.data.data)
          setLoading(false);
        });
    }, []);
    
    return(
    <>
      { loading?(
       <>
         <Loader type="Bars" color="rgb(83, 55, 55)" height={150} width={150}/>
         <p>Memuat Data, Pastikan Internet Berjalan Dengan Baik </p>
       </>
      ) :(
        <div>
          <table border ="5">
            <tr>
              <th className = "warnaTabel">Provinsi</th>
              <th className = "warnaTabel">Positif</th>
              <th className = "warnaTabel">Sembuh</th>
              <th className = "warnaTabel">Meninggal</th>
            </tr>
            {provinceData.map((item, index)=>   {
              return(
                <tr className = "warnaTabel">
                  <th className = "rata_kiri">  {item.provinsi} </th>
                  <th className = "rata_kiri"><Numberformat value = {item.kasusPosi} thousandSeparator={true} displayType ={'text'}/> </th>
                  <th className = "rata_kiri"><Numberformat value = {item.kasusSemb} thousandSeparator={true} displayType ={'text'}/> </th>
                  <th className = "rata_kiri"><Numberformat value = {item.kasusMeni} thousandSeparator={true} displayType ={'text'}/> </th>
                </tr>
              )
            })}
          </table>
        </div>
       )};
    </>
  )
}
export default Card;