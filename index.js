$(document).ready(function(){
	class WeatherData{
		constructor(city){
			this.city = city;
			this.getWeatherInfo =
				fetch(`http://api.wunderground.com/api/18baf686d82d4e8b/conditions/q/CA/${this.city}.json`)
					.then(response => response.text())
					.then(JSON.parse);
			this.displayWeatherInfo =
			this.getWeatherInfo
			.then(response => {
				this.html = $('<div>');
				console.log(response.current_observation.feelslike_c);
			})
		}

		// createRadar(){
		// 	let url = "http://api.wunderground.com/api/18baf686d82d4e8b/animatedradar/q/CA/Truckee.gif?newmaps=1&timelabel=1&timelabel.y=10&num=5&delay=50"
		// 	let radar = fetch(url)
	  // 	.then(response => response.blob())
		// 	.then(appendToRadarImage);
		// 	function appendToRadarImage(blob){
		// 		return document.querySelector('.radar img').src = URL.createObjectURL(blob);
		// 	}
		// }

	}
	var squaw = new WeatherData("Olympic_Valley")

	squaw.displayWeatherInfo;
})
