import React, { useState } from "react";
// import KullaniciDogrula from "./Kullanicilar";
import {KullaniciDogrula, KullaniciEkle} from "./Kullanicilar";
import { message, Modal, Input, Button, Form, Breadcrumb } from 'antd';
import {UserOutlined, } from '@ant-design/icons';


function Giris() {

  const [panelGoster, panelGosterAyarla] = useState(true);  // Panel'in ilk başta açılmasını sağlıyor
  const [girisEkrani, girisEkraniAyarla] = useState(true);  // Giriş ekranının açılmasını sağlıyor
  const [id, idAyarla] = useState();
  const [sifre, sifreAyarla] = useState();
  const [sifreDogrula, sifreDogrulaAyarla] = useState();
  const [Kullanici, KullaniciAyarla] = useState("");

  const panelDegis = () => {    // Panel'in açılıp kapanmasını sağlayan fonksiyon
    panelGosterAyarla(!panelGoster);
  };

  const girisDegis = () => {    // Giriş ekranının açılıp kapanmasını sağlayan fonksiyon  
    girisEkraniAyarla(!girisEkrani);
  };

  const idDuzenle = (event) => {
    idAyarla(event.target.value);
  };

  const sifreDuzenle = (event) => {
    sifreAyarla(event.target.value);
  };

  const sifreDogrulaDuzenle = (event) => {
    sifreDogrulaAyarla(event.target.value);
  };

    const cikisYap = () => {
      KullaniciAyarla("");
      panelGosterAyarla(true);
    };



  const girisForm = (event) => {
    console.log("girisForm fonksiyonu çalıştı")
    console.log(id, sifre)

    if (KullaniciDogrula(id, sifre)){
      message.success('Giriş başarılı');
      KullaniciAyarla(id);
      panelDegis();
    } else {
      message.error('Kullanıcı adı veya şifre hatalı');
    }
  }


    const kayitForm = (event) => {
    // message.success('Kayıt başarılı');
    // girisDegis();
    console.log("Kayit Form çalıştı")

      if (sifre !== sifreDogrula) {
        message.error('Şifreler uyuşmuyor');
        return;
      }

      else if (KullaniciEkle(id, sifre)) {
      message.success('Kayıt başarılı');
      girisDegis();
      } 
      
      else {
        message.error('Kullanıcı adı zaten var');
      }

  };


  return (

    <div>

  <Breadcrumb         // Sidebar'da kullanıcı adını gösteren kısım
    items={[
      {
        title: (
          <>
            <a>
              <UserOutlined />
              <strong >
                {Kullanici}
              </strong>
            </a>
          </>
        ),
        onClick: cikisYap,
      },
    ]}
    />



      
      <Modal
        visible={panelGoster}
        footer={null}
        centered
        maskClosable={false}
        closable={false}
        >
        {girisEkrani ? (
        <Form onFinish={girisForm}>
          <div>
            <div>
              <label>Kullanıcı Adı</label>
              <Input
                name="firstName"
                type="text"
                value={id}
                required
                onChange={idDuzenle}
              />
            </div>

            <div>
              <label>Şifre</label>
              <Input
                name="password"
                type="password"
                value={sifre}
                required
                onChange={sifreDuzenle}
              />
            </div>


            <div>
            <Button  type="primary" htmlType="submit">Giriş Yap</Button>
            <Button onClick={girisDegis}>Kayıt Ol</Button>
            </div>  
          </div>
          </Form>
        ) : (
          <div>
            <div>
              <label>Kullanıcı Adı</label>
              <Input
                name="firstName"
                type="text"
                value={id}
                required
                onChange={idDuzenle}
              />
            </div>

            <div>
              <label>Şifre</label>
              <Input
                name="password"
                type="password"
                value={sifre}
                required
                onChange={sifreDuzenle}
              />
            </div>

            <div>
              <label>Şifre Tekrar</label>
              <Input
                name="confirmPassword"
                type="password"
                value={sifreDogrula}
                required
                onChange={sifreDogrulaDuzenle}
              />
            </div>

            <div>
            <Button onClick={kayitForm} type="primary">Kayıt Ol</Button>
            </div>
          </div>
        )}
      </Modal>

    </div>
  );
}

export default Giris;