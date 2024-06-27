function Kullanicilar(id, sifre) {
    const deneme =[{
        id: "deneme",
        sifre: "1234"
    },
    {
        id: "deneme2",
        sifre: "12345"
    },
    {
        id: "deneme3",
        sifre: "123456"
    }
    ];

    for (let i = 0; i < deneme.length; i++) {
        if (deneme[i].id === id ) {
            if (deneme[i].sifre === sifre) {
                return true;
            }
        }
    }

    return false;
}

// function KullaniciEkle(id, sifre) {
//     console.log("Kullanici eklendi");
//     console.log(deneme[0].id);
// }

// export {KullaniciDogrula, KullaniciEkle};
export default Kullanicilar;