import React, {useState} from "react";
import "./App.css";

import Yenikayit from "./components/VeriGiris/Yenikayit";
import Giris from "./components/Giris/Giris";
import VeriHareketleri from './components/VeriHareketleri';
import {Card} from "antd";

function App() {


  const testListe = [
    {
      id: "e1",
      title: "Deneme",
      amount: 99.67,
      date: new Date(2024, 1, 1),
    },
  ];



const [yeniListe, yeniListeAyarla] = useState(testListe);

// const Veri = (veri) => {
//   yeniListeAyarla((eskiListe) => {
//     const yeniVeri = [veri];
//     return [...yeniVeri, eskiListe];
//   });
// };

const Veri = (veri) => {
  const yeniVeri = {
    ...veri,
  };
  
  yeniListeAyarla((eskiListe) => {
    return [yeniVeri, ...eskiListe];
  });
};

console.log(yeniListe);
console.log(yeniListe.date);




  return (
    <Card>
      <Card>
        <Giris/>
      </Card>

      <Card>
        <Yenikayit IslenenVeriKayit={Veri}/>
      </Card> 

      <Card>
        <VeriHareketleri items={yeniListe}></VeriHareketleri>
      </Card>


    </Card>
  );
  
}
export default App;