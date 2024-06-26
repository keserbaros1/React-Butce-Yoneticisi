import React, { useState } from "react";

function Giris() {
  
  const [panelGoster, panelGosterAyarla] = useState(true);  // Panel'in ilk başta açılmasını sağlıyor
  const [girisEkrani, girisEkraniAyarla] = useState(true);  // Giriş ekranının açılmasını sağlıyor
  const [id, idAyarla] = useState();
  const [sifre, sifreAyarla] = useState();
  const [sifreDogrula, sifreDogrulaAyarla] = useState();

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




  const girisForm = (event) => {
    event.preventDefault();

    alert("Giriş yapıldı");
  }

  const kayitForm = (event) => {  // form submit olduğunda çalışır
    event.preventDefault();
    if (sifre !== sifreDogrula) {
      alert("Şifreler uyuşmuyor");
      console.log(sifre);
      console.log(sifreDogrula);
      return;
    }
    alert("Hesap oluşturuldu");
    girisDegis();
  };


  return (
    <div>
      <button onClick={panelDegis}>Giriş Yap</button>

      {panelGoster && (       // Panel açıldığında gösterilecek içerik
        <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "white", padding: "20px", zIndex: 1000 }}>
          
            {girisEkrani && (  // Giriş yapma ekranında gösterilecek içerik
              <div>
                <div>
                  <label>Kullanıcı Adı</label>
                  <input
                  name="firstName" 
                  type="text"
                  value={id}
                  required
                  onChange={idDuzenle}
                  ></input>
                </div>

                <div>
                  <label>Şifre</label>
                  <input
                  name="password" 
                  type="password"
                  value={sifre}
                  required
                  onChange={sifreDuzenle}
                  ></input>
                </div>

                <button onClick={girisForm}>Giriş Yap</button>
                <button onClick={girisDegis}>Kayit ol</button>
                <button onClick={panelDegis}>Kapat</button>


              </div>
            )}

            {!girisEkrani && (  // Kayıt olma ekranında gösterilecek içerik
              <div>
                <div>
                  <label>Kullanıcı Adı</label>
                  <input
                  name="firstName" 
                  type="text"
                  value={id}
                  required
                  onChange={idDuzenle}
                  ></input>
                </div>

                <div>
                  <label>Şifre</label>
                  <input
                  name="password" 
                  type="password"
                  value={sifre}
                  required
                  onChange={sifreDuzenle}
                  ></input>

                <div>
                  <label>Şifre Tekrar</label>
                  <input
                  name="confirmPassword"
                  type="password"
                  value={sifreDogrula}
                  required
                  onChange={sifreDogrulaDuzenle}
                  ></input>
                </div>

                </div>

                <button onClick={kayitForm}>Kayıt Ol</button>
                <button onClick={panelDegis}>Kapat</button>
              </div>
            )}

      </div>
      )}


      {panelGoster && (    // Panel kapandığında yok olması
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.5)", zIndex: 999 }} onClick={panelDegis}></div>
      )}
    </div>
  );
}

export default Giris;