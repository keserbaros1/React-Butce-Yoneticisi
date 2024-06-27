let kullanicilar = [
    { id: "admin", sifre: "admin" },
    { id: "ECompany", sifre: "N6srZ6!dibdWe!S" }
];

function KullaniciDogrula(id, sifre) {
    console.log("kullanıcı dogrulaya gelen veri:")
    console.log(id, sifre)

    for (let i = 0; i < kullanicilar.length; i++) {
        if (kullanicilar[i].id === id && kullanicilar[i].sifre === sifre) {
            console.log("Kullanıcı doğrulandı")
            return true;
        }
    }
    console.log("doğrılama başarısız")
    return false;
}

function KullaniciEkle(id, sifre) {
    
    
    let kayit = false;

    for (let i = 0; i < kullanicilar.length; i++) {
        console.log(kullanicilar[i].id, id)
        if (kullanicilar[i].id === id) {
            kayit = true;
        }
    }


    if (kayit) {
        console.log("Kullanıcı zaten var")
        return false;

    } else {
        kullanicilar.push({ id, sifre });
        console.log("Yeni kullanıcı eklendi:");
        return true;
    }
}

export { KullaniciDogrula, KullaniciEkle};