import React, { useState } from "react";
import axios from "axios";
import ResultCard from "./components/ResultCard";

const App = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:8000/search?keyword=${keyword}`);
      setResults(res.data);
    } catch (error) {
      console.error("Error saat mencari:", error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">🔍 Social Media Search</h1>
      <div className="flex gap-2 mb-6">
        <input
          className="px-4 py-2 rounded-lg text-black"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Masukkan kata kunci..."
        />
        <button
          className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
          onClick={handleSearch}
          disabled={loading}
        >
          {loading ? "Loading..." : "Cari"}
        </button>
      </div>

      {results.length === 0 ? (
        <p>Tidak ada hasil.</p>
      ) : (
        <div className="grid gap-4">
          {results.map((item: any) => (
            <ResultCard key={item.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;