// filepath: e:\VAM\autorepoServer\AutoRFP_server\server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Use db.json as the data source
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 3000; // Use Render's PORT or default to 3000
const host = '0.0.0.0'; // Bind to 0.0.0.0 for external access

server.listen(port, host, () => {
  console.log(`JSON Server is running on http://${host}:${port}`);
});