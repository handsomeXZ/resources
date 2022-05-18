var Data_json;
var http = new XMLHttpRequest();
http.onreadystatechange = function() {
	if (http.readyState == 4 && http.status == 200) {
	Data_json = JSON.parse(http.responseText);
	upInfo();
}}
//http://vcafilm.gitee.io/resources/TestData/index/index.json
http.open("GET", "http://vcafilm.gitee.io/resources/TestData/index/index.json", true);
http.send();

var id = 1;
var Num = 2;
function updataImg(){
	var tId=1;
	var target=document.getElementById("carouselImgs");
	target.innerHTML="";
	for (var i = 0; i < Num; i++) {
		var child = document.createElement("div");
		child.className="carouselImg";
		child.id="carouselImg_"+tId;
		if(tId>1){
			child.style.width="0";
		}
		child.style.backgroundImage="url('img/index_" + tId.toString() + ".jpg')";
		target.appendChild(child);
		tId++;
	}
}
updataImg();

document.getElementById("carouselLeft").addEventListener("click",function(){
	if(id>1){
		document.getElementById("carouselImg_"+id).style.width = "0%";
		id--;
		document.getElementById("carouselImg_"+id).style.width = "100%";
	}
})


document.getElementById("carouselRight").addEventListener("click",function(){
	if(id<Num){
		document.getElementById("carouselImg_"+id).style.width = "0%";
		id++;
		document.getElementById("carouselImg_"+id).style.width = "100%";
	}
})

function upInfo(){
	/* --------------------------------       最新上传       ------------------------------ */
	document.getElementById("new").querySelector(".DetailTiitle").innerHTML=Data_json.new.tittle;
	document.getElementById("new").querySelector(".DetailInfo").innerHTML=Data_json.new.info;
	document.getElementById("new").querySelector(".tag").innerHTML=Data_json.new.tag;
	document.getElementById("new").querySelector(".DetailBottomDate").innerHTML=Data_json.new.date;
	document.getElementById("new").querySelector(".newDetail").addEventListener("click",function(){
		window.location.href=Data_json.new.url;
	})
	change_num(document.getElementById("new").querySelector(".good"), Data_json.new.good);
	change_num(document.getElementById("new").querySelector(".comment_num"), Data_json.new.comment);
	change_scoreImg(document.getElementById("new").querySelector(".DetailBottomScore"),Data_json.new.score);
	/* --------------------------------       E N D       ------------------------------ */
	
	/* --------------------------------       精选推荐       ------------------------------ */
	var newobj="<div id='recommendTittle'>精选推荐</div>";
	for (var i = 0; i < Data_json.recommend.length; i++) {
		var temp="<div class='recmmendContaint' id='recommend_"+ (i+1).toString()+"' onclick=window.location.href='"+ Data_json.recommend[i].url +"'><div class='recmmendImg'></div><div class='recmmendRight'><div class='DetailTiitle'>标题</div><div class='DetailInfo'>描述。。。</div><div class='DetailBottom'><div class='DetailBottomDate'>3/24/2022</div><div class='DetailBottomGood'><svg t='1649145067695' class='icon' viewbox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2178' width='0.14rem' height='0.14rem'><path d='M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z' p-id='2179' fill='#bfbfbf'></path></svg><span class='good'>5</span></div><div class='DetailBottomComment'><svg t='1649145122644' class='icon' viewbox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='3124' width='0.14rem' height='0.14rem'><path d='M821.333333 800H547.584l-86.464 96.074667a32 32 0 1 1-47.573333-42.816l96-106.666667A32 32 0 0 1 533.333333 736h288a53.333333 53.333333 0 0 0 53.333334-53.333333V234.666667a53.333333 53.333333 0 0 0-53.333334-53.333334H202.666667a53.333333 53.333333 0 0 0-53.333334 53.333334v448a53.333333 53.333333 0 0 0 53.333334 53.333333h138.666666a32 32 0 0 1 0 64H202.666667c-64.8 0-117.333333-52.533333-117.333334-117.333333V234.666667c0-64.8 52.533333-117.333333 117.333334-117.333334h618.666666c64.8 0 117.333333 52.533333 117.333334 117.333334v448c0 64.8-52.533333 117.333333-117.333334 117.333333zM704 341.333333a32 32 0 0 1 0 64H320a32 32 0 0 1 0-64h384zM512 512a32 32 0 0 1 0 64H320a32 32 0 0 1 0-64h192z' p-id='3125' fill='#bfbfbf'></path></svg><span class='comment_num'>9</span></div></div></div></div>";
		newobj+=temp;
	}
	document.getElementById("recommend").innerHTML=newobj;
	for (var i = 0; i < Data_json.recommend.length; i++){
		document.getElementById("recommend_"+ (i+1).toString() ).querySelector(".DetailTiitle").innerHTML=Data_json.recommend[i].tittle;
		document.getElementById("recommend_"+ (i+1).toString() ).querySelector(".DetailInfo").innerHTML=Data_json.recommend[i].info;
		document.getElementById("recommend_"+ (i+1).toString() ).querySelector(".DetailBottomDate").innerHTML=Data_json.recommend[i].date;
		change_num(document.getElementById("recommend_"+ (i+1).toString() ).querySelector(".good"), Data_json.recommend[i].good);
		change_num(document.getElementById("recommend_"+ (i+1).toString() ).querySelector(".comment_num"), Data_json.recommend[i].comment);
	}
	
	
	
	/* --------------------------------       E N D       ------------------------------ */
	
	/* --------------------------------       近期热门       ------------------------------ */
	document.getElementById("hot").querySelector(".DetailTiitle").innerHTML=Data_json.hot.tittle;
	document.getElementById("hot").querySelector(".DetailInfo").innerHTML=Data_json.hot.info;
	document.getElementById("hot").querySelector(".DetailBottomDate").innerHTML=Data_json.hot.date;
	change_num(document.getElementById("hot").querySelector(".good"), Data_json.hot.good);
	change_num(document.getElementById("hot").querySelector(".comment_num"), Data_json.hot.comment);
	document.getElementById("hot").querySelector(".hotContaint").addEventListener("click",function(){
		window.location.href=Data_json.hot.url;
	})
	/* --------------------------------       E N D       ------------------------------ */
}

