


$(document).ready(() => {
    //giving an action to the searchFrom via searchTest Value
    $('#searchForm').on('submit' , (e) => {
        var searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    })
});

function getMovies(searchText){
    //accessing the API via axios API Key link
    
    
    $.ajax({
        type: "GET",
        url:'http://www.omdbapi.com/?apikey=4e80b14d&t=' + searchText
    })

    .then((response) => {
        console.log(data);
        //perimeters needed to acccess the movie posters 
        var movies = response.data;
        var output = '';


        //loop of the movies array to output the data needed
        $.each(movies, (index, movie) =>{

        //output data to append to html   
            output += `
                <section >
                    <img src="https://image.tmdb.org/t/p/w500${movie.Poster}" class="img-thumb">
                    <h5>${movie.Title}</h5>
                    <P>THIS IS APPENDED</P>
                    <a onclick="movieSelected('${movie.imdbID}')" class="is-danger" href="#">Movie Details</a>
                </section>
            `;
        });  

        //appending to the hmtl container
        $('#movie-list').html(output);
    })

    .catch(function (err) {
      console.log(err);
    });
}


/* 
//function for the 
function movieSelected(id){
    //store selection on session storage temporarely
    sessionStorage.setItem('movieId', id);
    // send it to the module activate the function
    moduleActive();
    //    window.location = '';
    return false;
  }

//activating the module fucntion
function moduleActive(){

    //Module//
   var movieMdl = document.querySelector('#movie-modal'); 
    //activate the modal
    $('movieMdl').attr("class", "is-active");

} */

//fuction activated for the More Info Button
function movieSelected(id){
    //temporary session storage for the movei selected
    sessionStorage.setItem('movieId', id);
    //link to the movie info tab
    window.location = './movie-info.html';
    return false;
  }
  
  //rendering the information needed for the movie tab 
  function getMovie(){
    var movieId = sessionStorage.getItem('movieId');



    // Make a request for a user with a given ID
    //axios.get("https://api.themoviedb.org/3/movie/" + movieId + "?api_key=98325a9d3ed3ec225e41ccc4d360c817")
     
    
    $.ajax({
        type: "GET",
        url:'http://www.omdbapi.com/?apikey=4e80b14d&t=' + movieId
    })
    
    .then(function (response) {
      let movie = response.data;
      console.log(movie);
      let output = `
            <div class="columns" id="info-box">
            <div  id="movie-info" class="column" >
                <article class="video-item">
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="info-photo">  <section class="video-desc">
                        <h2>${movie.title}</h2>
                        </br>
                    </br>
                        <ul class="list-group">
                            <li class="list-group-item"><strong>Genre:</strong> ${movie.genres[0].name}, ${movie.genres[1].name}</li>
                            <li class="list-group-item"><strong>Released:</strong> ${movie.release_date}</li>
                            <li class="list-group-item"><strong>Rated:</strong> ${movie.vote_average}</li>
                            <li class="list-group-item"><strong>Runtime:</strong> ${movie.runtime} min.</li>
                            <li class="list-group-item"><strong>Production Companies:</strong> ${movie.production_companies[0].name} min.</li>
                            </ul>
                        </br></br>
                        <h2>Plot</h3>
                            ${movie.overview}
                            <hr>
                            <button href="http://imdb.com/title/${movie.imdb_id}" target="_blank" class="is-danger">View IMDB</button>
                            <button href="index.html" class="is-danger" >Go Back To Search</button>
                    </section>
                </article>
            
            </div>
      `;
      $('#movieinfo-list').html(output);
      })
      .catch(function (error) {
        console.log(error);
      });
  }