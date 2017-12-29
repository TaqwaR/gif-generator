
var topics = ["Nina+Simone","Keith+Haring","Yayoi+Kusama", "Basquiat", "SZA", "Quinta"];
var quotes = ["I'll tell you what Freedom is to me. No fear.","Children know something that most people have forgotten.","I am the modern Alice in Wonderland","Royalty, heroism, and the streets.","I’m sorry I’m not more ladylike","I don't have perfect eyebrows but I have a good heart."];


for (var i = 0; i < topics.length; i++) {
  var button = '<button type="button" class="btn btn-primary my-btn-margin" data-search="'+ topics[i] +'">' + quotes[i] + '</button>'
  $('.btns-here').append(button);
};


$('button').on('click', function() {
  var topic = $(this).data("search");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=QFBzn6T2MHSnjLBzFwDdULuI7kCEozbq&limit=15";
  console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).done(function(response) {
    console.log(response);

    for (var i = 0; i < response.data.length; i++) {
      var gifDiv = $("<div>");
      var gifInfo = $("<h5>").text("Rating: " + response.data[i].rating);
      var gifImg = $("<img>");

      gifImg.attr('src', response.data[i].images.fixed_height.url);
      gifImg.attr('data-still', response.data[i].images.fixed_height_still.url);
      gifImg.attr('data-animate', response.data[i].images.fixed_height.url);
      gifImg.attr('data-state', 'animate');

      gifDiv.append(gifInfo);
      gifDiv.append(gifImg);

      $('.gifs-here').prepend(gifDiv);
    };


    $(gifImg).on('click', function() {

      var state = $(this).attr("data-state");

      if (state === 'animate') {
        $(this).attr('src', $(this).attr('data-still'));
        $(this).attr('data-state', 'still');
      } else {
        $(this).attr('src', $(this).attr('data-animate'));
        $(this).attr('data-state', 'animate');
      }

    });

  });

});
