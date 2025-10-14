// JavaScript: Interaksi klik untuk mengubah nama
function ubahNama() {
    const elemen = document.getElementById('nama');
    if (elemen.innerText === 'Andika Permana Saputra') {
        elemen.innerText = 'Halo, saya Andika!';
    } else {
        elemen.innerText = 'Andika Permana Saputra';
    }
}
