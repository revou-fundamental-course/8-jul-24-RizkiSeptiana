let hitung = document.querySelector('.hitung'); //button hitung
let bb, usia, tb; //deklarasi variabel inputan pengguna
let item = document.querySelectorAll('.item'); //item untuk list saran 


//function BMI untuk mendapatkan hasil dari inputan pengguna
let BMI = function () {
    bb = Number(document.querySelector('.input-1').value);
    usia = Number(document.querySelector('.input-2').value);
    tb = Number(document.querySelector('.input-3').value);

    let bmi = bb / ((tb / 100) ** 2); //rumus BMI
    let hasil = Math.round(bmi * 10) / 10; //rumus ganuntuk mendapatkan desimal dengan satu angka dibelakang koma
    return hasil;
}

hitung.addEventListener('click', function () {
    let hasilBMI = BMI();
    document.querySelector('.angka').textContent = hasilBMI; //menampilkan  hasil perhitungan nilai di kotak
    if (hasilBMI >= 30) {
        //rincian pesan dan saran untuk hasil BMI obesitas
        document.querySelector('.pesan-atas').textContent = "Kegemukan (Obesitas) ";
        document.querySelector('.pesan-bawah').textContent = "Anda memiliki yang Obesitas ";

        document.querySelector('.teks-kategori').textContent = "Hasil BMI lebih dari 30";
        document.querySelector('.teks-keadaan').textContent = "Anda berada dalam kategori Obesitas. Segera lakukan konsultasi dengan profesional kesehatan.Anda berada dalam kategori Normal (Ideal). Pertahankan pola makan sehat dan rutin berolahraga untuk menjaga kesehatan";

        item[0].textContent = "Kondisi Anda sangat serius dan perlu perhatian segera.";
        item[1].textContent = "Konsumsi Makanan Sehat";
        item[2].textContent = "Rutin Berolahraga";
        item[3].textContent = "Buat Rencana Diet yang Sehat";
    } else if (hasilBMI >= 25 && hasilBMI < 30) {
        //rincian pesan dan saran untuk hasil kelebihan berat badan
        document.querySelector('.pesan-atas').textContent = "Kelebihan Berat Badan";
        document.querySelector('.pesan-bawah').textContent = "Anda memiliki berat badan berlebih ";

        document.querySelector('.teks-kategori').textContent = "Hasil BMI diantara  25 dan 29.9 ";
        document.querySelector('.teks-keadaan').textContent = "Anda berada dalam kategori Kelebihan Berat Badan. Disarankan untuk mengatur pola makan.";

        item[0].textContent = "Kondisi Anda harus lebih waspada terhadap berat badan";
        item[1].textContent = "Kurangi Makanan Berlemak";
        item[2].textContent = "Makan Sayuran";
        item[3].textContent = "Minum Air Putih yang Cukup";

    } else if (hasilBMI >= 18.5 && hasilBMI < 25) {
        //rincian pesan dan saran untuk hasil BMI ideal
        document.querySelector('.pesan-atas').textContent = "Normal (Ideal)";
        document.querySelector('.pesan-bawah').textContent = "Anda memiliki berat badan yang Ideal";

        document.querySelector('.teks-kategori').textContent = "Hasil BMI diantara 18.5 dan 24.9";
        document.querySelector('.teks-keadaan').textContent = "Anda berada dalam kategori Normal (Ideal). Pertahankan pola makan sehat dan rutin berolahraga untuk menjaga kesehatan";

        item[0].textContent = "Kondisi Anda sehat tapi tidak ada salahnya memakan buah-buahan";
        item[1].textContent = "Makan Pisang";
        item[2].textContent = "Makan Mangga";
        item[3].textContent = "Makan Jeruk";


    } else if (hasilBMI < 18.5) {
        //rincian pesan dan saran untuk hasil BMI kurang berat badan
        document.querySelector('.pesan-atas').textContent = "Kekurangan Berat Badan";
        document.querySelector('.pesan-bawah').textContent = "Anda memiliki berat badan yang kurang ";

        document.querySelector('.teks-kategori').textContent = "Hasil BMI kurang dari 18.5";
        document.querySelector('.teks-keadaan').textContent = "Anda berada dalam kategori Kekurangan Berat Badan. Penting untuk meningkatkan asupan nutrisi.";

        item[0].textContent = "Kondisi Anda perlu perhatian lebih pada asupan gizi.";
        item[1].textContent = "Makan Nasi";
        item[2].textContent = "Makan Daging";
        item[3].textContent = "Makan Kacang-Kacangan";
    }

    document.querySelector('.container-input').style.display = 'none'; //ketika masuk ke halaman ouput, halaman input disembunyikan
    document.querySelector('.container-output').style.display = 'inline-block'; //menampilkan halaman output ketika menekan button hitung
}
);

document.querySelectorAll('.jk').forEach(function (elem) { //Melakukan iterasi untuk setiap elemen input radio yang ditemukan.
    elem.addEventListener('change', function () { //
        let jk = document.querySelector('input[name="jk"]:checked').value; //Menambahkan event listener yang akan dijalankan setiap kali input radio berubah (dipilih).
        //Mengambil nilai dari input radio yang sedang dipilih (checked) untuk menentukan jenis kelamin.

        if (jk === "pria") { //pengkodisian untuk user pria atau wanita
            document.querySelector('.pr-img').style.display = 'none';
            document.querySelector('.lk-img').style.display = 'inline-block';
        } else if (jk === "wanita") {
            document.querySelector('.lk-img').style.display = 'none';
            document.querySelector('.pr-img').style.display = 'inline-block';
        }
    });
});