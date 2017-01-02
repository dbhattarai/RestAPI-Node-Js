var express = require('express')
var app = express()
var fs = require("fs");

app.get('/', function (req, res) {
   fs.readFile( __dirname + "/" + "dataSource.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/ops/health', function (req, res) {
  res.sendStatus(200);
})

app.get('/home', function (req, res) {
  res.json({
     key: 'value1',
     id: 1
});
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
});
