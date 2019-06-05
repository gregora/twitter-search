const Twitter = require('twitter');
const fs = require('fs');

var login = fs.readFileSync("login.json");
login = JSON.parse(login);


var client = new Twitter(login);

var search = ['donald', 'your_word_2'];

for (var s in search){

  searchtweets(search[s]);

}


function searchtweets(s){

  client.stream('statuses/filter', {track: s}, function(stream) {
    stream.on('data', function(event) {
      console.log(event && event.text);
    });

    stream.on('error', function(error) {
      console.log(error);
      setTimeout(searchtweets, 900000, s)
    });
  });

}
