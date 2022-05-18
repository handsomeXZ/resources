var query = window.location.search.substring(1);
var vars = query.split("&");
var pair;
var Data_json;
for (var i=0;i<vars.length;i++) {
    pair = vars[i].split("=");
	if(pair[0] == "id"){
		break;
	}
	else{
		pair="null";
	}
}



if(pair!="null"){	
	var http = new XMLHttpRequest();
	http.onreadystatechange = function() {
		if (http.readyState == 4 && http.status == 200) {
		Data_json = JSON.parse(http.responseText);
		upPage();
	}}
	
	http.open("GET", "https://handsomexz.github.io/resources/TestData/"+pair[1]+".json", true);
	http.send();
}

var onlineEnter = function(){
	document.getElementById("online_love").style.backgroundColor="#cf322a";
}
var onlineLeave = function(){
	document.getElementById("online_love").style.backgroundColor="#ff3f34";
}
var downloadEnter = function(){
	document.getElementById("download_love").style.backgroundColor="#cf322a";
}
var downloadLeave = function(){
	document.getElementById("download_love").style.backgroundColor="#ff3f34";
}


function upPage(){
	var obj;
	var child;
	/*---------------------------------     TAG     ---------------------------------*/
	obj = document.getElementById("mainTopClassification");
	if(Data_json.tag_num > 0){
		child="";
		for (var i = 0; i < Data_json.tag_num - 1 ; i++) {
			child=child + Data_json.tag[i].name + "&nbsp;<div class='mainTopClassificationDivide'>/</div>&nbsp;";
		}
		child=child + Data_json.tag[i].name;
		obj.innerHTML=child;
	}
	/*---------------------------------     end     ---------------------------------*/
	
	/*---------------------------------    TITTLE   ---------------------------------*/
	document.getElementById("mainTopTittle").innerHTML=Data_json.tittle;
	/*---------------------------------     end     ---------------------------------*/
	
	
	/*---------------------------------   REFERRER  ---------------------------------*/
	document.getElementById("referrer").innerHTML="<span style='color: #a5a5a5;'>by</span >&nbsp;" + Data_json.referrer;
	/*---------------------------------     end     ---------------------------------*/
	
	/*---------------------------------   REFERRER  ---------------------------------*/
	document.getElementById("referrer").innerHTML="<span style='color: #a5a5a5;'>by</span >&nbsp;" + Data_json.referrer;
	/*---------------------------------     end     ---------------------------------*/
	
	/*---------------------------------   COMMENT   ---------------------------------*/
	if(Data_json.comments_num > 0){
		var contents_num = 0,scores_num = 0,score = 0;
		for (var i = 0; i < Data_json.comments_num ; i++) {
			if(Data_json.comments[i].score!=""){
				scores_num = scores_num + 1;
				var num = Data_json.comments[i].score / 1;
				score = score + num;
			}
			if(Data_json.comments[i].content!=""){
				contents_num = contents_num + 1;
			}
		}
		console.log(score);
		document.getElementById("scoreNum").innerHTML=(score/scores_num).toFixed(1);
		
		if((score/scores_num).toFixed(1)>4){
			document.getElementById("scoreNum").style.backgroundImage="linear-gradient(to right,#13aff0,#0f9bce)";
		}
		else if((score/scores_num).toFixed(1)>2){
			document.getElementById("scoreNum").style.backgroundImage="linear-gradient(to right,#ff793f,#d46433)";
		}
		else{
			document.getElementById("scoreNum").style.backgroundImage="linear-gradient(to right,#ff3838,#ca2c2c)";
		}
		
		document.getElementById("others").innerHTML="当前评分基于 " + scores_num + " 条评分，" + contents_num + " 条评论";
	}
	/*---------------------------------     end     ---------------------------------*/
	
	/*-------------------------------- INTRODUCTION ---------------------------------*/
	if(Data_json.introduction_img.length > 0){
		document.querySelector(".IntroductionImg").style.height="4rem";
		document.querySelector(".IntroductionImg").style.backgroundImage = "url('" + Data_json.introduction_img[0].img_url +"')" ;
	}
	
	
	document.querySelector(".IntroductionInfo").innerHTML= Data_json.introduction;
	/*---------------------------------     end     ---------------------------------*/
	
	/*---------------------------------     URL     ---------------------------------*/
	document.getElementById("online_url").innerHTML= Data_json.online_url;
	document.getElementById("online_Entry").href = Data_json.online_url;
	
	document.getElementById("online_love").addEventListener("click",function(){
		var love=document.getElementById("online_love");
		if(love.style.backgroundColor=="rgb(255, 63, 52)" || love.style.backgroundColor=="rgb(207, 50, 42)"){
			document.getElementById("online_love").removeEventListener("mouseenter",onlineEnter());
			document.getElementById("online_love").removeEventListener("mouseleave",onlineLeave());
			love.style.backgroundColor="#3e3e3e";
			Data_json.online_collect=="false";
		}
		else{
			love.style.backgroundColor=="rgb(255, 63, 52)"
			Data_json.online_collect=="true";
			document.getElementById("online_love").addEventListener("mouseenter",onlineEnter())
			document.getElementById("online_love").addEventListener("mouseleave",onlineLeave())
		}
		
	})
	
	
	
	
	
		if(Data_json.online_collect=="true"){
			document.getElementById("online_love").style.backgroundColor="#ff3f34";
			document.getElementById("online_love").addEventListener("mouseenter",onlineEnter())
			document.getElementById("online_love").addEventListener("mouseleave",onlineLeave())
		}
		
	/*---------------------------------     end     ---------------------------------*/
	
}
