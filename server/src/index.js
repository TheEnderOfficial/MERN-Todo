const express = require('express');
const moduleToApp = require('./utils/moduleToApp');
require('dotenv').config();

const app = express();

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Add modules here
moduleToApp(app, require('./modules/hello/hello.module'));

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});