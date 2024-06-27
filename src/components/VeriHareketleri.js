import React, { useState } from "react";
import Card from "../UI/Card";


import FiltreSecenekleri from "./FiltreSecenekleri";
import KayitListesi from "./KayitListesi";
import Istatistik from "./Istatistik";

function VeriHareketleri(props) {

const suanTarih = new Date().getFullYear();
  const [secilenYil, secilenYilAyarla] = useState(suanTarih);
  const filtreDegistir = (yil) => {


    console.log(props);
    secilenYilAyarla(yil);
  };

  const filtrelenmisListe = props.items.filter((veri) => {
    console.log(veri);
    return veri.date.getFullYear().toString() === secilenYil;
  });

  return (
    <Card className="expenses">
      <FiltreSecenekleri
        secim={secilenYil}
        filtre={filtreDegistir}
      ></FiltreSecenekleri>
      <Istatistik expenses={filtrelenmisListe} />
      <KayitListesi items={filtrelenmisListe} />
    </Card>

    
        // <Card className="expenses">     // ant design ile kart yap
        //   <FiltreSecenekleri
        //     secim ={selectedYear}
        //     filtre ={filtreDegistir}
        //   ></FiltreSecenekleri>
        //   <Istatistik/>
        //   <KayıtListesi/>
        // </Card>

  );
}

export default VeriHareketleri;
