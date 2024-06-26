import React, { useState } from "react";

function IslemForm({IslenenVerıKayit}) {
  const [girilenBaslik, girilenBaslikAyarla] = useState();  
  const [girilenFiyat, girilenFiyatAyarla] = useState(0);

  const suanTarih = new Date().toISOString().split('T')[0];
  const [girilenTarih, girilenTarihAyarla] = useState(suanTarih);

  const[secilenTur, secilenTurAyarla] = useState("İşlem Türü Seçiniz");


  const girilenBaslikDuzenle = (event) => {   // input değiştiğinde çalışır
    girilenBaslikAyarla(event.target.value);
  };
  const girilenFiyatDuzenle = (event) => {
    girilenFiyatAyarla(event.target.value);
  };

  const girilenTarihDuzenle = (event) => { 
    girilenTarihAyarla(event.target.value);
  };

  const secilenTurDuzenle = (event) => {
    secilenTurAyarla(event.target.value);
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
  

  const form = (event) => {  // form submit olduğunda çalışır
    event.preventDefault();
    const islenenVeri = {
      title: girilenBaslik,
      amount: girilenFiyat,
      date: new Date(girilenTarih),
      tur: secilenTur,
      id: Math.random().toString(),
    };

    IslenenVerıKayit(islenenVeri);   // parent component'e data gönderir

    girilenBaslikAyarla("");    // inputları temizler
    girilenFiyatAyarla("");  
  };


  return (
    <form onSubmit={form}>
        <div >
          <label>Başlık</label>
          <input
            type="text"
            value={girilenBaslik}
            onChange={girilenBaslikDuzenle}
          ></input>
        </div>


        <div >
          <label>Miktar</label>
          <input
            type="number"
            value={girilenFiyat}
            onChange={girilenFiyatDuzenle}
          ></input>
        </div>


        <div >
          <label>Tarih</label>
          <input
            type="date"
            value={girilenTarih}
            onChange={girilenTarihDuzenle}
          ></input>
          <button type="button" onClick={Gunuazalt}>-</button>
          <button type="button" onClick={Gunuarttır}>+</button>
        </div>
        
        <div>
          <label>İşlem Türü</label>
          <select value={secilenTur} onChange={secilenTurDuzenle}>
            <option value="Gelir">Gelir</option>
            <option value="Gider">Gider</option>
          </select>
        </div>

        <div>
          <button type="submit">Kayıt Ekle</button>
        </div>
    </form>
  );
}

export default IslemForm;