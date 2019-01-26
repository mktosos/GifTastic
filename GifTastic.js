var topics = ["gameboy", "gameboy color", "gameboy advanced", "gba"]
for (let index = 0; index < topics.length; index++) {
    var dpIndex = "data-person"+ index
    var button = $("#buttonDiv").append("<button class=" + dpIndex +">");
    var topicsIndex = (topics[index]);
    $('button.'+dpIndex).attr("data-person",topicsIndex);
    $('button.'+dpIndex).text(topicsIndex);
    console.log(dpIndex);
}
 
$("button").on("click", function() {
    console.log("hi")
    var person = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=EoguPzXakIlXVhK80UcmN4L3vU1NBwAb&limit=10";
      
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(personImage);

          $("#gifs-appear-here").prepend(gifDiv);
          console.log("hi")
        }
      });
  });