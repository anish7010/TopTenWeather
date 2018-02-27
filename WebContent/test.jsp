<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<input type="text" id="usertext">
	<button onClick="getData()">CLICK ME</button>

	<p id="jsondata"></p>
	<p id="jsondata1"></p>
	<p id="jsondata2"></p>
	<p id="jsondata3"></p>
	<script type="text/javascript">
 function getData(){
      var xmlHttp = new XMLHttpRequest();
      var word= document.getElementById("usertext").value;

      
      var url = "https://api.themoviedb.org/3/search/movie?api_key=628feb1e5d19aa715bd6f0824546c81d&query="+word;
      xmlHttp.onreadystatechange = function() {
          if(this.readyState == 4 && this.status == 200){
              var myArr= JSON.parse(this.responseText);
              var dataObj= myArr;
             document.getElementById('jsondata').innerHTML = "Title = " +
                 dataObj.results[0].title + "<br> Ratings =" + dataObj.results[0].vote_average + 
                 "<br> Release Date =" + dataObj.results[0].release_date + "<br> Overviews =" + 
                 dataObj.results[0].overview ;
             document.getElementById('jsondata1').innerHTML = "Title = " + 
                 dataObj.results[1].title + "<br> Ratings =" + dataObj.results[1].vote_average + 
                 "<br> Release Date =" + dataObj.results[1].release_date + "<br> Overviews =" + 
                 dataObj.results[1].overview;
             document.getElementById('jsondata2').innerHTML = "Title = " + 
             dataObj.results[2].title + "<br> Ratings =" + dataObj.results[2].vote_average + 
             "<br> Release Date =" + dataObj.results[2].release_date + "<br> Overviews =" + 
             dataObj.results[2].overview;
             document.getElementById('jsondata3').innerHTML = "Title = " + 
             dataObj.results[3].title + "<br> Ratings =" + dataObj.results[3].vote_average + 
             "<br> Release Date =" + dataObj.results[3].release_date + "<br> Overviews =" + 
             dataObj.results[3].overview;
             document.getElementById('jsondata4').innerHTML = "Title = " + 
             dataObj.results[4].title + "<br> Ratings =" + dataObj.results[4].vote_average + 
             "<br> Release Date =" + dataObj.results[4].release_date + "<br> Overviews =" + 
             dataObj.results[4].overview;
 }   
      };
      xmlHttp.open("GET",url,true);
      xmlHttp.send();
    }
</script>
</body>
</html>
