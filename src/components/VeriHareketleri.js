import React, { useState } from 'react';
// import { List, Empty } from 'antd';
import FiltreSecenekleri from './FiltreSecenekleri';
// import Istasistik from './Istasistik';
// import KayitListesi from "./KayıtListesi";



function VeriHareketleri({ props }) {

    const suanTarih = new Date().getFullYear();
    const [secilenYil, secilenYilAyarla] = useState(suanTarih);

    const filtreDegistir = (yil) => {
        secilenYilAyarla(yil);
    }

    const filtrelenmisListe = props.items.filter((veri) => {
        return veri.date.getFullYear().toString() === secilenYil;
    });

    return (
        <Card className="expenses">     // ant design ile kart yap
          <FiltreSecenekleri
            secim ={selectedYear}
            filtre ={filtreDegistir}
          ></FiltreSecenekleri>
          <Istasistik/>
          <KayıtListesi/>
        </Card>
      );
    }
    
export default VeriHareketleri;