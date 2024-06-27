import React, {useState} from "react";
import "./App.css";

import Yenikayit from "./components/Yenikayit";
import Giris from "./components/Giris/Giris";
import VeriHareketleri from './components/VeriHareketleri';


function App() {


  const testListe = [
    {
      id: "e1",
      title: "New Phone",
      amount: 99.67,
      date: new Date(2024, 1, 1),
      id: Math.random().toString(),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2024, 1, 1),
      id: Math.random().toString(),
    },
    {
      id: "e3",
      title: "Toilet Paper",
      amount: 80.0,
      date: new Date(2024, 5, 6),
      id: Math.random().toString(),
    },
    {
      id: "e4",
      title: "Desk (Wooden)",
      amount: 120.67,
      date: new Date(2024, 3, 3),
      id: Math.random().toString(),
    },
    {
      id: "e5",
      title: "Udemy Course",
      amount: 9.9,
      date: new Date(2024, 4, 4),
      id: Math.random().toString(),
    },
    {
      id: "e6",
      title: "Book",
      amount: 29.9,
      date: new Date(2024, 4, 4),
      id: Math.random().toString(),
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
  const dolanVeri = {
    ...veri,
  };

  yeniListeAyarla((eskiListe) => {
    return [dolanVeri, ...eskiListe];
  });
  };




console.log(testListe[0].date.getFullYear().toString())


  return (
    <div>
      <div>
        <Giris/>
      </div>


      <div>
        <Yenikayit IslenenVeriKayit={Veri}/>
      </div> 

      <div>
        <VeriHareketleri items={yeniListe}></VeriHareketleri>
      </div>


    </div>
  );
  
}
export default App;