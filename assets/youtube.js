// yt API Key AIzaSyA9k9iLLPRUTDJMlF4_2rCknRa3LfeV54w
// client ID 282786124678-j2slptac7i2pp0mt7cp49p3sft8ncd4m.apps.googleusercontent.com
// CLIENT SECRET 


$(document).ready(function(){

    var apiKey = 'AIzaSyA9k9iLLPRUTDJMlF4_2rCknRa3LfeV54w';
    var playlistId = 'PLUUfwPgYNgfys8eSvBnyMWFPbdJcuL-Xm';
    var queryURL = 'https://www.googleapis.com/youtube/v3/playlists';
 
    var options = {
        part: 'snippet',
        key: key,
        playlistId: playlistId,
    }

    loadVids();
    
    function loadVids(){
      $.ajax({
        url: queryURL,
        method: 'GET'
        })
        .then(function(reponse){
          console.log(respponse)
        })
       /*  $.getJSON(URL, options, function(data){
            console.log(data.playlistId);
 */
            //console log is not working
            // i need to find the parameter for the video ID to embeed on the main video console
            // var id = data.items
       
            // mainVid();
        
        };
/* 
    function mainVid(id){
        $('#youtube-video').html(`
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
        `);
    }
 */
});


/* 
{
    "kind": "youtube#playlistListResponse",
    "etag": "6E3teb2_9ifOlfmPfxkraK-3ZoY",
    "pageInfo": {
      "totalResults": 1,
      "resultsPerPage": 3
    },
    "items": [
      {
        "kind": "youtube#playlist",
        "etag": "DkbgvU6qSvcZoITeSAO0V7TBqug",
        "id": "PLUUfwPgYNgfys8eSvBnyMWFPbdJcuL-Xm",
        "snippet": {
          "publishedAt": "2020-02-07T00:56:04Z",
          "channelId": "UCnFVla2edZ7khmah18DmuZQ",
          "title": "Marvel Cinematic Universe (2008/2021) | All Trailers/TV Spots",
          "description": "Phase One: \nIron Man (2008)\nThe Incredible Hulk (2008)\nIron Man 2 (2010)\nThor (2011)\nCaptain America: The First Avenger (2011)\nMarvel's The Avengers (2012)\n\nPhase Two: \nIron Man 3 (2013)\nThor: The Dark World (2013)\nCaptain America: The Winter Soldier (2014)\nGuardians of the Galaxy (2014)\nAvengers: Age of Ultron (2015)\nAnt-Man (2015)\n\nPhase Three: \nCaptain America: Civil War (2016)\nDoctor Strange (2016)\nGuardians of the Galaxy Vol. 2 (2017)\nSpider-Man: Homecoming (2017)\nThor: Ragnarok (2017)\nBlack Panther (2018)\nAvengers: Infinity War (2018)\nAnt-Man and the Wasp (2018)\nCaptain Marvel (2019)\nAvengers: Endgame (2019)\nSpider-Man: Far From Home (2019)\n\nPhase Four: \nMarvel Studios: Legends (2021)\nWandaVision (2021)\nThe Falcon and the Winter Soldier (2021) \nBlack Widow (2021)\nLoki (2021)\nShang-Chi and the Legend of the Ten Rings (2021)\nWhat If...? (2021)\nEternals (2021)\nMs. Marvel (2021)\nHawkeye (2021)\nSpider-Man 3 (2021)",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/_zFtTPw3UGU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/_zFtTPw3UGU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/_zFtTPw3UGU/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/_zFtTPw3UGU/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/_zFtTPw3UGU/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "Michelangelo Carmona",
          "localized": {
            "title": "Marvel Cinematic Universe (2008/2021) | All Trailers/TV Spots",
            "description": "Phase One: \nIron Man (2008)\nThe Incredible Hulk (2008)\nIron Man 2 (2010)\nThor (2011)\nCaptain America: The First Avenger (2011)\nMarvel's The Avengers (2012)\n\nPhase Two: \nIron Man 3 (2013)\nThor: The Dark World (2013)\nCaptain America: The Winter Soldier (2014)\nGuardians of the Galaxy (2014)\nAvengers: Age of Ultron (2015)\nAnt-Man (2015)\n\nPhase Three: \nCaptain America: Civil War (2016)\nDoctor Strange (2016)\nGuardians of the Galaxy Vol. 2 (2017)\nSpider-Man: Homecoming (2017)\nThor: Ragnarok (2017)\nBlack Panther (2018)\nAvengers: Infinity War (2018)\nAnt-Man and the Wasp (2018)\nCaptain Marvel (2019)\nAvengers: Endgame (2019)\nSpider-Man: Far From Home (2019)\n\nPhase Four: \nMarvel Studios: Legends (2021)\nWandaVision (2021)\nThe Falcon and the Winter Soldier (2021) \nBlack Widow (2021)\nLoki (2021)\nShang-Chi and the Legend of the Ten Rings (2021)\nWhat If...? (2021)\nEternals (2021)\nMs. Marvel (2021)\nHawkeye (2021)\nSpider-Man 3 (2021)"
          }
        }
      }
    ]
  }
   */