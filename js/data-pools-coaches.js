/* ==========================================================================
   DATA KOLAM & COACH  (edit di sini, halaman ikut berubah)
   --------------------------------------------------------------------------
   TAMBAH : salin satu baris { ... }, tempel di bawahnya, lalu ubah isinya.
   HAPUS  : hapus barisnya, atau sembunyikan sementara dengan  isActive:false
            (ganti jadi isActive:true untuk menampilkan lagi).
   KOMA   : setiap baris diakhiri koma, kecuali baris terakhir.
   FOTO   : simpan JPG atau PNG di folder "foto" di samping file ini, lalu
            samakan nama file dengan isian photo:. Foto kosong atau belum ada
            akan diganti tampilan bawaan.
   ========================================================================== */

/* --- KOLAM ---  foto disarankan 16:10, minimal 1000x625 px
   Contoh baris baru:
   {name:"Kolam Baru", sizeAndDepth:"25 m · kedalaman 1,2–1,8 m", openingHours:"Sen–Jum 15.00–18.00", address:"[Alamat], [Kota]", photo:"foto/kolam-baru.jpg", isActive:true},  */
const KOLAM = [
  {name:"Kolam Utama Haylen", sizeAndDepth:"25 m · kedalaman 1,2–1,8 m", openingHours:"Sen–Jum 15.30–19.00 · Sab 08.00–12.00", address:"[Alamat kolam utama], [Kota]", photo:"foto/kolam-utama.jpg", isActive:true},
  {name:"Kolam Anak Haylen",  sizeAndDepth:"12 m · kedalaman 0,6–0,9 m", openingHours:"Sen–Jum 15.30–18.00 · Sab–Min 08.00–11.00", address:"[Alamat kolam anak], [Kota]", photo:"foto/kolam-anak.jpg", isActive:true},
  {name:"Kolam Cabang 2",     sizeAndDepth:"20 m · kedalaman 1,0–1,6 m", openingHours:"Sel, Kam, Sab 16.00–19.00", address:"[Alamat kolam cabang], [Kota]", photo:"foto/kolam-cabang-2.jpg", isActive:true}
];
/* --- COACH ---  foto disarankan persegi 1:1, minimal 400x400 px
   category berisi: "toddler", "anak", atau "dewasa" (menentukan tab filter).
   Inisial dan warna kartu dibuat otomatis. Tab kategori yang kosong disembunyikan.
   Contoh baris baru:
   {name:"Coach Baru", category:"anak", poolName:"Kolam Utama Haylen", photo:"foto/coach-baru.jpg", isActive:true},  */
const COACHES = [
  {name:"Coach Ari",   category:"toddler", poolName:"Kolam Anak Haylen",  photo:"foto/coach-ari.jpg",   isActive:true},
  {name:"Coach Nadia", category:"toddler", poolName:"Kolam Anak Haylen",  photo:"foto/coach-nadia.jpg", isActive:true},
  {name:"Coach Bima",  category:"anak",    poolName:"Kolam Utama Haylen", photo:"foto/coach-bima.jpg",  isActive:true},
  {name:"Coach Rafi",  category:"anak",    poolName:"Kolam Cabang 2",     photo:"foto/coach-rafi.jpg",  isActive:true},
  {name:"Coach Dewi",  category:"dewasa",  poolName:"Kolam Utama Haylen", photo:"foto/coach-dewi.jpg",  isActive:true},
  {name:"Coach Sari",  category:"dewasa",  poolName:"Kolam Utama Haylen", photo:"foto/coach-sari.jpg",  isActive:true}
];
const COLOR_TONES = ["sky","violet","amber","mint"];
const getInitials = n => n.trim().split(/\s+/).slice(0,2).map(w=>w[0]).join("").toUpperCase();
const COACH_FILTER_CATEGORIES = [["semua","Semua"],...CATS.map(c=>[c[0],c[1]])];

