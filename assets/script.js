var saveBtn = document.querySelector("#saveBtn");
var userInput = document.querySelector("#search-hero");
var marvelApiKey = "?apikey=8544f15bee458e41b62dad89c68ebf90";
var omdbApiKey = "http://www.omdbapi.com/?i=tt3896198&apikey=4e80b14d";
var selects = JSON.parse(localStorage.getItem('selects')) || [];