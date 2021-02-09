$(document).ready(() => {
    // $('#searchForm').on('keyup' , (e) => {
    //     console.log("Checked")
    //     console.log(e)
    //     if(e.code === "Enter"){
    //     e.preventDefault();
    //     let searchText = $('#searchText').val();
    //     console.log(searchText)
    //     getMovies(searchText);
    // }

    // })

$(".submitBtn").on("click", function(e){
e.preventDefault();
console.log("Clicked")
        let searchText = $('#searchText').val();
        console.log(searchText)
        getMovies(searchText);
})
function getMovies(searchText){
    $.ajax({
        type: "GET",
        url:'http://www.omdbapi.com/?apikey=4e80b14d&t=' + searchText
    })
    .then((response) => {
        console.log(response);
        // let movies = response.data.Search;
        // let output = '';
        // $.each(movies, (index, movie) =>{
        //     output += `
           
        //     `;
        // });  
    })
    .catch((err) => {
        console.log(err);
    })
}
});

