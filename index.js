$(document).ready(function(){

	$(".radar").append("<img>");
	console.log(document)

	// const request = require('request-promise');
	const URL = "http://api.wunderground.com/api/18baf686d82d4e8b/animatedradar/q/CA/Truckee.gif?newmaps=1&timelabel=1&timelabel.y=10&num=5&delay=50"; // TODO Rename better

	let request = fetch(URL)
	  .then(response => response.blob())
		.then(appendToRadarImage);

		// .then(function(imageBlob) {
		//   document.querySelector('.radar img').src = URL.createObjectURL(imageBlob);
		// });
})

function appendToRadarImage(blob) {
	return document.querySelector('.radar img').src = URL.createObjectURL(blob);
}
