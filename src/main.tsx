import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { registerSW } from 'virtual:pwa-register';
import IndexedDB from './data/indexedDB/IndexedDB.ts';
import { configIndexedDB } from './data/indexedDB/config.ts';
import './index.css';

// add this to prompt for a refresh
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm('New content available. Reload?')) {
      updateSW(true);
    }
  },
});

// initialize indexedDB
const indexedDB = new IndexedDB(configIndexedDB.name, configIndexedDB.version);
indexedDB.initializeDB();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
