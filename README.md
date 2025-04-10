# 📊 Social Search Engine (Mock Version)

A simple fullstack project using **FastAPI** and **React + Vite** to simulate a social media search engine with sentiment analysis based on mock TikTok data.

## Features
- 🔍 Search content based on keyword
- 📎 Show dummy links to TikTok content
- 💬 Analyze comments into positive / neutral / negative sentiment
- ⚡ Built with FastAPI (backend) and React + Tailwind + Vite (frontend)

## How to Run

### 1. Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
uvicorn main:app --reload
```

### 2. Frontend
```bash
cd frontend
npm install
npm run dev
```

## API
```
GET /search?keyword=sepatu&platform=tiktok
```
Returns mocked search results and sentiment analysis.

## Todo / Enhancement Ideas
- Integrate real TikTok API or scraping
- Add Instagram / Facebook platform
- Filter results by sentiment
- Pagination and better UI polish

---

## Author
[@mhmmd-naufl](https://github.com/mhmmd-naufl)

---