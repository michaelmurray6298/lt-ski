$(document).ready(function(){
	$('#dropdown1 li').click(function(){
		var $this = $(this);
		var selKeyVal = $this.attr('value');
		var resort = new WeatherData(selKeyVal)
		resort.displayWeatherInfo;
		resort.displayRadar;
 	})
})
