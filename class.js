class WeatherData{
	constructor(city){
		this.city = city;
		this.getRadar =
			 fetch("http://api.wunderground.com/api/18baf686d82d4e8b/animatedradar/q/CA/Truckee.gif?newmaps=1&timelabel=1&timelabel.y=10&num=5&delay=50")
	  	.then(response => response.blob());


		this.displayRadar =
			this.getRadar
			.then(response => {
				this.radar = $("<div>").addClass('radar');
				var img = $('<img>')
				img.attr('src', URL.createObjectURL(response))
				this.radar.append(img)
				$('main').append(this.radar);
			});


		this.getWeatherInfo =
			fetch(`http://api.wunderground.com/api/18baf686d82d4e8b/conditions/q/CA/${this.city}.json`)
				.then(response => response.text())
				.then(JSON.parse);


		this.displayWeatherInfo =
		this.getWeatherInfo
		.then(response => {
			console.log(response.current_observation);
			this.currentWeather = $('<div>').addClass('currentWeather');
			this.currentWeather.append($('<div>').text((response.current_observation.display_location.full)));
			this.currentWeather.append($('<div>').text((response.current_observation.weather)));
			this.currentWeather.append($('<div>').text((response.current_observation.temp_f)));
			this.currentWeather.append($('<div>').text((response.current_observation.wid_dir)));
			$('main').append(this.currentWeather)
		})
	}
}
