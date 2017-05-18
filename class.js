class WeatherData{
	constructor(city){
		this.city = city;
	}
	getRadar(){
		return fetch("http://api.wunderground.com/api/18baf686d82d4e8b/animatedradar/q/CA/Truckee.gif?newmaps=1&timelabel=1&timelabel.y=10&num=5&delay=50")
			.then(response => response.blob());
	}
	displayRadar(){
		return this.getRadar()
			.then(response => {
				this.radar = $("<div>").addClass('radar');
				var img = $('<img>')
				img.attr('src', URL.createObjectURL(response))
				this.radar.append(img)
				$('main').append(this.radar);
			});
	}
	getWeatherInfo(){
		return fetch(`http://api.wunderground.com/api/18baf686d82d4e8b/conditions/q/CA/${this.city}.json`)
			.then(response => response.text())
			.then(JSON.parse)
			.then(data => data)
	}
	displayWeatherInfo(){
		return this.getWeatherInfo().then(response => {
			this.currentWeather = $('<div>').addClass('currentWeather');
			this.currentWeather.append($('<div>').text(("Current Condtions:")));
			this.currentWeather.append($('<div>').text((response.current_observation.display_location.full)));
			this.currentWeather.append($('<div>').text((response.current_observation.weather)));
			this.currentWeather.append($('<div>').text((response.current_observation.temp_f)));
			this.currentWeather.append($('<div>').text((response.current_observation.wind_dir)));
			$('main').append(this.currentWeather)
		})
	}
	getForecastInfo(){
		return fetch(`http://api.wunderground.com/api/18baf686d82d4e8b/forecast10day/q/CA/${this.city}.json`)
			.then(response => response.text())
			.then(JSON.parse)
			.then(data => data)
	}
	displayForecastInfo(){
		return this.getForecastInfo().then(response => {
			console.log(response.forecast.simpleforecast.forecastday[0]);
			this.forecast = $('<div>').addClass('forecast');
			this.forecast.append($('<div>').text(("10 Day Forecast:")));
			this.forecast.append($('<br>'));
			this.forecast.append($('<div>').text((response.forecast.simpleforecast.forecastday[0].date.pretty)));
			this.forecast.append($('<div>').text(("High: " + response.forecast.simpleforecast.forecastday[0].high.fahrenheit + "ºF")));
			this.forecast.append($('<div>').text(("Low: " + response.forecast.simpleforecast.forecastday[0].low.fahrenheit + "ºF")));
			this.forecast.append($('<div>').text(("Snow: " + response.forecast.simpleforecast.forecastday[0].snow_allday.in + " in.")));
			this.forecast.append($('<br>'));

			this.forecast.append($('<div>').text((response.forecast.simpleforecast.forecastday[1].date.pretty)));
			this.forecast.append($('<div>').text(("High: " + response.forecast.simpleforecast.forecastday[1].high.fahrenheit + "ºF")));
			this.forecast.append($('<div>').text(("Low: " + response.forecast.simpleforecast.forecastday[1].low.fahrenheit + "ºF")));
			this.forecast.append($('<div>').text(("Snow: " + response.forecast.simpleforecast.forecastday[1].snow_allday.in + " in.")));
			this.forecast.append($('<br>'));

			this.forecast.append($('<div>').text((response.forecast.simpleforecast.forecastday[2].date.pretty)));
			this.forecast.append($('<div>').text(("High: " + response.forecast.simpleforecast.forecastday[2].high.fahrenheit + "ºF")));
			this.forecast.append($('<div>').text(("Low: " + response.forecast.simpleforecast.forecastday[2].low.fahrenheit + "ºF")));
			this.forecast.append($('<div>').text(("Snow: " + response.forecast.simpleforecast.forecastday[2].snow_allday.in + " in.")));
			this.forecast.append($('<br>'));

			this.forecast.append($('<div>').text((response.forecast.simpleforecast.forecastday[3].date.pretty)));
			this.forecast.append($('<div>').text(("High: " + response.forecast.simpleforecast.forecastday[3].high.fahrenheit + "ºF")));
			this.forecast.append($('<div>').text(("Low: " + response.forecast.simpleforecast.forecastday[3].low.fahrenheit + "ºF")));
			this.forecast.append($('<div>').text(("Snow: " + response.forecast.simpleforecast.forecastday[3].snow_allday.in + " in.")));
			this.forecast.append($('<br>'));

			this.forecast.append($('<div>').text((response.forecast.simpleforecast.forecastday[4].date.pretty)));
			this.forecast.append($('<div>').text(("High: " + response.forecast.simpleforecast.forecastday[4].high.fahrenheit + "ºF")));
			this.forecast.append($('<div>').text(("Low: " + response.forecast.simpleforecast.forecastday[4].low.fahrenheit + "ºF")));
			this.forecast.append($('<div>').text(("Snow: " + response.forecast.simpleforecast.forecastday[4].snow_allday.in + " in.")));
			this.forecast.append($('<br>'));

			this.forecast.append($('<div>').text((response.forecast.simpleforecast.forecastday[5].date.pretty)));
			this.forecast.append($('<div>').text(("High: " + response.forecast.simpleforecast.forecastday[5].high.fahrenheit + "ºF")));
			this.forecast.append($('<div>').text(("Low: " + response.forecast.simpleforecast.forecastday[5].low.fahrenheit + "ºF")));
			this.forecast.append($('<div>').text(("Snow: " + response.forecast.simpleforecast.forecastday[5].snow_allday.in + " in.")));
			this.forecast.append($('<br>'));

			this.forecast.append($('<div>').text((response.forecast.simpleforecast.forecastday[6].date.pretty)));
			this.forecast.append($('<div>').text(("High: " + response.forecast.simpleforecast.forecastday[6].high.fahrenheit + "ºF")));
			this.forecast.append($('<div>').text(("Low: " + response.forecast.simpleforecast.forecastday[6].low.fahrenheit + "ºF")));
			this.forecast.append($('<div>').text(("Snow: " + response.forecast.simpleforecast.forecastday[6].snow_allday.in + " in.")));
			this.forecast.append($('<br>'));

			this.forecast.append($('<div>').text((response.forecast.simpleforecast.forecastday[7].date.pretty)));
			this.forecast.append($('<div>').text(("High: " + response.forecast.simpleforecast.forecastday[7].high.fahrenheit + "ºF")));
			this.forecast.append($('<div>').text(("Low: " + response.forecast.simpleforecast.forecastday[7].low.fahrenheit + "ºF")));
			this.forecast.append($('<div>').text(("Snow: " + response.forecast.simpleforecast.forecastday[7].snow_allday.in + " in.")));
			this.forecast.append($('<br>'));

			this.forecast.append($('<div>').text((response.forecast.simpleforecast.forecastday[8].date.pretty)));
			this.forecast.append($('<div>').text(("High: " + response.forecast.simpleforecast.forecastday[8].high.fahrenheit + "ºF")));
			this.forecast.append($('<div>').text(("Low: " + response.forecast.simpleforecast.forecastday[8].low.fahrenheit + "ºF")));
			this.forecast.append($('<div>').text(("Snow: " + response.forecast.simpleforecast.forecastday[8].snow_allday.in + " in.")));
			this.forecast.append($('<br>'));

			this.forecast.append($('<div>').text((response.forecast.simpleforecast.forecastday[9].date.pretty)));
			this.forecast.append($('<div>').text(("High: " + response.forecast.simpleforecast.forecastday[9].high.fahrenheit + "ºF")));
			this.forecast.append($('<div>').text(("Low: " + response.forecast.simpleforecast.forecastday[9].low.fahrenheit + "ºF")));
			this.forecast.append($('<div>').text(("Snow: " + response.forecast.simpleforecast.forecastday[9].snow_allday.in + " in.")));

			$('main').append(this.forecast)
		})
	}
}
