var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('<h1>ahello</h1>')
})

app.get('/home', function (req, res) {
  res.json({
     key: 'value1',
     id: 1
});
})

app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port 3000!')
})
