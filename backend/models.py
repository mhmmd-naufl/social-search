from pydantic import BaseModel
from typing import List

class Komentar(BaseModel):
    komentar: str
    sentimen: str

class Konten(BaseModel):
    id: str
    link: str
    deskripsi: str
    analisis_komentar: List[Komentar]