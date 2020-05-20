var express = require('express');
var app = express();

app.use(express.static('./dist/eshop-angular'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', { root: 'dist/eshop-angular/' });
});

app.listen(process.env.PORT || 8080);