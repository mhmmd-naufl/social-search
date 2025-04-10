import React from "react";

const ResultCard = ({ data }: { data: any }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md">
      <a href={data.link} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-blue-400">
        {data.deskripsi}
      </a>
      <ul className="mt-2 text-sm text-gray-300">
        {data.analisis_komentar.map((kom: any, i: number) => (
          <li key={i} className="mb-1">
            <span className="font-medium">{kom.sentimen.toUpperCase()}</span>: {kom.komentar}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultCard;