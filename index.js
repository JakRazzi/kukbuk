var app = require('./server.js');

var port = process.env.PORT || 3739;

app.listen(port);

console.log('Server listening on port: ', port);