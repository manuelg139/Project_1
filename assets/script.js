var saveBtn = document.querySelector("#saveBtn");
var userInput = document.querySelector("#search-hero");
var marvelApiKey = "&apikey=8544f15bee458e41b62dad89c68ebf90";
var omdbApiKey = "https://www.omdbapi.com/?apikey=4e80b14d";
var character = JSON.parse(localStorage.getItem('character')) || [];

$("#search-hero").keyup(function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        $("#searchBtn").click();
    }
});

$("#searchBtn").on("click", function () {
    var QUERY = $("#search-hero").val().trim();
    getCharacter(QUERY);
    console.log(QUERY)
    $("#search-hero").attr("placeholder", "Enter another hero");
    character.unshift(QUERY);
    localStorage.setItem("character", JSON.stringify(character))
    console.log(character)
});

function getCharacter(QUERY){
        var marvelURL = "https://gateway.marvel.com:443/v1/public/characters?name=";
        $.ajax({
            url: marvelURL + QUERY + marvelApiKey,
            method: "GET"
        })
    
        .then(function(currentCharacter){
            //grabs character name and displays it on character box
            $("#charName").html(currentCharacter.data.results[0].name)
            //grabs character bio and displays it on character box - will ONLY show bio IF it's in the marvel API ie Gambit does not have a bio description 
            $("#charBio").html(currentCharacter.data.results[0].description);
            //created var for icon path from marvel api 
            var iconPath = currentCharacter.data.results[0].thumbnail.path;
            //var that adds iconpath and sizing for image to display on screen
            var charImg = iconPath + "/standard_fantastic.jpg";
            //displays image of character standard_fantastic 250x250px
            $("#charImg").html("<img src='" + charImg + "'>")
            // console.log(currentCharacter.data);
            // console.log(currentCharacter.results);
            // console.log(currentCharacter.data.results);
            // console.log(currentCharacter.data.results[0].description);
            $("#appearson").html(currentCharacter.data.results[0].comics.items[0].name);
            console.log(currentCharacter.data.results[0].comics.items[0].name)
        })
    }

function movieInfo(){
    fetch(omdbApiKey + "&t=batman")
    .then(response => response.json())
    .then(data => console.log(data))
}
movieInfo();

// fetch('https://gateway.marvel.com:443/v1/public/characters?name=Iron%20Man&apikey=8544f15bee458e41b62dad89c68ebf90')
//       .then(response => response.json())
//       .then(data => console.log(data));
