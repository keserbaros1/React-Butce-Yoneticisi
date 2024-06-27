import React, { useState } from "react";
import Card from "../UI/Card";


import FiltreSecenekleri from "./FiltreSecenekleri";
import KayitListesi from "./HesapKayitlari/KayitListesi";
import Istatistik from "./Istatistik";

function VeriHareketleri(props) {

const suanTarih = new Date().getFullYear();
  const [secilenYil, secilenYilAyarla] = useState(suanTarih.toString());




  const filtreDegistir = (yil) => {
    secilenYilAyarla(yil);
  };
  
  const filtrelenmisListe = props.items.filter((veri) => {
    return veri.date.getFullYear().toString() === secilenYil;
  });

  return (
    <Card className="expenses">
      {/* <FiltreSecenekleri
        secim={secilenYil}
        filtre={filtreDegistir}
      ></FiltreSecenekleri> */}
      {/* <Istatistik expenses={filtrelenmisListe} /> */}
      <KayitListesi items={filtrelenmisListe} />
    </Card>

  );
}

export default VeriHareketleri;
