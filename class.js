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
				$('.radarContainer').append(this.radar);
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
			this.currentWeather.append($('<div>').text((response.current_observation.temp_f + "ºF")));
			this.currentWeather.append($('<div>').text(("Wind: " + response.current_observation.wind_mph +" mph. " + response.current_observation.wind_dir)));
			$('.current_weatherContainer').append(this.currentWeather)
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
			this.forecast = $('<div>').addClass('forecast');
			this.forecast1 =$('<div>').addClass("day1_container")
			this.forecast2 =$('<div>').addClass("day2_container")
			this.forecast3 =$('<div>').addClass("day3_container")
			this.forecast4 =$('<div>').addClass("day4_container")
			this.forecast5 =$('<div>').addClass("day5_container")
			this.forecast6 =$('<div>').addClass("day6_container")
			this.forecast7 =$('<div>').addClass("day7_container")
			this.forecast8 =$('<div>').addClass("day8_container")
			this.forecast9 =$('<div>').addClass("day9_container")
			this.forecast10 =$('<div>').addClass("day10_container")

			this.forecast.append($('<div>').text(("10 Day Forecast:")));
			this.forecast1.append($('<div>').addClass("day_container").text((response.forecast.simpleforecast.forecastday[0].date.pretty)));
			this.forecast1.append($('<div>').text(("High: " + response.forecast.simpleforecast.forecastday[0].high.fahrenheit + "ºF")));
			this.forecast1.append($('<div>').text(("Low: " + response.forecast.simpleforecast.forecastday[0].low.fahrenheit + "ºF")));
			this.forecast1.append($('<div>').text(("Snow: " + response.forecast.simpleforecast.forecastday[0].snow_allday.in + " in.")));

			this.forecast2.append($('<div>').text((response.forecast.simpleforecast.forecastday[1].date.pretty)));
			this.forecast2.append($('<div>').text(("High: " + response.forecast.simpleforecast.forecastday[1].high.fahrenheit + "ºF")));
			this.forecast2.append($('<div>').text(("Low: " + response.forecast.simpleforecast.forecastday[1].low.fahrenheit + "ºF")));
			this.forecast2.append($('<div>').text(("Snow: " + response.forecast.simpleforecast.forecastday[1].snow_allday.in + " in.")));

			this.forecast3.append($('<div>').text((response.forecast.simpleforecast.forecastday[2].date.pretty)));
			this.forecast3.append($('<div>').text(("High: " + response.forecast.simpleforecast.forecastday[2].high.fahrenheit + "ºF")));
			this.forecast3.append($('<div>').text(("Low: " + response.forecast.simpleforecast.forecastday[2].low.fahrenheit + "ºF")));
			this.forecast3.append($('<div>').text(("Snow: " + response.forecast.simpleforecast.forecastday[2].snow_allday.in + " in.")));

			this.forecast4.append($('<div>').text((response.forecast.simpleforecast.forecastday[3].date.pretty)));
			this.forecast4.append($('<div>').text(("High: " + response.forecast.simpleforecast.forecastday[3].high.fahrenheit + "ºF")));
			this.forecast4.append($('<div>').text(("Low: " + response.forecast.simpleforecast.forecastday[3].low.fahrenheit + "ºF")));
			this.forecast4.append($('<div>').text(("Snow: " + response.forecast.simpleforecast.forecastday[3].snow_allday.in + " in.")));

			this.forecast5.append($('<div>').text((response.forecast.simpleforecast.forecastday[4].date.pretty)));
			this.forecast5.append($('<div>').text(("High: " + response.forecast.simpleforecast.forecastday[4].high.fahrenheit + "ºF")));
			this.forecast5.append($('<div>').text(("Low: " + response.forecast.simpleforecast.forecastday[4].low.fahrenheit + "ºF")));
			this.forecast5.append($('<div>').text(("Snow: " + response.forecast.simpleforecast.forecastday[4].snow_allday.in + " in.")));

			this.forecast6.append($('<div>').text((response.forecast.simpleforecast.forecastday[5].date.pretty)));
			this.forecast6.append($('<div>').text(("High: " + response.forecast.simpleforecast.forecastday[5].high.fahrenheit + "ºF")));
			this.forecast6.append($('<div>').text(("Low: " + response.forecast.simpleforecast.forecastday[5].low.fahrenheit + "ºF")));
			this.forecast6.append($('<div>').text(("Snow: " + response.forecast.simpleforecast.forecastday[5].snow_allday.in + " in.")));

			this.forecast7.append($('<div>').text((response.forecast.simpleforecast.forecastday[6].date.pretty)));
			this.forecast7.append($('<div>').text(("High: " + response.forecast.simpleforecast.forecastday[6].high.fahrenheit + "ºF")));
			this.forecast7.append($('<div>').text(("Low: " + response.forecast.simpleforecast.forecastday[6].low.fahrenheit + "ºF")));
			this.forecast7.append($('<div>').text(("Snow: " + response.forecast.simpleforecast.forecastday[6].snow_allday.in + " in.")));

			this.forecast8.append($('<div>').text((response.forecast.simpleforecast.forecastday[7].date.pretty)));
			this.forecast8.append($('<div>').text(("High: " + response.forecast.simpleforecast.forecastday[7].high.fahrenheit + "ºF")));
			this.forecast8.append($('<div>').text(("Low: " + response.forecast.simpleforecast.forecastday[7].low.fahrenheit + "ºF")));
			this.forecast8.append($('<div>').text(("Snow: " + response.forecast.simpleforecast.forecastday[7].snow_allday.in + " in.")));

			this.forecast9.append($('<div>').text((response.forecast.simpleforecast.forecastday[8].date.pretty)));
			this.forecast9.append($('<div>').text(("High: " + response.forecast.simpleforecast.forecastday[8].high.fahrenheit + "ºF")));
			this.forecast9.append($('<div>').text(("Low: " + response.forecast.simpleforecast.forecastday[8].low.fahrenheit + "ºF")));
			this.forecast9.append($('<div>').text(("Snow: " + response.forecast.simpleforecast.forecastday[8].snow_allday.in + " in.")));

			this.forecast10.append($('<div>').text((response.forecast.simpleforecast.forecastday[9].date.pretty)));
			this.forecast10.append($('<div>').text(("High: " + response.forecast.simpleforecast.forecastday[9].high.fahrenheit + "ºF")));
			this.forecast10.append($('<div>').text(("Low: " + response.forecast.simpleforecast.forecastday[9].low.fahrenheit + "ºF")));
			this.forecast10.append($('<div>').text(("Snow: " + response.forecast.simpleforecast.forecastday[9].snow_allday.in + " in.")));
			this.forecast.append(this.forecast1)
			this.forecast.append(this.forecast2)
			this.forecast.append(this.forecast3)
			this.forecast.append(this.forecast4)
			this.forecast.append(this.forecast5)
			this.forecast.append(this.forecast6)
			this.forecast.append(this.forecast7)
			this.forecast.append(this.forecast8)
			this.forecast.append(this.forecast9)
			this.forecast.append(this.forecast10)
			$('.forecastContainer').append(this.forecast)
			console.log(document)
		})
	}
}
