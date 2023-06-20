const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '../client/build')));


app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });