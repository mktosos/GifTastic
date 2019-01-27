var topics = ["javascript", "css", "french bulldog", "fishing", "boston terrier", "html","kayak", "coding", "large mouth bass", "yoga","ashtanga","inversion"]

assembleButtons();
listen();

  // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
  var state = $(this).attr("data-state");
  // If the clicked image's state is still, update its src attribute to what its data-animate value is.
  // Then, set the image's data-state to animate
  // Else set src to the data-still value
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }


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
    listen();
  }else{
    return;
  }
});

function listen(){
//button triggers ajax query based on data-person attr
  $("button").on("click", function() {
      var name = $(this).attr("data-person");
      var queryURL="https://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=EoguPzXakIlXVhK80UcmN4L3vU1NBwAb&limit=10";
        
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





            urlStr=results[i].images.fixed_height.url
            console.log(urlStr);
            var newUrlStr = urlStr.slice(0, -4) +"_s"+urlStr.slice(-4);
            console.log(newUrlStr);


            





            var personImage = $("<img>");
            personImage.attr("src", newUrlStr);
            personImage.attr("data-still", newUrlStr);
            personImage.attr("data-animate", urlStr);
            personImage.attr("data-state","still");
            personImage.attr("class","gif");
            $(".gif").on("click", function() {
              var state = $(this).attr("data-state");
              // If the clicked image's state is still, update its src attribute to what its data-animate value is.
              // Then, set the image's data-state to animate
              // Else set src to the data-still value
              if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
              } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
              }
            });
            console.log(results[i].images.fixed_height.url)
            gifDiv.prepend(p);
            gifDiv.prepend(personImage);

            $("#gifs-appear-here").prepend(gifDiv);
          }
        });
    });
  }  

//creates buttons in for loop through array above
function assembleButtons(){
  for (let index = 0; index < topics.length; index++) {
      var dpIndex = "data-person"+ index;
      var button = $("#buttonDiv").append("<button class=" + dpIndex +">");
      var topicsIndex = (topics[index]);
      $('button.'+dpIndex).attr("data-person",topicsIndex);
      $('button.'+dpIndex).text(topicsIndex);
      console.log(dpIndex);
  }
}
$("img").on("click", function() { alert ("hey")});