// frontend/src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css'; // kalau kamu pakai Tailwind

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
