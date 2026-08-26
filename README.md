# 🎉 Birthday Website untuk Arifia Maulida 💖

Website ucapan ulang tahun interaktif, romantis, dan penuh kejutan spesial yang siap di-upload ke GitHub dan diaktifkan secara online via **GitHub Pages**.

---

## 🚀 Cara Upload ke GitHub & Mengaktifkan Website Online Gratis (GitHub Pages)

### 🌟 Cara 1: Upload Langsung via Website GitHub (Paling Mudah / Tanpa Git Command)

1. **Buat Repository Baru di GitHub**:
   - Buka [github.com](https://github.com) dan login ke akun Anda.
   - Klik tombol **"New"** atau tanda **"+"** di pojok kanan atas -> pilih **"New repository"**.
   - Beri nama repository, misalnya: `birthday-arifia` atau `happy-birthday-arifia`.
   - Pilih **Public** (agar bisa dibuka online oleh istri tercinta).
   - Centang **"Add a README file"** lalu klik **"Create repository"**.

2. **Upload File**:
   - Di halaman repository baru Anda, klik tombol **"Add file"** ➜ **"Upload files"**.
   - Drag & drop atau upload file-file utama berikut:
     - `index.html`
     - `style.css`
     - `script.js`
     - `README.md`
   - Klik tombol hijau **"Commit changes"** di bagian bawah.

3. **Aktifkan GitHub Pages (Agar Website Bisa Diakses Online)**:
   - Di repository Anda, klik tab **"Settings"** (di bar navigasi atas).
   - Pada menu sebelah kiri, klik **"Pages"**.
   - Pada bagian **"Build and deployment"**:
     - Di dropdown **Branch**, ubah dari `None` menjadi **`main`** (atau `master`).
     - Pastikan folder tetap **`/ (root)`**.
     - Klik **"Save"**.
   - Tunggu sekitar 1–2 menit, refresh halaman. Link website Anda akan muncul di bagian atas (contoh: `https://username-anda.github.io/birthday-arifia/`).
   - 🎉 Link tersebut langsung bisa dikirimkan ke istri tercinta!

---

### 💻 Cara 2: Upload Menggunakan Git Command Line (Terminal / CMD)

Jika Anda menggunakan Git di komputer:

```bash
# 1. Inisialisasi git di folder project
git init

# 2. Tambahkan semua file
git add .

# 3. Buat commit pertama
git commit -m "feat: Birthday Surprise Website untuk Arifia Maulida"

# 4. Ubah branch ke main
git branch -M main

# 5. Hubungkan dengan repository GitHub Anda (ganti USERNAME dan REPO_NAME)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# 6. Push ke GitHub
git push -u origin main
```

---

## ⚙️ Kustomisasi Tambahan di `script.js`

- **Musik YouTube**: Ganti variabel `youtubeMusic` dengan tautan lagu romantis pilihan Anda.
- **Foto Kenangan**: Ganti URL foto pada array `photos` dengan link foto Google Drive atau Cloudinary Anda.
- **Nama & Pesan WhatsApp**: Sesuaikan nomor WhatsApp atau pesan penutup di bagian bawah file `script.js`.

---

Dibuat dengan penuh cinta ❤️
