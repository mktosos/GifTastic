var topics = ["gameboy", "atari lynx", "gameboy advanced", "sega saturn", "atari 2600", "coleco","nes", "snes", "xbox 360", "playstation","ps2","ps3"]

assembleButtons();
listen();

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

            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height.url);

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