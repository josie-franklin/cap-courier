const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.join(__dirname, '../client/build')));


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});