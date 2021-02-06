
// var saveBtn = document.querySelector("#saveBtn");
// var userInput = document.querySelector("#search-hero");
// var marvelApiKey = "?ts=1?apikey=8544f15bee458e41b62dad89c68ebf90";
// var omdbApiKey = "http://www.omdbapi.com/?i=tt3896198&apikey=4e80b14d";
// var character = JSON.parse(localStorage.getItem('character')) || [];


// $("#search-hero").keyup(function (event) {
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         $("#searchBtn").click();
//     }
// });

// $("#searchBtn").on("click", function () {
//     var QUERY = $("#search-hero").val().trim();
//     getCharacter(QUERY);
//     console.log(QUERY)
//     $("#search-hero").attr("placeholder", "Enter another hero");
//     character.unshift(QUERY);
//     localStorage.setItem("character", JSON.stringify(character))
//     console.log(character)
// });

// function getCharacter(QUERY){
//         var marvelURL = "http://gateway.marvel.com:443/v1/public/characters?";
//         $.ajax({
//             url: marvelURL + QUERY + marvelApiKey + "&hash=3a9b3c3dbbbe92cca9ff4de1881c1c514f650615",
//             method: "GET"
//         })
    
//         .then(function(currentCharacter){
//             $("#charName").html(localStorage.getItem('character'))
//             $("#charBio").html(currentCharacter.data.results[0].description);
//             console.log(currentCharacter.data.results.description)
//         })
//     }

fetch('https://gateway.marvel.com:443/v1/public/characters?name=Iron%20Man&apikey=8544f15bee458e41b62dad89c68ebf90')
      .then(response => response.json())
      .then(data => console.log(data));