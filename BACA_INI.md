# Rekap Absensi Kajian Kitab — Versi Offline

## Apa isi folder ini
- `index.html` — halaman utama
- `app.jsx` — logika aplikasi
- `manifest.json` — supaya bisa di-"Install" seperti app di HP
- `sw.js` — service worker, bikin app tetap jalan tanpa internet setelah dibuka sekali
- `icon-192.png`, `icon-512.png` — ikon app

Data (daftar kelas, riwayat rekap) disimpan di **localStorage HP kamu sendiri**, tidak lagi tergantung Claude. Artinya: aman dipakai offline, tapi juga berarti data hanya ada di HP itu saja (tidak otomatis sinkron ke HP lain).

## Cara pasang (pilih salah satu)

### Opsi A — Paling gampang: Netlify Drop (gratis, tanpa akun)
1. Buka https://app.netlify.com/drop di laptop/HP
2. Seret (drag) seluruh folder ini ke halaman tersebut
3. Netlify kasih link (misalnya `https://nama-acak.netlify.app`)
4. Buka link itu di HP → menu browser → **"Tambah ke Layar Utama"**
5. Selesai — sekarang ada ikon app di HP, dan setelah dibuka sekali, bisa dipakai tanpa internet

### Opsi B — GitHub Pages (gratis, kalau sudah biasa pakai GitHub)
1. Buat repo baru, upload semua file di folder ini ke root repo
2. Settings → Pages → aktifkan dari branch `main`
3. Buka URL yang diberikan GitHub di HP, lalu "Tambah ke Layar Utama"

### Opsi C — Coba dulu di komputer sendiri
Servis worker butuh dibuka lewat `http://`, bukan dobel klik file (`file://`). Kalau punya Python:
```
cd absensi-offline
python3 -m http.server 8000
```
Lalu buka `http://localhost:8000` di browser.

## Catatan penting
- **Butuh internet sekali di awal** — saat pertama kali dibuka, app perlu mengunduh React/Tailwind/library Excel dari CDN. Setelah itu, service worker menyimpan semuanya, jadi bisa offline.
- **Harus lewat HTTPS** (atau `localhost`) — service worker tidak jalan di `http://` biasa (Netlify/GitHub Pages otomatis HTTPS).
- Kalau suatu saat mau reset data (misalnya ganti HP), tinggal buka lagi filenya dan mulai isi ulang — data lama hanya tersimpan di HP yang lama.
- Kamera/upload foto tetap pakai `<input type="file" accept="image/*">`, jadi di HP otomatis muncul pilihan "Ambil Foto" atau "Pilih dari Galeri".
