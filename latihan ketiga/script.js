window.onload = function() {
    muatFilmAwal();
};

async function muatFilmAwal() {
    let status = document.getElementById("statusTeks");
    status.innerHTML = "Sedang memuat katalog film...";
    
    try {
        let respons = await fetch("https://api.tvmaze.com/shows");
        if (!respons.ok) throw new Error("Gagal terhubung ke server.");

        let data = await respons.json();

        let filmAwal = data.slice(0, 16);

        status.innerHTML = "";
        tampilkanFilm(filmAwal);
    } catch (error) {
        status.innerHTML = "Terjadi kesalahan koneksi. Gagal memuat film.";
        console.error(error);
    }
}

async function cariFilm() {
    let kataKunci = document.getElementById("kotakCari").value;
    let status = document.getElementById("statusTeks");

    if (kataKunci.trim() === "") {
        muatFilmAwal();
        return;
    }

    status.innerHTML = "Mencari film...";

    try {
        let respons = await fetch(`https://api.tvmaze.com/search/shows?q=${kataKunci}`);
        let data = await respons.json();

        if (data.length === 0) {
            status.innerHTML = `Film "${kataKunci}" tidak ditemukan.`;
            document.getElementById("wadahFilm").innerHTML = "";
            return;
        }

        status.innerHTML = `Menampilkan hasil untuk: "${kataKunci}"`;

        let hasilFilm = data.map(item => item.show);

        tampilkanFilm(hasilFilm);
    } catch (error) {
        status.innerHTML = "Gagal melakukan pencarian.";
        console.error(error);
    }
}

function tampilkanFilm(daftarFilm) {
    let wadah = document.getElementById("wadahFilm");
    wadah.innerHTML = "";

    daftarFilm.forEach(function(film) {
        let kartu = document.createElement("div");
        kartu.classList.add("kartu-film");

        let gambarPoster = film.image ? film.image.medium : 'https://via.placeholder.com/200x260?text=No+Image';

        let nilaiRating = film.rating && film.rating.average ? film.rating.average : 'N/A';

        kartu.innerHTML = `
            ${film.name}

        ${film.name}

        ⭐ ${nilaiRating} / 10


            `;

            wadah.appendChild(kartu);
    });
}
