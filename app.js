const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, './frontend/build')));

app.get('/names', (req, res) => {
   res.send("prod");
})

app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.js'));
 });

app.listen(4000, () => {
   console.log("Server is running on port 4000");
})