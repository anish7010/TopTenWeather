function getData() {
	var name = document.getElementById("name").value;
	var xhttp = new XMLHttpRequest();
	var request = new XMLHttpRequest();
	var link = "http://api.openweathermap.org/data/2.5/weather?q="+name+"&units=metric&APPID=1fece17149b11bf41a66f24302098d20";
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var result = JSON.parse(this.responseText);
			var response = JSON.stringify(result);
			document.getElementById("content").innerHTML ="City : "+result.name+","+result.sys.country+"<br>" +
					"Temperature : "+result.main.temp+"<br>" +
					"Conditions : "+result.weather[0].main+
					"<button type=\"button\">Add to favorites</button><hr>";
		}
		else{
			//alert(this.readyState);
		}
	};
	xhttp.open("GET", link, true);
	xhttp.send();
}