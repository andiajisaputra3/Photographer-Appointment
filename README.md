# 📅 Photographer Appointment Application

Aplikasi ini adalah aplikasi Photographer Appointment berbasis **React + Vite + Typescript** yang memungkinkan pengguna untuk login, melihat daftar janji temu, serta memberikan ulasan terhadap janji temu yang telah dijadwalkan.

---

## 🚀 Fitur Utama

- Login menggunakan email dan password (mock / simulasi).
- Melihat daftar janji temu.
- Memberikan ulasan terhadap janji temu.
- Validasi form menggunakan `react-hook-form` dan `zod`.
- Menyimpan data secara lokal menggunakan `localStorage`.
- Antarmuka bersih dan responsif menggunakan Tailwind CSS.

---

## 🛠️ Cara Instalasi dan Menjalankan Aplikasi

### 1. Clone Repositori

```bash
git clone https://github.com/andiajisaputra3/Photographer-Apppointment.git
```

### 2. Masuk ke Direktori Proyek

```bash
cd Photographer-Apppointment
```

### 3. Install Dependensi

```bash
npm install
```

### 4. Jalankan Aplikasi

```bash
npm start
```

Aplikasi akan berjalan di `http://localhost:5173`.

---

## ✅ Asumsi

- Pengguna menggunakan browser modern.
- Aplikasi digunakan di perangkat pribadi karena data disimpan di `localStorage`.
- Login tidak menggunakan backend, hanya validasi sederhana di frontend.
- Semua data janji temu dan ulasan disimpan di browser.

---

## 🔐 Kredensial (Mock)

Aplikasi ini menggunakan kredensial mock (simulasi login tanpa backend). Kamu bisa login menggunakan data berikut:

```text
Email: jhondoe@gmail.com
Password: password
```

Jika login gagal, pastikan kamu memakai email dan password yang sesuai seperti di atas.

---

## ⚠️ Keterbatasan

- Login hanya mock, tidak ada autentikasi sesungguhnya.
- Semua data disimpan di browser lokal, tidak sinkron dengan perangkat lain.
- Tidak ada fitur register.

---

## 🔧 Pengembangan yang Direkomendasikan

- Menambahkan koneksi ke backend (misalnya Firebase atau Express API).
- Menambahkan autentikasi JWT untuk login asli.
- Validasi review lebih ketat (misalnya memblokir kata kasar).
- Menambahkan fitur edit/hapus janji temu.
- Menambahkan unit/component testing.
- Menyimpan data janji temu ke database online.

---
