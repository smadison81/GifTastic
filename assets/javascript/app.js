// Example queryURL for Giphy API
var gifs = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];


function displayGif() {

    var q = $(this).attr("data-name");
    var api_key = "&api_key=nBAkbogRHgIsRY86uWJH4q0ViWa7dkF2";
    var queryURL = "http://api.giphy.com/v1/gifs/search?" + "q=" + q + api_key;

    console.log(queryURL);


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var results = response.data;
        console.log(results);
        for (var i = 0; i < results.length; i++) {

            var spaceOut = $("<div class='col-md-4'>");


            var defaultAnimatedSrc = results[i].images.fixed_height.url;
            var staticSrc = results[i].images.fixed_height_still.url;
            var gifDisplay = $("<img>");

            gifDisplay.attr("src", staticSrc);
            gifDisplay.addClass("netflixGiphy");
            gifDisplay.attr("data-state", "still");
            gifDisplay.attr("data-still", staticSrc);
            gifDisplay.attr("data-animate", defaultAnimatedSrc);
            spaceOut.append(gifDisplay);
            $("#movies-view").prepend(spaceOut);
        }
    });

}

// Function for displaying movie data
function renderButtons() {

    // YOUR CODE GOES HERE

    $('#buttons-view').empty();

    // for (var i = 0; i < gifs.length; i++) {

    //     

    //     $('#buttons-view').append(newButton);

    for (var i = 0; i < gifs.length; i++) {

        var newButton = $('<button>').text(gifs[i]);
        // Adds a class of movie to our button
        newButton.addClass("gif");
        // Added a data-attribute
        newButton.attr("data-name", gifs[i]);
        // Provided the initial button text
        newButton.text(gifs[i]);
        // Added the button to the buttons-view div
        $("#buttons-view").append(newButton);




    }
}



// This function handles events where one button is clicked
$("#add-movie").on("click", function (event) {

    // YOUR CODE GOES HERE


    event.preventDefault();

    var newGif = $("#movie-input").val().trim();

    gifs.push(newGif);

    renderButtons();
});

$(document).on("click", ".gif", displayGif);

// Calling the renderButtons function to display the initial list of gifs
renderButtons();








