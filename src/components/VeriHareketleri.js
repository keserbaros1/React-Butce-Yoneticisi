import React, { useState } from "react";

import FiltreSecenekleri from "./FiltreSecenekleri";
import Istatistik from "./Istatistik";
import KayitListesi from "./HesapKayitlari/KayitListesi";

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
    <div className="expenses">
      {/* <FiltreSecenekleri
        secim={secilenYil}
        filtre={filtreDegistir}
      ></FiltreSecenekleri> */}
      {/* <Istatistik expenses={filtrelenmisListe} /> */}
      <KayitListesi items={filtrelenmisListe} />
    </div>

  );
}

export default VeriHareketleri;
