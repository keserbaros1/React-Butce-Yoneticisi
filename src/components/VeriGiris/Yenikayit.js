import React, { useState } from "react";
import { Form, Input, Button, DatePicker, Select } from 'antd';
import moment from 'moment'; // Tarih'i formatlamak için kullandık



function IslemForm({IslenenVeriKayit}) {
  const [girilenBaslik, girilenBaslikAyarla] = useState();  
  const [girilenFiyat, girilenFiyatAyarla] = useState(0);

  const suanTarih = new Date().toISOString().split('T')[0];
  const [girilenTarih, girilenTarihAyarla] = useState(suanTarih);

  const[secilenTur, secilenTurAyarla] = useState("Gelir");


  const girilenBaslikDuzenle = (event) => {   // input değiştiğinde çalışır
    girilenBaslikAyarla(event.target.value);
  };
  const girilenFiyatDuzenle = (event) => {
    girilenFiyatAyarla(event.target.value);
  };
  
    const secilenTurDuzenle = (event) => {
      secilenTurAyarla(event);
    };



  const girilenTarihDuzenle = (event) => { 
    const tarih = moment(event);
    girilenTarihAyarla(tarih);
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

  const formattedDate = moment(girilenTarih);  // tarihi görüntüleyebilmek için formatlar




  const form = (event) => {  // form submit olduğunda çalışır
    const islenenVeri = {
      title: girilenBaslik,
      amount: girilenFiyat,
      date: new Date(girilenTarih),
      tur: secilenTur,
      id: Math.random().toString(),
    };
    
    IslenenVeriKayit(islenenVeri);   // parent component'e data gönderir

    // girilenBaslikAyarla("");    // inputları temizler
    // girilenFiyatAyarla("");  
  };


  return (
    <Form onFinish={form} layout="vertical">
      <Form.Item label="Başlık" name="baslik">
        <Input
          type="text"
          value={girilenBaslik}
          onChange={girilenBaslikDuzenle}
        />
      </Form.Item>

      <Form.Item label="Miktar" name="miktar">
        <Input
          type="number"
          value={girilenFiyat}
          onChange={girilenFiyatDuzenle}
        />
      </Form.Item>

      <Form.Item label="Tarih" name="tarih">
        <DatePicker
          value={formattedDate}
          onChange={girilenTarihDuzenle}
          allowClear={false}
        />
        <Button onClick={Gunuazalt}>-</Button>
        <Button onClick={Gunuarttır}>+</Button>
      </Form.Item>

      <Form.Item label="İşlem Türü" name="islemTuru">
        <Select value={secilenTur} onChange={secilenTurDuzenle}>
          <Select value="Gelir">Gelir</Select>
          <Select value="Gider">Gider</Select>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Kayıt Ekle
        </Button>
      </Form.Item>
    </Form>
  );
}

export default IslemForm;