const express = require('express');
const app = express();

app.use(express.static(__dirname + '/../client'));

app.listen(3000, () => {
  console.log('...... app listening on port 3000! \n');
});

app.get('/', function(req, res){
  res.sendFile('index.html');
});