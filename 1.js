// 1. toUpperCase() = mengembalikan string yang dikonversikan ke huruf besar
const nama = "dynno yohanis ottu";
console.log(`${nama}`.toUpperCase());

// 2. toLowerCase = mengembalikan string yang dikonversikan ke huruf kecil
const jurusan = "Teknik Informatika";
console.log(`${jurusan}`.toLowerCase())

// includes = melakukan pencarian apakah string berisi atau mengandung karakter yang ditentukan, bisa mengunakan hurf kecil atau besar
const namaProvinsi = "Nusa Tenggara Timur"
console.log(`${namaProvinsi}`.includes('n'))

// subString() = mengambilikan bagian dari string sesuai index awal dan ahkir yang ditentukan
// index awal dari karekter prtama yang ingin diambil
// index ahkir (optional) index yang dikecualikan dari string yang dikembalikan
const kalimat = "Saya berasal dari Kota Kupang";
console.log(`${kalimat}`.substring(5))
console.log(`${kalimat}`.substring(1,12))

// trim() = menghapus spasi diawal dan diahkir string
const nama1 = "  dynno  "
console.log(`${nama1}`);
console.log(`${nama1}`.trim());

// repeat() = ulang string. mengembalikan string sesuai jumlah pengulangan yang ditentukan
const welcome = "welcome"
console.log(`${welcome} `.repeat(10)) 

// replace() = menganti string sesuai dengan string yang sudah ditentukan
const belajar = "Saya sedang belajar nodejs"
console.log(`${belajar}`.replace('sedang', 'mau'))

// parseIn() = mengonversi dari string ke number bilangan bulat artinya jika ada bilangan pecehan maka akan diabaikan
const number1 = parseInt("2.6"); //konversi string ke number
const number2 = 5
const sum = number1 + number2
console.log(sum);

// parseFloat() = menkonversi dari string ke number untuk bilangan pecahan
const nilai1 = parseFloat("5.5");
const nilai2 = parseFloat("5.5");
const sum2 = nilai1 + nilai2;
console.log(sum2);

// Number() = menkonversi dari string ke number untuk bilangan pecahan ataupun bilangan bulat
const nilai3 = Number("10.2");
const nilai4 = Number("1");
const sum3 = nilai3 + nilai4
console.log(sum3)