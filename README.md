# Haylen Swimming Club — struktur modular

Buka `index.html` langsung (klik dua kali) atau lewat server apa pun. Tanpa build tool.

## Urutan muat itu penting
- `css/` dimuat berurutan 01 → 14 (urutan = prioritas cascade, sama seperti file asli).
- `js/` dimuat berurutan; semua berbagi satu scope global (script klasik, bukan ES module).

## Mau ubah apa?
| Tujuan | File |
|---|---|
| Nomor WhatsApp, nama klub | `js/config.js` |
| Paket & harga | `js/data-programs.js` |
| Kolam & coach (tambah/hapus/`isActive`) | `js/data-pools-coaches.js` |
| Kartu program & pilihan paket | `js/program.js` |
| Dialog konfirmasi pendaftaran | `js/dialog.js` |
| Halaman kolam / coach | `js/pools.js`, `js/coaches.js` |
| Formulir rekrutmen & kerja sama | `js/forms.js` |
| Menu & dropdown / router hash | `js/menu.js`, `js/router.js` |
| Logo & ikon SVG | `js/sprite.js` |
| Inisialisasi awal | `js/main.js` |
| Warna & font (variabel `:root`) | `css/01-base.css` |

Foto: simpan di `foto/` (hero.jpg, kolam-*.jpg, coach-*.jpg).
