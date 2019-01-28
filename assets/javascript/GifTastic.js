var topics = ["javascript", "css", "fishing", "boston terrier", "html","kayak", "coding", "github", "yoga","ashtanga","beer"]

assembleButtons();
grabGifs();

//listens for return key in input field
var input = document.getElementById("addNames");
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13 && document.getElementById("addNames").value!=="") {
    // get input val to add button
    var inputVal = document.getElementById("addNames").value;
    //puts inputted val into topics array
    topics.push(inputVal);
    //clears input box and buttonDiv of original buttons
    document.getElementById("addNames").value="";
    $('#buttonDiv').html(""); 
    assembleButtons(); 
    grabGifs();
  }
});
//creates buttons in for loop through array above
function assembleButtons(){
  for (let index = 0; index < topics.length; index++) {
      var dpIndex = "data-person"+ index;
      var button = $("#buttonDiv").append("<button class=" + dpIndex +">");
      var topicsIndex = (topics[index]);
      $('button.'+dpIndex).attr("data-person",topicsIndex);
      $('button.'+dpIndex).text(topicsIndex);
  }
}
function grabGifs(){
//button triggers ajax query based on data-person attr
  $("button").on("click", function() {
      var name = $(this).attr("data-person");
      var queryURL="https://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=EoguPzXakIlXVhK80UcmN4L3vU1NBwAb&limit=10";
      $.ajax({
      url: queryURL,
      method: "GET"
      }) 
        //after getting data add ratings in div
        .then(function(response) {
          var results = response.data;
          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");
            var rating = results[i].rating;


            var title = results[i].title;
            console.log(title);


            var p = $("<p>").text(" Rating: " + rating);
            var q = $("<p>").text(title);
            //get url from object, add "_s" in string for still image
            urlStr=results[i].images.fixed_height.url
            var newUrlStr = urlStr.slice(0, -4) +"_s"+urlStr.slice(-4);
            //dynamicaly create img with various attributes needed to pause and animate
            var personImage = $("<img>");
            personImage.attr("src", newUrlStr);
            personImage.attr("data-still", newUrlStr);
            personImage.attr("data-animate", urlStr);
            personImage.attr("data-state","still");
            personImage.attr("class","gif");
            // on click, flip flop still/animate state to opposite of present state
            $("img").on("click", function() {
              var state = $(this).attr("data-state");
              if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
              } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
              }
            });
            //add images to div, display div w/ image and rating
            gifDiv.prepend(p);
            gifDiv.prepend(personImage);
            gifDiv.prepend(q);
            $("#gifs-appear-here").prepend(gifDiv);
          }
        });
    });
  }  