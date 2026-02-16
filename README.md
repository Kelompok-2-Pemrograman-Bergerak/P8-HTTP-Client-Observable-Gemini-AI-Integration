# 🤖 P8 - HTTP Client, Observable & Gemini AI Integration

Praktikum Pemrograman Bergerak (Ionic Angular)

Modul ini mendemonstrasikan penggunaan:
- HttpClient (REST API)
- Konsep Promise vs Observable
- Integrasi Google Gemini AI
- RxJS Operators (debounceTime & switchMap)

---

## 🎯 Tujuan Pembelajaran

- Memahami komunikasi REST API menggunakan HttpClient
- Membedakan penggunaan Promise dan Observable
- Mengintegrasikan Google Gemini API ke aplikasi mobile
- Menggunakan RxJS untuk manipulasi aliran data real-time

---

## 🛠 Tech Stack

- Ionic Angular
- TypeScript
- RxJS (Observable)
- Google Gemini API
- HTML & SCSS

---

## 📂 Struktur Fitur

### 1️⃣ AI Chatbot (Gemini Integration)
- Mengirim prompt ke Google Gemini
- Menerima respon AI
- Menampilkan chat seperti aplikasi pesan

### 2️⃣ Random User Generator (Promise)
- Menggunakan API publik: https://randomuser.me/api/
- Menggunakan `async/await`
- Konversi Observable ke Promise dengan `lastValueFrom()`

### 3️⃣ Live Grammar Checker (Observable)
- Tanpa tombol submit
- Menggunakan:
  - `debounceTime(1000)`
  - `switchMap()`
- Request otomatis saat user berhenti mengetik

---

## 🚀 Cara Menjalankan Project

### 1️⃣ Install Dependencies
```bash
npm install
```

---

### 2️⃣ Jalankan Aplikasi
```bash
ionic serve
```

---
### Aplikasi akan berjalan di:
```arduino
http://localhost:8100
```

---


