//Install express server
const express = require('express');
const path = require('path');
const Twitter = require('twitter');

const app = express();
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

const http = require('http').Server(app);
const io = require('socket.io')(http);

var client = new Twitter({
  consumer_key: 'SxDMVezegrEBCoofXjsLIyjt1',
  consumer_secret: 'uClHchI7IFOZ6F6xK42YY2K1QN6jvb4a0tjZSc76AFtSZWFlvV',
  access_token_key: '211474299-Kke3njdIGi5FNxyhSx5JZZ18KPPiRM7AGbHYXriw',
  access_token_secret: '1eeCyMSIkIY4kg8BSn0ye5aahRxIcpYlCWTGcgzpHT4k3'
});

io.on('connection', socket => {
  console.log('connection received');
});

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

const stream = client.stream('statuses/filter', { track: 'advertising' });

stream.on('data', event => {
  io.emit('tweets', event.text);
});

// Start the app by listening on the default Heroku port
http.listen(process.env.PORT || 8080, () => {
  console.log('Server running');
});
