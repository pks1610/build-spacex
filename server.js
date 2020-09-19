const express = require('express');
const app = express();
const path = require('path');
var PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'dist/demo-space-x')));

app.listen(PORT, () => console.log('Server Running on port 3000'));