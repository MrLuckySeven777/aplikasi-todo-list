let daftarPenggunaGlobal = [];

async function muatTim() {
    let wadah = document.getElementById("wadahPengguna");
    wadah.innerHTML = "Sedang mengunduh data tim...";

    try {
        let respons = await fetch("https://reqres.in/api/users?per_page=6")
        let hasil = await respons.json();

        daftarPenggunaGlobal = hasil.data;

        tampilkanKeLayar(daftarPenggunaGlobal);
    
    }   catch (error) {
        wadah.innerHTML = "Gagal memuat data.";
    }
}

let wadah = document.getElementById("wadahPengguna");
wadah.innerHTML ="";
function tampilkanKeLayar(dataYangMauDitampilkan) {
    dataYangMauDitampilkan.forEach(function(user) {
        let kartu = document.createElement("div");
        kartu.classList.add("kartu-user");
        kartu.innerHTML = `
            Foto

${user.first_name} ${user.last_name}

${user.email}

        `;
        wadah.appendChild(kartu);
    });
}
function saringData() {

    let ketikanUser = document.getElementById("kotakCari").value.toLowerCase();

    let hasilSaringan = daftarPenggunaGlobal.filter(function(user) {
        let namaLengkap = user.first_name + " " + user.last_name;

        return namaLengkap.toLocaleLowerCase().includes(ketikanUser);
    });

    tampilkanKeLayar(hasilSaringan);
}
