//GLOBALS


$(document).ready(function () {
	// the webpage is ready/loaded - lets run our javascript

	// uncomment to this text rendered in the webpage
	// $( "#data" ).append( "This text came from javascript. Jquery injected this text into the DOM." );
	// $( "#data" ).append( "This can be done with just javascript, but Jquery makes it easier" );

	let count = 0;

	// data is a div with an id, id's are slected with #id-name
	// this addes a listener to the click-me id / button and will call an inline function when its clicked
	getHeroes();
	$('#click-me').click(function () {
		$("#data").text("You have clicked the button " + count + " times!");
		count++;
	});
	$('#click-heroes').click(function () {
		window.location.href = "heroes.html";
	});
	$('#tester').click(function () {

		document.getElementById('demo').innerHTML = getHeroes();
	});
	$('#click-hero-data').click(function () {

		console.log("");
	});

});

function getHeroes() {
	var test;
	var heroData = JSON.parse(httpGet("https://api.opendota.com/api/heroes"));
	URLS = [];
	for (k in heroData) {
		var heroFormatText = heroData[k].name.replace("npc_dota_hero_" , "");

		URLS.push("http://cdn.dota2.com/apps/dota2/images/heroes/" + heroFormatText.toLowerCase() + "_lg.png");
		test += heroFormatText;
	}

	return test;






}
function displayHeroes() {

	for (k in URLS) {
		
		img = new Image();   // Create new img element
		img.src = URLS[k];
		var link = URLS[k].replace("http://cdn.dota2.com/apps/dota2/images/heroes/" ,"");
		link = link.replace("_lg.png", "");
		document.body.appendChild(img);
		
	
		
		img.onclick = makeHandler("heroes/" + link + ".html");
		
		 // Set source path
	}
	
	return URLS[0];

}
function makeHandler(j) {
	return function() {
	  console.log(j);
	  window.location.href = j;
	};}

function httpGet(theUrl) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", theUrl, false); // false for synchronous request
	xmlHttp.send(null);
	return xmlHttp.responseText;
}
function getHeroMatches(id)
{
return httpGet("https://api.opendota.com/api/heroes/" + id + "/matches");

}
function getHeroMatchups(id)
{
return httpGet("https://api.opendota.com/api/heroes/" + {hero_id} + "/matchups");

}
function getHeroDuration(id)
{
return httpGet("https://api.opendota.com/api/heroes/" + {hero_id} + "/durations");

}
function getHeroPlayers(id)
{
return httpGet("https://api.opendota.com/api/heroes/" + {hero_id} + "/players");

}