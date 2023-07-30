// sección de Node.js
// Importar módulos específicos de Node.js
const http = require('http');
const fs = require('fs');
const path = require('path');

// Definir el puerto a utilizar
const port = 3000;

// Crear servidor HTTP
const server = http.createServer((req, res) => {
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './index.html'; // Serve index.html by default when accessing the root URL
  }

  // Adquirir la extensión del archivo solicitado
  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
  };
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  // Leer y servir el archivo solicitado
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File not found
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('404 Not Found');
      } else {
        // Server error
        res.writeHead(500);
        res.end('500 Internal Server Error');
      }
    } else {
      // Respuesta exitosa
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

// Iniciar el servidor
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
