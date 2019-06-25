const express = require('express');

const app = express();

const port = 5000;

app.listen(port, () => {
  console.log(`now listening for requests on port ${port}`);
})
