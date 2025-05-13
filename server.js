const jsonServer = require('json-server');
const path = require('path');

// Create a json-server instance
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors, etc.)
server.use(middlewares);

// Use db.json as the data source
const router = jsonServer.router(path.join(__dirname, 'db.json'));

// Use the router
server.use(router);

// Start the server on the port provided by Vercel or default to 3000
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});