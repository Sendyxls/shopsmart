const express = require('express');
const path = require('path');
const fs = require('fs');
const https = require('https');
const { exec } = require('child_process');

const app = express();

// Статические файлы React
app.use(express.static(path.join(__dirname, 'build')));

// Все запросы отправляем на index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Проверяем наличие сертификатов
const certPath = path.join(__dirname, 'localhost.pem');
const keyPath = path.join(__dirname, 'localhost-key.pem');

if (!fs.existsSync(certPath) || !fs.existsSync(keyPath)) {
  console.log('Генерация сертификатов...');
  exec('openssl req -x509 -newkey rsa:2048 -keyout localhost-key.pem -out localhost.pem -days 365 -nodes -subj "/CN=localhost"', (err) => {
    if (err) {
      console.error('Ошибка генерации сертификатов:', err);
      process.exit(1);
    }
    startServer();
  });
} else {
  startServer();
}

function startServer() {
  const options = {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath)
  };

  https.createServer(options, app).listen(3000, '0.0.0.0', () => {
    console.log('\n✅ HTTPS Server running on https://localhost:3000');
    
    // Получаем IP адрес
    const os = require('os');
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
      for (const iface of interfaces[name]) {
        if (iface.family === 'IPv4' && !iface.internal) {
          console.log(`📱 Phone access: https://${iface.address}:3000`);
        }
      }
    }
    console.log('⚠️  Browser will show security warning - click "Advanced" → "Proceed"\n');
  });
}