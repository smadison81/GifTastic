
// Example queryURL for Giphy API
var gifs = ["Black Dynamite", "Tekken", "Mr. Baseball", "Hateful Eight"];


function displayGif() {

    var q = $(this).attr("data-name");
    var api_key = "&api_key=nBAkbogRHgIsRY86uWJH4q0ViWa7dkF2";
    var queryURL = "https://api.giphy.com/v1/gifs/search?" + "q=" + q + api_key + "&limit=10";




    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var results = response.data;
        console.log(results);
        for (var i = 0; i < results.length; i++) {

            var spaceOut = $("<div>");

            var animated = results[i].images.fixed_height.url;
            var still = results[i].images.fixed_height_still.url;
            var ratings = results[i].rating;
            var gifDisplay = $("<img>");
            var rate = $("<p>").text("Rating: " + ratings);

            gifDisplay.attr("src", still);
            gifDisplay.addClass("giphy");
            gifDisplay.addClass("static");
            gifDisplay.addClass(".gifContainer");
            gifDisplay.attr("data-state", "still");
            gifDisplay.attr("data-still", still);
            gifDisplay.attr("data-animate", animated);
            gifDisplay.attr("alt", q);
            rate.addClass("rateFloat");
            // spaceOut.append(rate);
            spaceOut.append(gifDisplay);
            $("#gif-view").prepend(spaceOut).fadeIn("fast");

            $('.giphy')
            .mouseover(function () {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animated");
            })
            .mouseout(function () {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            });

        }


    });


}

function renderButtons() {


    $('#buttons-view').empty();

    for (var i = 0; i < gifs.length; i++) {

        var newButton = $('<button>').text(gifs[i]);
        // Adds a class of gif to our button
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
$("#add-gif").on("click", function (event) {


    event.preventDefault();

    var newGif = $("#gif-input").val().trim();

    gifs.push(newGif);

    renderButtons();
});

$(document).on("click", ".gif", displayGif);

// Calling the renderButtons function to display the initial list of gifs
renderButtons();










