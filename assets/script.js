var saveBtn = document.querySelector("#saveBtn");
var userInput = document.querySelector("#search-hero");
var marvelApiKey = "&apikey=8544f15bee458e41b62dad89c68ebf90";
var omdbApiKey = "https://www.omdbapi.com/?apikey=4e80b14d";
var character = JSON.parse(localStorage.getItem('character')) || [];
var charImg = "";
var charName = "";
var charSaveArr = [];
var output = '';

$("#search-hero").keyup(function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        $("#searchBtn").click();
    }
});

$("#searchBtn").on("click", function () {
    var QUERY = $("#search-hero").val().trim();
    getCharacter(QUERY);
    // console.log(QUERY)
    $("#search-hero").attr("placeholder", "Enter another hero");
    character.unshift(QUERY);
    localStorage.setItem("character", JSON.stringify(character))
    // console.log(character)
});

function getCharacter(QUERY) {
    var marvelURL = "https://gateway.marvel.com:443/v1/public/characters?name=";
    $.ajax({
        url: marvelURL + QUERY + marvelApiKey,
        method: "GET"
    })

        .then(function (currentCharacter) {
            //grabs character name and displays it on character box
            $("#charName").html(currentCharacter.data.results[0].name)
            //grabs character bio and displays it on character box - will ONLY show bio IF it's in the marvel API ie Gambit does not have a bio description 
            $("#appearson").html(currentCharacter.data.results[0].description);
            //created var for icon path from marvel api 
            var iconPath = currentCharacter.data.results[0].thumbnail.path;
            //var that adds iconpath and sizing for image to display on screen
            charImg = iconPath + "/standard_fantastic.jpg";
            charName = currentCharacter.data.results[0].name;
            //displays image of character standard_fantastic 250x250px
            $("#charImg").html("<img src='" + charImg + "'>")
            // console.log(currentCharacter.data);
            // console.log(currentCharacter.results);
            // console.log(currentCharacter.data.results);
            // console.log(currentCharacter.data.results[0].description);
            // $("#appearson").html(currentCharacter.data.results[0].comics.items[0].name
            //     + "<br>" + currentCharacter.data.results[0].series.items[0].name
            //     + "<br>" + currentCharacter.data.results[0].series.items[1].name
            //     + "<br>" + currentCharacter.data.results[0].series.items[2].name
            //     + "<br>" + currentCharacter.data.results[0].series.items[3].name
            //     + "<br>" + currentCharacter.data.results[0].series.items[4].name)
            // console.log(currentCharacter.data.results[0].urls[0].url)
            // console.log(currentCharacter.data.results[0].urls[1].url)
            // console.log(currentCharacter.data.results[0].urls[2].url)
        })
}

$("#saveBtn").on("click", function () {
    var QUERY = $("#search-hero").val().trim();
    console.log(charImg)
    console.log(charName)
    var charInfo = {
        // name : charName,
        image: charImg,
    };
    charSaveArr.push(charInfo);
    console.log(charSaveArr)
    getCharacter(QUERY);
    // console.log(QUERY)
    character.unshift(QUERY);
    localStorage.setItem("character", JSON.stringify(charSaveArr));
    // console.log(character)
    $("#char-line").empty();

/* 
 for (i = 0; i < charSaveArr.length; i++) {
        var newDiv = $("<div>");
        var newImg = $("<img>");
        newDiv.attr("class", "selects");
        // newImg.attr("<img src=" + charSaveArr[i].image + "'>");
        // console.log(charSaveArr[i].image)
        newDiv.append(newImg);

        // $("#char-line").html("<img src='" + charSaveArr[i].image + "'/>");
        // newChar = $("<img>").append("<img src='" + charSaveArr[i] + "'/>");
        $("#char-line").append("<img src='" + charSaveArr[i].image + "'/>");
        // $("#char-line").append(newChar)
        // newChar = newChar.slice(0, 6);

        // newChar = $(".selects").append(character[i]);
        // $(".selects").append(character[i]);
        charSaveArr = charSaveArr.slice(index, 1);
        // console.log(character)
        // console.log(newChar)
    }
    $("#search-hero").val("");
});
  */


        //loop of the movies array to output the data needed
        


        $.each(charSaveArr, (index, lineup) =>{
            

        //output data to append to html   
        output += `
        <img src='${lineup.image}'/>
    `;
});  output.slice(0,1)

//appending to the hmtl container
$('#char-line').html(output);
})





// function movieInfo() {
//     fetch(omdbApiKey + "&t=batman")
//         .then(response => response.json())
//         .then(data => console.log(data))
// }
// movieInfo();

$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    let searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
  });
});


// fetch('https://gateway.marvel.com:443/v1/public/characters?name=Iron%20Man&apikey=8544f15bee458e41b62dad89c68ebf90')
//       .then(response => response.json())
//       .then(data => console.log(data));
