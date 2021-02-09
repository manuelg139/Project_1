$(document).ready(() => {
    $('#searchForm').on('submit' , (e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    })
});

function getMovies(searchText){
    axios.get('http://www.omdbapi.com/?apikey=8544f15bee458e41b62dad89c68ebf90&language=en-US&query=' + searchText)
    .then((response) => {
        console.log(response);
        let movies = response.data.Search;
        let output = '';
        $.each(movies, (index, movie) =>{
            output += `
           
            `;
        });  
    })
    .catch((err) => {
        console.log(err);
    });
} 
