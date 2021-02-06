var saveBtn = document.querySelector("#saveBtn");
var userInput = document.querySelector("#search-hero");
var marvelApiKey = "?apikey=8544f15bee458e41b62dad89c68ebf90";
var omdbApiKey = "http://www.omdbapi.com/?apikey=4e80b14d&s=batman";
var character = JSON.parse(localStorage.getItem('character')) || [];

$("#search-hero").keyup(function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        $("#searchBtn").click();
    }
});

$("#searchBtn").on("click", function () {
    var QUERY = $("#search-hero").val().trim();
    console.log(QUERY)
    $("#search-hero").attr("placeholder", "Enter another hero");
    character.unshift(QUERY);
    localStorage.setItem("character", JSON.stringify(character))
    console.log(character)
});

fetch(omdbApiKey)
    .then(function (response) {
        // Turn response to json format
        response.json()
    .then(function (data) {
        //console.log the final data
        console.log(data);
    })
    }
        )
