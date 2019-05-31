const Twitter = require('twitter');
const fs = require('fs');

var login = fs.readFileSync("login.json");
login = JSON.parse(login);


var client = new Twitter(login);

var search = 'your_word';

client.stream('statuses/filter', {track: search}, function(stream) {
  stream.on('data', function(event) {
    console.log(event && event.text);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
