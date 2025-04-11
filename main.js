const { app, BrowserWindow } = require('electron');
const path = require('path');

// Pencere oluşturma fonksiyonu
function createWindow() {
  // Yeni bir Electron penceresi oluşturuyoruz
  const win = new BrowserWindow({
    width: 800,  // Pencere genişliği
    height: 600, // Pencere yüksekliği
    webPreferences: {
      nodeIntegration: true, // Node.js entegrasyonu
    },
  });

  // React uygulamanızın çalıştığı URL'yi yükle
  win.loadURL('http://localhost:3000'); // React'in çalıştığı port (3000)
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
