const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello DevOps 🚀');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');

  // Stop server after 3 seconds (IMPORTANT)
  setTimeout(() => {
    console.log('Stopping server...');
    process.exit(0);
  }, 3000);
});