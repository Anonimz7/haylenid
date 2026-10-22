const PROGRAMS = [
  {id:"ss-toddler", description:"Kenalan pertama dengan air, ditemani coach yang sabar.", category:"toddler", name:"Single Session Toddler", format:"Sesi lepas", ageRange:"2–4 th", tone:"sky",
   options:[{label:"1X Pertemuan", price:170000}]},
  {id:"pv-toddler", description:"Perhatian penuh 1 coach untuk adaptasi air si kecil.", category:"toddler", name:"Private Toddler", format:"Private", ageRange:"3–4 th", tone:"violet",
   options:[{label:"4X Pertemuan / Bulan", price:550000},{label:"8X Pertemuan / 1 Bulan", price:1000000}]},
  {id:"ss-kids", description:"Coba satu sesi dulu, tanpa komitmen bulanan.", category:"anak", name:"Single Session Kids", format:"Sesi lepas", ageRange:"5–14 th", tone:"sky",
   options:[{label:"1X Pertemuan", price:150000}]},
  {id:"class", description:"Belajar bersama teman sebaya dengan biaya paling terjangkau.", category:"anak", name:"Swimming Class", format:"Kelas berkelompok", ageRange:"5–12 th", tone:"mint",
   options:[{label:"4X Pertemuan / Bulan", price:250000}]},
  {id:"pv-kids", description:"Fokus penuh 1 coach untuk kemajuan anak Anda.", category:"anak", name:"Private Kids", format:"Private", ageRange:"5–12 th", tone:"violet",
   options:[{label:"4X Pertemuan / Bulan", price:500000},{label:"8X Pertemuan / Bulan", price:950000}]},
  {id:"semi", description:"Belajar berdua dengan 1 coach. Cocok untuk kakak-adik atau teman.", category:"anak", name:"Semi Private (2 Kids)", format:"Semi private", ageRange:"5–12 th", tone:"amber",
   options:[{label:"4X Pertemuan / Bulan", price:800000},{label:"8X Pertemuan / Bulan", price:1500000}]},
  {id:"pv-adult", description:"Latihan 1-on-1 sesuai target Anda, dari takut air sampai lancar.", category:"dewasa", name:"Private Adults", format:"Private", ageRange:"15–50 th", tone:"violet",
   options:[{label:"4X Pertemuan / Bulan", price:550000},{label:"8X Pertemuan / Bulan", price:1000000}]}
];
const AGE_CATEGORIES = [["toddler","Toddler","2–4 th"],["anak","Anak","5–14 th"],["dewasa","Dewasa","15–50 th"]];
