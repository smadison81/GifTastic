var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

// Function for displaying movie data
function renderButtons() {

  // YOUR CODE GOES HERE

  $('#buttons-view').empty();

  for (var i = 0; i < movies.length; i++) {

    var newButton = $('<button>').text(movies[i]);

    $('#buttons-view').append(newButton);


  }
}

  // This function handles events where one button is clicked
  $("#add-movie").on("click", function () {

    // YOUR CODE GOES HERE


    event.preventDefault();

    var newMovie = $('#movie-input').val();

    movies.push(newMovie);

    renderButtons();
  });
  

// Calling the renderButtons function to display the initial list of movies
renderButtons();