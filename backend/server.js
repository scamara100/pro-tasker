import 'dotenv/config'
import express from "express";
import './config/connection.js'

const app = express();
const port = process.env.PORT || 8081;

app.use(express.json());

app.listen(port, () => {
  console.log("Server listening on port: localhost:", port);
});
