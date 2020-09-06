	function weather() {
	var show = document.getElementById("show");
	show.style.display = "block";
	}

	document.addEventListener("DOMContentLoaded", function weather() {
	let get = document.getElementById("get");
	get.addEventListener("click", function (weather) {
		let city = document.getElementById("city").value;
		const key = ""; //your key
		$.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather",
		dataType: "json", //https://api.jquery.com/jquery.getjson/
		type: "GET",
		data: {
			q: city,
			appid: key,
			units: "metric",
		},

		success: function (data) {
			//https://www.sitepoint.com/guide-vanilla-ajax-without-jquery/
			var weatherforecast = "";
			$.each(data.weather, function (index, val) { //$.each motsvarar foreach loop i den vanliga js, val motsvarar value
			weatherforecast += "<p>" + data.name + ": " + data.main.temp +
				"&deg;C " + " | " + val.main + ", " + val.description;
			});
			$("#show").html(weatherforecast);
		},
		});
	});
	});