function change_num(obj,num){
	if(parseInt(num)>999){
		obj.innerHTML="<span style='color:#e66767'>999+</span>"
	}
	else if(parseInt(num)>400){
		obj.innerHTML="<span style='color:#3dc1d3'>"+ num +"</span>";
	}
	else{
		obj.innerHTML="<span style='color:#f7d794'>"+ num +"</span>";
	}
}
	
function change_scoreImg(obj,score){
	var newobj="";
	for (var i = 0; i < score; i++) {
		newobj=newobj+"<svg t='1649830416069' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='1564' width='0.14rem' height='0.14rem'><path d='M313.991837 914.285714c-20.37551 0-40.228571-6.269388-56.946939-18.808163-30.302041-21.942857-44.930612-58.514286-38.661225-95.085714l24.032654-141.061225c3.134694-18.285714-3.134694-36.571429-16.195919-49.110204L123.297959 509.910204c-26.644898-26.122449-36.04898-64.261224-24.555102-99.787755 11.493878-35.526531 41.795918-61.126531 78.889796-66.35102l141.583674-20.375511c18.285714-2.612245 33.959184-14.106122 41.795918-30.30204l63.216326-128.522449C440.946939 130.612245 474.383673 109.714286 512 109.714286s71.053061 20.897959 87.24898 54.334694L662.987755 292.571429c8.359184 16.195918 24.032653 27.689796 41.795918 30.30204l141.583674 20.375511c37.093878 5.22449 67.395918 30.82449 78.889796 66.35102 11.493878 35.526531 2.089796 73.665306-24.555102 99.787755l-102.4 99.787755c-13.061224 12.538776-19.330612 31.346939-16.195919 49.110204l24.032654 141.061225c6.269388 37.093878-8.359184 73.142857-38.661225 95.085714-30.302041 21.942857-69.485714 24.555102-102.4 7.314286L538.122449 836.440816c-16.195918-8.359184-35.526531-8.359184-51.722449 0l-126.955102 66.87347c-14.628571 7.314286-30.302041 10.971429-45.453061 10.971428z m162.481632-96.653061z' fill='#F2CB51' p-id='1565'></path></svg>";
	}
	for (var i = 0; i < 5 - score; i++) {
		newobj=newobj+"<svg t='1649145194335' class='icon' viewbox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='4161' width='0.14rem' height='0.14rem'><path d='M512 150.25664c7.1424 0 20.224 2.2272 27.59168 17.152l81.24416 164.61312a82.0224 82.0224 0 0 0 61.78816 44.91264l181.69344 26.40384c16.46592 2.39104 22.6304 14.14656 24.83712 20.9408 2.20672 6.79424 4.13184 19.92192-7.7824 31.5392l-131.48672 128.16384a82.03776 82.03776 0 0 0-23.58272 72.61184l31.03744 180.96128c1.6128 9.41568-0.54272 17.72032-6.40512 24.6784-6.08256 7.21408-15.01696 11.52-23.90016 11.52-4.83328 0-9.5232-1.2288-14.336-3.7632l-162.49856-85.43232a82.35008 82.35008 0 0 0-38.19008-9.43104c-13.25056 0-26.45504 3.26144-38.17984 9.42592L311.31648 869.9904c-4.75136 2.49856-9.5744 3.7632-14.336 3.7632-8.88832 0-17.8176-4.30592-23.90016-11.51488-5.8624-6.95808-8.01792-15.26272-6.40512-24.6784l31.03744-180.95104a82.03264 82.03264 0 0 0-23.59808-72.6272l-131.4816-128.16896c-11.91424-11.61728-9.99424-24.74496-7.7824-31.5392 2.20672-6.79424 8.36608-18.54464 24.83712-20.9408l181.69344-26.39872a81.9968 81.9968 0 0 0 61.7728-44.88192l81.25952-164.64384c7.36256-14.9248 20.44416-17.152 27.58656-17.152m0-71.79264c-36.57728 0-73.15968 19.05664-91.96544 57.16992L338.77504 300.27776a10.25536 10.25536 0 0 1-7.72096 5.61152L149.36064 332.288c-84.11648 12.22144-117.7088 115.59936-56.83712 174.92992l131.47648 128.15872c2.41664 2.3552 3.52256 5.74976 2.94912 9.07776l-31.03744 180.96128c-11.37152 66.29376 41.30304 120.12032 101.06368 120.12032 15.76448 0 32.04096-3.75296 47.744-12.0064l162.51392-85.43744a10.28096 10.28096 0 0 1 9.54368 0l162.51392 85.43744c15.70816 8.25856 31.96928 12.0064 47.744 12.0064 59.75552 0 112.43008-53.8368 101.06368-120.12032l-31.03744-180.96128a10.26048 10.26048 0 0 1 2.94912-9.07776l131.47648-128.15872c60.87168-59.33056 27.27936-162.70848-56.83712-174.92992l-181.69344-26.40384a10.25536 10.25536 0 0 1-7.72096-5.61152L603.97568 135.6288c-18.816-38.10816-55.3984-57.1648-91.97568-57.1648z' fill='#bfbfbf' p-id='4162'></path></svg>";
	}
	obj.innerHTML=newobj;
}