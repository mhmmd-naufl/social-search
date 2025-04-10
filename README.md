

### 1. Setup Backend (FastAPI)
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

### 2. Setup Frontend (React + Tailwind)
```bash
cd ../frontend
npm install
```

### 3. Jalankan Proyek

#### Opsi 1: Otomatis via script
```bash
cd ..
run_project.bat
```

#### Opsi 2: Manual
- **Terminal 1 (backend)**
  ```bash
  cd backend
  venv\Scripts\activate
  uvicorn main:app --reload
  ```
- **Terminal 2 (frontend)**
  ```bash
  cd frontend
  npm run dev
  ```

### 5. Akses di Browser
Buka: [http://localhost:5173](http://localhost:5173)

---

## 📝 Struktur Folder
```
social_search/
├── backend/
│   ├── main.py
│   ├── sentiment_analysis.py
│   ├── requirements.txt
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── src/
│       ├── App.tsx
│       ├── main.tsx
│       └── index.css
├── run_project.bat
```

---

## 📌 Catatan
- Pastikan `Node.js`, `npm`, dan `Python 3.x` sudah terinstall.
- Proyek ini masih menggunakan **dummy data** untuk hasil pencarian.
- Fitur scraping & TikTok API masih dalam pengembangan.

---
