var city,country,temperature,conditions,longitude,latitude;
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
					"Conditions : "+result.weather[0].main+"<br>"+
					"Longitude : "+result.coord.lon+"<br>"+
					"Latitude : "+result.coord.lat+"<br>"+
					"<button id=\"button\" onclick = \"addFav()\" type = \"button\">Add to favorites</button>";
				
			
					
		}
		else{
			//alert(this.readyState);
		}
	};
	xhttp.open("GET", link, true);
	xhttp.send();
}

function addFav(){
	alert("In fav bitch");
	var xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
		}
	};
	
	var params = "city=" +city+ "&weather=" +weather+ "&temp=" +temp+ "&min_temp=" +min_temp+ "&max_temp=" +max_temp+ "&wind_speed="+wind_speed;
	xmlhttp.open('GET',"http://localhost:8080/ClearSky/Favourites?"+params, true);
	xmlhttp.send();
}

