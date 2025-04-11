import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Electron modüllerini içeri aktar
import { app, BrowserWindow } from 'electron';

// Pencere oluşturma fonksiyonu
function createWindow() {
  // Yeni bir tarayıcı penceresi oluşturuyoruz
  const win = new BrowserWindow({
    width: 800,  // Pencere genişliği
    height: 600, // Pencere yüksekliği
    webPreferences: {
      nodeIntegration: true, // Node.js entegrasyonu
    },
  });

  // Uygulamanın başlatılacağı URL veya HTML dosyasını yükle
  win.loadURL('http://localhost:3000'); // Ya da kendi index.html dosyanızın yolunu yazabilirsiniz
}

// Uygulama hazır olduğunda pencereyi oluştur
app.whenReady().then(createWindow);

// Tüm pencereler kapandığında uygulamayı kapat
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {  // MacOS için farklı davranır
    app.quit();  // Uygulamayı kapat
  }
});

// MacOS'ta uygulama simgesine tıklandığında pencereyi tekrar oluştur
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
