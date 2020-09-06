//öppnar en dömd div
function weather() {
	var show = document.getElementById("show");
	show.style.display = "block";
}


// hämtar väder information från openweathermap med hjälp av API och API-key
document.addEventListener('DOMContentLoaded', function weather() {
	let get = document.getElementById('get'); //skapar ny objekt och låter det veta att det ska hämta information från id "get"
	get.addEventListener('click', function (weather) { //dom element som vet att knappen är tryckt och skapar ny funktion
		let city = document.getElementById('city').value; //skapar ny objekt och låter det veta att det ska hämta information från id "city" och value
		const key = '4d97f1ead6bc87ec02c9c6557b2f5835'; //eget API key från openweathermap

		$.ajax({ //kopplar ajax (jquerry) / json, information hämtade jag härifrån https://openweathermap.org/current
			url: 'http://api.openweathermap.org/data/2.5/weather', //url hämtade jag från openweathermap
			dataType: 'json', //https://api.jquery.com/jquery.getjson/
			type: 'GET',
			data: {
				q: city,
				appid: key,
				units: 'metric'
			},

			success: function (data) { //succes funktion som tillhör jquery. Jag kunde koppla ajax med den vanliga js, men jag tyckte att det var för mycket och svårare
				//https://www.sitepoint.com/guide-vanilla-ajax-without-jquery/
				var weatherforecast = ''; //skapar ny objekt
				$.each(data.weather, function (index, val) { //$.each motsvarar foreach loop i den vanliga js, val motsvarar value
					weatherforecast += '<p>' + data.name + ': ' + data.main.temp + '&deg;C ' + ' | ' + val.main + ", " + val.description
				})
				$("#show").html(weatherforecast); //kopplar resultat till div med id Show
			}
		})
	})
})