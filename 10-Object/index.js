function callObject(){
    let buku = {
        Judul : "Glory of the Fool",
        Kategori : "Novel",
        Harga : "Rp.900.000"
    }

    let alatTulis = {
        Nama : "Pencil",
        Harga : "Rp.450.000",
        Merk : ["Pablo","Castello",[
            "Rif raf",
            "Raf raf"
        ]]

    }

    console.log(buku.Harga+" "+buku.Judul);
    console.log(alatTulis.Merk[2][1]);
}

callObject();