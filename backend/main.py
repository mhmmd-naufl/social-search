from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from tiktok_scraper import search_tiktok
from sentiment_analysis import analyze_comments

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/search")
def search(keyword: str, platform: str = "tiktok"):
    if platform == "tiktok":
        results = search_tiktok(keyword)
        for r in results:
            r["analisis_komentar"] = analyze_comments(r["komentar_list"])
        return results
    return []