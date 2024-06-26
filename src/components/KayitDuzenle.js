import React, { useState } from "react";  

function KayitDuzenle(props) {
    const { kayit, kayitDuzenle, kayitSil } = props;
    const [panelGoster, panelGosterAyarla] = useState(false); 
    const [yeniBaslik, yeniBaslikAyarla] = useState(kayit.girilenBaslik);
    const [yeniFiyat, yeniFiyatAyarla] = useState(kayit.girilenFiyat);
    const [yeniTarih, yeniTarihAyarla] = useState(kayit.girilenTarih);
    const[yeniTur,  yeniTurAyarla] = useState(kayit.secilenTur);


    const panelDegis = () => {    
        panelGosterAyarla(!panelGoster);
    };


    const yeniBaslikDuzenle = (event) => {
        yeniBaslikAyarla(event.target.value);
    };

    const yeniFiyatDuzenle = (event) => {
        yeniFiyatAyarla(event.target.value);
    };

    const yeniTarihDuzenle = (event) => {
        yeniTarihAyarla(event.target.value);
    };

    const yeniTurDuzenle = (event) => {
        yeniTurAyarla(event.target.value);
    };


    const Gunuarttır = () => {   // günü arttırır
        const suanTarih = new Date(girilenTarih);
        suanTarih.setDate(suanTarih.getDate() + 1);
        girilenTarihAyarla(suanTarih.toISOString().split('T')[0]);
    };
      
    const Gunuazalt = () => {   // günü azaltır
        const suanTarih = new Date(girilenTarih);
        suanTarih.setDate(suanTarih.getDate() - 1);
        girilenTarihAyarla(suanTarih.toISOString().split('T')[0]);
    };
    

    const form = (event) => {
        event.preventDefault();
        kayitDuzenle({
            ...kayit,
            girilenBaslik: yeniBaslik,
            girilenFiyat: yeniFiyat,
            girilenTarih: yeniTarih,
            secilenTur: yeniTur
        })
    }


    return(
        <div>
            <button onClick={panelDegis}>Düzenle</button>

            {panelGoster && (
                <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "white", padding: "20px", zIndex: 1000 }}>
                     
                     <form onSubmit={form}>   
                        <div>
                            <label>Başlık</label>
                            <input
                                type="text"
                                value={yeniBaslik}
                                onChange={yeniBaslikDuzenle}
                            ></input>
                        </div>


                        <div >
                            <label>Miktar</label>
                            <input
                                type="number"
                                value={yeniFiyat}
                                onChange={yeniFiyatDuzenle}
                            ></input>
                        </div>

                        <div >
                            <label>Tarih</label>
                            <input
                                type="date"
                                value={yeniTarih}
                                onChange={yeniTarihDuzenle}
                            ></input>
                            <button type="button" onClick={Gunuazalt}>-</button>
                            <button type="button" onClick={Gunuarttır}>+</button>
                        </div>


                        <div>
                            <label>İşlem Türü</label>
                            <select value={yeniTur} onChange={yeniTurDuzenle}>
                                <option value="Gelir">Gelir</option>
                                <option value="Gider">Gider</option>
                            </select>
                        </div>

                        <div>
                            <button type="submit">Güncelle</button>
                        </div>
                    </form>
                </div>
            )}
        </div>



    );


}

export default KayitDuzenle;