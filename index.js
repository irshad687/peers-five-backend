import express from 'express';
import { createServer } from 'http';
import { initializeRoute } from './utils/routes.js';
import { initializeDBConnection } from './utils/db-connection.js';
import cors from 'cors'

const PORT = 3000

const app = express();
app.use(cors());

const server = createServer(app);

app.use(express.json());

initializeDBConnection();

server.listen(PORT, () => {
  console.log('App is listening at port', PORT);
  initializeRoute(app);
});
