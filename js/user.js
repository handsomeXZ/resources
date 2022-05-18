var height = window.getComputedStyle(document.getElementById("Background")).height;
var width = window.getComputedStyle(document.getElementById("Background")).width;
var Data_j;
http = new XMLHttpRequest();

height = height.replace("px", "");
document.getElementById("ScrollOutline").style.width = width;
document.getElementById("ScrollOutline").style.height = (height - 76) + "px";

http.onreadystatechange = function() {
	if (http.readyState == 4 && http.status == 200) {
		Data_j = JSON.parse(http.responseText);
		console.log(Data_j);
		if(Data_j.data.length>0){
			UpFavorite();
		}
	}
}
// http://vcafilm.gitee.io/resources/TestData/page.json
http.open("GET", "http://120.26.39.150:8089/api/favorite?userId=0001&pageSize=2&pageNum=1", true);
http.send();

function UpFavorite() {
	var main=document.getElementById("mainCollectionEmpty");
	var target=document.createElement("div");
	target.className="favoritesItem";
	main.innerHTML="<div class='mainViewEmptyTittle' id='mainCollectionTittle'>你的收藏</div>"
	main.appendChild(target);
	for (var i = 0; i < Data_j.data.length; i++) {
		var href = document.createElement("a");
		var newM = document.createElement("div");
		var newC1 = document.createElement("div");
		var newC2 = document.createElement("div");
		href.href=Data_j.data[i].onlineUrl;
		href.target="_blank";
		newM.className="favorite";
		newC1.className="favoriteIco";
		newC2.className="favoriteName";
		newC2.innerHTML=Data_j.data[i].name;
		newM.appendChild(href);
		newM.appendChild(newC2);
		href.appendChild(newC1);
		target.appendChild(newM);
	} 
	
}
