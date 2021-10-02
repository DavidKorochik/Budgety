const express = require('express');
const db = require('./db/mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());

app.listen(process.env.PORT, async () => {
  try {
    await db();
    console.log(`Server is running on port ${process.env.PORT}`);
  } catch (err) {
    console.error('Connection error');
  }
});
