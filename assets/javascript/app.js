

// var topics = "honeybees";
//

var topics = ["Nina+Simone","Keith+Haring","Yayoi+Kusama", "Basquiat", "SZA", "Quinta"];
var quotes = ["I'll tell you what Freedom is to me. No fear.","Children know something that most people have forgotten.","I am the modern Alice in Wonderland","Royalty, heroism, and the streets.","I’m sorry I’m not more ladylike","I don't have perfect eyebrows but I have a good heart."];


for (var i = 0; i < topics.length; i++) {

  var button = '<button type="button" class="btn btn-primary my-btn-margin" data-search="'+ topics[i] +'">' + quotes[i] + '</button>'

  $('.gifs-here').append(button);
};





$('button').on('click', function(){
  var topic = $(this).data("search");

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=QFBzn6T2MHSnjLBzFwDdULuI7kCEozbq&limit=5";

  console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).done( function(response) {
    console.log(response);
  });

});
