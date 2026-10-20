# Article Dashboard

Frontend untuk test Sharing Vision. Dibuat pakai React (Vite).

## Cara menjalankan

1. Pastikan backend sudah jalan di `http://localhost:8080`
   (repo backend: https://github.com/FadlyRamdhani23/post-article-api)

2. Install dependency:

```bash
npm install
```

3. Jalankan:

```bash
npm run dev
```

Buka `http://localhost:5173`.

## Halaman

- All Posts: tab Published, Drafts, Trashed, ada icon edit dan thrash
- Add New: form buat article baru (tombol Publish dan Draft)
- Edit: ubah article (tombol Publish dan Draft)
- Preview: tampilan blog untuk article yang dipublish, ada pagination

Alamat backend diatur di `src/api.js`.