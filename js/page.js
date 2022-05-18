// document.getElementById("favoritesOpen").addEventListener("click",function(){
// 	var obj=document.getElementById("favoritesCheckBox");
// 	var container=document.getElementById("Favorites");
// 	var containerItem=document.getElementById("favoritesItem");
// 	if (obj.checked == true) {
// 		container.style.height="2rem";
// 		containerItem.style.height="1.75rem";
// 	}
// 	else{
// 		container.style.height="0.5rem";
// 		containerItem.style.height="0.27rem";
// 	}
// })

var Data_json;
var SelectJson = {
	"grcw": "个人财务",
	"qycw": "企业财务",
	"znkj": "智能会计",
	"zncw": "智能财务",
	"cwsj": "财务数据",
	"jr": "今日",
	"bz": "本周",
	"by": "本月",
	"bzfx": "本站分享",
	"yhfx": "用户分享",
	"scs": "收藏数"
},SelectIdJson = {
	"grcw": "0001",
	"qycw": "0002",
	"znkj": "0003",
	"zncw": "0004",
	"cwsj": "0005",
	"jr": "今日",
	"bz": "本周",
	"by": "本月",
	"bzfx": "本站分享",
	"yhfx": "用户分享",
	"scs": "收藏数"
},Selected={
	"1":"null",//Category
	"2":"null",//UploadTime
	"3":"null"//Referrer
},Category={
	"0001":"grcw",
	"0002":"qycw",
	"0003":"znkj",
	"0004":"zncw",
	"0005":"cwsj"
}
var http = new XMLHttpRequest();
http.onreadystatechange = function() {
	if (http.readyState == 4 && http.status == 200) {
		Data_json = JSON.parse(http.responseText);
		//upFavorites();
		ShallAll();
	}
}
// http://vcafilm.gitee.io/resources/TestData/page.json
http.open("GET", "https://handsomexz.github.io/resources/TestData/page.json", true);
http.send();

function upFavorites() {
	var main, child, child1, child2;
	var obj = document.getElementById("favoritesItem");
	for (var i = 0; i < Data_json.Items.length; i++) {
		main = document.createElement("a");
		child = document.createElement("div");
		child1 = document.createElement("div");
		child2 = document.createElement("div");
		main.href = Data_json.Items[i].tool_url;
		main.target = "_blank";
		child.className = "favoritesitems";
		child1.className = "favoritesitemsIco";
		child2.className = "favoritesitemsName";
		child1.innerHTML = "<img src='" + Data_json.Items[i].image_url + "' />";
		child2.innerHTML = Data_json.Items[i].name;
		child.appendChild(child1);
		child.appendChild(child2);
		main.appendChild(child);
		obj.appendChild(main);
	}
}


function ShallAll() {
	var newObj,main,a;
	var targetObj = document.getElementById("NormalList");

	for (var i = 0; i < Data_json.Items.length; i++) {

		flag = true;
		newObj =
			"<div class='normalItems'><div class='normalItemsBox'><div class='normalListLeft'><div class='normalListLeft_Name'>TOOLNAME</div><div class='normalListLeft_Tag'><div>标签</div></div></div><div class='normalListMid'><div class='normalListMid_Good'><svg t='1649145067695' class='icon' viewbox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2178' width='0.17rem' height='0.17rem'><path d='M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z' p-id='2179' fill='var(--font-gray-2)'></path></svg><span class='good'>GOODNUM</span></div><div class='normalListMid_Comment'><svg t='1649145122644' class='icon' viewbox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='3124' width='0.17rem' height='0.17rem'><path d='M821.333333 800H547.584l-86.464 96.074667a32 32 0 1 1-47.573333-42.816l96-106.666667A32 32 0 0 1 533.333333 736h288a53.333333 53.333333 0 0 0 53.333334-53.333333V234.666667a53.333333 53.333333 0 0 0-53.333334-53.333334H202.666667a53.333333 53.333333 0 0 0-53.333334 53.333334v448a53.333333 53.333333 0 0 0 53.333334 53.333333h138.666666a32 32 0 0 1 0 64H202.666667c-64.8 0-117.333333-52.533333-117.333334-117.333333V234.666667c0-64.8 52.533333-117.333333 117.333334-117.333334h618.666666c64.8 0 117.333333 52.533333 117.333334 117.333334v448c0 64.8-52.533333 117.333333-117.333334 117.333333zM704 341.333333a32 32 0 0 1 0 64H320a32 32 0 0 1 0-64h384zM512 512a32 32 0 0 1 0 64H320a32 32 0 0 1 0-64h192z' p-id='3125' fill='var(--font-gray-2)'></path></svg><span class='comment'>CONUM</span></div></div><div class='normalListRight'><div class='normalListRightIco'><svg t='1650442362733' class='icon' viewbox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='7279' width='0.23rem' height='0.23rem'><path d='M753.3 960.2H275c-45.2 0-81.9-36.7-81.9-81.9V146.1c0-45.2 36.7-81.9 81.9-81.9h478.3c45.2 0 81.9 36.7 81.9 81.9v732.3c0 45.2-36.7 81.8-81.9 81.8z' fill='#383838' p-id='7280'></path><path d='M736.3 368.9H291.9c-18.5 0-33.4-15-33.4-33.4V174c0-18.5 15-33.4 33.4-33.4h444.4c18.5 0 33.4 15 33.4 33.4v161.5c0 18.5-14.9 33.4-33.4 33.4zM514.1 541.6c-32.2 0-58.3-26.1-58.3-58.3 0-32.2 26.1-58.3 58.3-58.3 32.2 0 58.3 26.1 58.3 58.3 0 32.2-26.1 58.3-58.3 58.3z m-197.3 0c-32.2 0-58.3-26.1-58.3-58.3 0-32.2 26.1-58.3 58.3-58.3 32.2 0 58.3 26.1 58.3 58.3 0 32.2-26.1 58.3-58.3 58.3z m0 166.3c-32.2 0-58.3-26.1-58.3-58.3 0-32.2 26.1-58.3 58.3-58.3 32.2 0 58.3 26.1 58.3 58.3 0 32.2-26.1 58.3-58.3 58.3z m197.3 171.6H316.8c-32.2 0-58.3-26.1-58.3-58.3 0-32.2 26.1-58.3 58.3-58.3h197.3c32.2 0 58.3 26.1 58.3 58.3 0 32.3-26.1 58.3-58.3 58.3z m0-171.6c-32.2 0-58.3-26.1-58.3-58.3 0-32.2 26.1-58.3 58.3-58.3 32.2 0 58.3 26.1 58.3 58.3 0 32.2-26.1 58.3-58.3 58.3z' fill='#BFBFBF' p-id='7281'></path><path d='M711.5 707.9c-32.2 0-58.3-26.1-58.3-58.3 0-32.2 26.1-58.3 58.3-58.3 32.2 0 58.3 26.1 58.3 58.3-0.1 32.2-26.1 58.3-58.3 58.3z m0 171.6c-32.2 0-58.3-26.1-58.3-58.3 0-32.2 26.1-58.3 58.3-58.3 32.2 0 58.3 26.1 58.3 58.3-0.1 32.3-26.1 58.3-58.3 58.3z m0-337.9c-32.2 0-58.3-26.1-58.3-58.3 0-32.2 26.1-58.3 58.3-58.3 32.2 0 58.3 26.1 58.3 58.3-0.1 32.2-26.1 58.3-58.3 58.3z' fill='#FF6700' p-id='7282'></path></svg></div><div class='normalListRightBox'><div class='normalListRightTittle'>标题</div><div class='normalListRightInfo'><div class='normalListRightDate'><svg t='1650441614729' class='icon' viewbox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2663' width='0.1rem' height='0.1rem'><path d='M512.001012 1024c-282.773537 0-512.000512-229.227997-512.000512-511.999488 0-282.773537 229.226974-512.000512 512.000512-512.000512 282.771491 0 511.998465 229.226974 511.998465 512.000512C1023.999477 794.772003 794.771479 1024 512.001012 1024zM512.001012 64.999777C265.13529 64.999777 65.000277 265.135813 65.000277 512.000512c0 246.862652 200.135013 446.999711 446.999711 446.999711 246.863675 0 447.001758-200.137059 447.001758-446.999711C959.001746 265.135813 758.864687 64.999777 512.001012 64.999777zM482.000406 545.000257l-0.999713-351.000639 63.000351 0 0 319.000607 197.998471 166.000486-39.000071 54.999575L482.000406 545.000257z' p-id='2664' fill='var(--font-gray-2)'></path></svg>日期</div><div class='normalListRightReffer'>来源：xxx</div></div></div></div></div></div>";
		newObj = newObj.replace("TOOLNAME", Data_json.Items[i].name);
		newObj = newObj.replace("标签", Data_json.Items[i].classification_id);
		newObj = newObj.replace("GOODNUM", Data_json.Items[i].collect_num);
		newObj = newObj.replace("CONUM", Data_json.Items[i].collect_num);
		newObj = newObj.replace("标题", Data_json.Items[i].title);
		newObj = newObj.replace("日期", Data_json.Items[i].upload_time);
		newObj = newObj.replace("xxx", Data_json.Items[i].referrer);

		a = document.createElement("a");
		a.href = Data_json.Items[i].page_url;
		a.target = "_blank";
		a.style.textDecoration = "none";
		a.style.width = "100%";
		a.innerHTML = newObj;
		main = document.createElement("div");
		main.id="NormalListBox";
		main.appendChild(a);
		targetObj.appendChild(main);

	}
}

function select(name, line) {
	if(Selected[line]!="null"){
		UnSelected("SelectedItemsID_" + (line).toString());
	}
	if (FiltrateSelected.innerHTML.indexOf(SelectJson[name]) <= 0) {
		SelectedObj =
			"<div class='FiltrateSelectedItems' id='FiltrateSelectedItemsID' onclick='UnSelected(\"FiltrateSelectedItemsID\")'><div class='FiltrateSelectedItemsName'>SELECTNAME</div><svg t='1650444797055' class='icon' viewbox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='10822' width='10%' height='0.2rem'><path d='M86.016 0L2.048 70.656c149.504 111.616 288.768 239.616 411.136 367.616C225.792 627.2 78.848 813.056 1.536 887.808L161.28 1021.44c56.832-117.248 180.224-294.912 345.6-481.28C672.256 727.552 796.16 906.24 852.992 1024c0 0 155.648-165.376 169.472-139.776C962.56 816.64 816.128 620.032 619.52 418.816c112.64-115.712 239.104-230.4 374.272-331.264l-36.864-68.608c-153.088 76.288-299.008 189.44-430.08 309.76C394.752 203.264 245.248 83.968 86.016 0z' p-id='10823' fill='var(--font-gray-2)'></path></svg></div>";
		SelectedObj = SelectedObj.replace("FiltrateSelectedItemsID", "SelectedItemsID_" + (line).toString());
		SelectedObj = SelectedObj.replace("FiltrateSelectedItemsID", "SelectedItemsID_" + (line).toString());
		SelectedObj = SelectedObj.replace("SELECTNAME", SelectJson[name]);
		FiltrateSelected.innerHTML = FiltrateSelected.innerHTML + SelectedObj;
		Selected[line]=SelectIdJson[name];
		SubmitFind();
	}
}

function UnSelected(id) {
	document.getElementById(id).remove();
}

function SubmitFind(){
	Data_json={"Items":""};
	var http = new XMLHttpRequest();
	if(Selected[1] !="null"){
		console.log("StartSubmit "+Selected[1] );
		http.onreadystatechange = function() {
			if (http.readyState == 4 && http.status == 200) {
				Data_json.Items =JSON.parse(http.responseText).data;
				console.log(Data_json);
				UpPage();
			}
		}
		// http://vcafilm.gitee.io/resources/TestData/page.json
		http.open("GET", "http://120.26.39.150:8089/api/tools/findByCategory?categoryId="+Selected[1], true);
		http.send();
	}
}

function UpPage(){
	var flag = false;
	var emptyObj;
	var newObj, SelectedObj;
	var targetObj = document.getElementById("NormalList");
	var svg = document.getElementById(name);
	var main, box;
	targetObj.innerHTML = "";
	for (var i = 0; i < Data_json.Items.length; i++) {
		if (Selected[1] == Data_json.Items[i].classificationId) {
			flag = true;
			newObj =
				"<div id='NormalListBox'><div class='normalItems'><div class='normalItemsBox'><div class='normalListLeft'><div class='normalListLeft_Name'>TOOLNAME</div><div class='normalListLeft_Tag'><div>标签</div></div></div><div class='normalListMid'><div class='normalListMid_Good'><svg t='1649145067695' class='icon' viewbox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2178' width='0.17rem' height='0.17rem'><path d='M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z' p-id='2179' fill='var(--font-gray-2)'></path></svg><span class='good'>GOODNUM</span></div><div class='normalListMid_Comment'><svg t='1649145122644' class='icon' viewbox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='3124' width='0.17rem' height='0.17rem'><path d='M821.333333 800H547.584l-86.464 96.074667a32 32 0 1 1-47.573333-42.816l96-106.666667A32 32 0 0 1 533.333333 736h288a53.333333 53.333333 0 0 0 53.333334-53.333333V234.666667a53.333333 53.333333 0 0 0-53.333334-53.333334H202.666667a53.333333 53.333333 0 0 0-53.333334 53.333334v448a53.333333 53.333333 0 0 0 53.333334 53.333333h138.666666a32 32 0 0 1 0 64H202.666667c-64.8 0-117.333333-52.533333-117.333334-117.333333V234.666667c0-64.8 52.533333-117.333333 117.333334-117.333334h618.666666c64.8 0 117.333333 52.533333 117.333334 117.333334v448c0 64.8-52.533333 117.333333-117.333334 117.333333zM704 341.333333a32 32 0 0 1 0 64H320a32 32 0 0 1 0-64h384zM512 512a32 32 0 0 1 0 64H320a32 32 0 0 1 0-64h192z' p-id='3125' fill='var(--font-gray-2)'></path></svg><span class='comment'>CONUM</span></div></div><div class='normalListRight'><div class='normalListRightIco'><svg t='1650442362733' class='icon' viewbox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='7279' width='0.23rem' height='0.23rem'><path d='M753.3 960.2H275c-45.2 0-81.9-36.7-81.9-81.9V146.1c0-45.2 36.7-81.9 81.9-81.9h478.3c45.2 0 81.9 36.7 81.9 81.9v732.3c0 45.2-36.7 81.8-81.9 81.8z' fill='#383838' p-id='7280'></path><path d='M736.3 368.9H291.9c-18.5 0-33.4-15-33.4-33.4V174c0-18.5 15-33.4 33.4-33.4h444.4c18.5 0 33.4 15 33.4 33.4v161.5c0 18.5-14.9 33.4-33.4 33.4zM514.1 541.6c-32.2 0-58.3-26.1-58.3-58.3 0-32.2 26.1-58.3 58.3-58.3 32.2 0 58.3 26.1 58.3 58.3 0 32.2-26.1 58.3-58.3 58.3z m-197.3 0c-32.2 0-58.3-26.1-58.3-58.3 0-32.2 26.1-58.3 58.3-58.3 32.2 0 58.3 26.1 58.3 58.3 0 32.2-26.1 58.3-58.3 58.3z m0 166.3c-32.2 0-58.3-26.1-58.3-58.3 0-32.2 26.1-58.3 58.3-58.3 32.2 0 58.3 26.1 58.3 58.3 0 32.2-26.1 58.3-58.3 58.3z m197.3 171.6H316.8c-32.2 0-58.3-26.1-58.3-58.3 0-32.2 26.1-58.3 58.3-58.3h197.3c32.2 0 58.3 26.1 58.3 58.3 0 32.3-26.1 58.3-58.3 58.3z m0-171.6c-32.2 0-58.3-26.1-58.3-58.3 0-32.2 26.1-58.3 58.3-58.3 32.2 0 58.3 26.1 58.3 58.3 0 32.2-26.1 58.3-58.3 58.3z' fill='#BFBFBF' p-id='7281'></path><path d='M711.5 707.9c-32.2 0-58.3-26.1-58.3-58.3 0-32.2 26.1-58.3 58.3-58.3 32.2 0 58.3 26.1 58.3 58.3-0.1 32.2-26.1 58.3-58.3 58.3z m0 171.6c-32.2 0-58.3-26.1-58.3-58.3 0-32.2 26.1-58.3 58.3-58.3 32.2 0 58.3 26.1 58.3 58.3-0.1 32.3-26.1 58.3-58.3 58.3z m0-337.9c-32.2 0-58.3-26.1-58.3-58.3 0-32.2 26.1-58.3 58.3-58.3 32.2 0 58.3 26.1 58.3 58.3-0.1 32.2-26.1 58.3-58.3 58.3z' fill='#FF6700' p-id='7282'></path></svg></div><div class='normalListRightBox'><div class='normalListRightTittle'>标题</div><div class='normalListRightInfo'><div class='normalListRightDate'><svg t='1650441614729' class='icon' viewbox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2663' width='0.1rem' height='0.1rem'><path d='M512.001012 1024c-282.773537 0-512.000512-229.227997-512.000512-511.999488 0-282.773537 229.226974-512.000512 512.000512-512.000512 282.771491 0 511.998465 229.226974 511.998465 512.000512C1023.999477 794.772003 794.771479 1024 512.001012 1024zM512.001012 64.999777C265.13529 64.999777 65.000277 265.135813 65.000277 512.000512c0 246.862652 200.135013 446.999711 446.999711 446.999711 246.863675 0 447.001758-200.137059 447.001758-446.999711C959.001746 265.135813 758.864687 64.999777 512.001012 64.999777zM482.000406 545.000257l-0.999713-351.000639 63.000351 0 0 319.000607 197.998471 166.000486-39.000071 54.999575L482.000406 545.000257z' p-id='2664' fill='var(--font-gray-2)'></path></svg>日期</div><div class='normalListRightReffer'>来源：xxx</div></div></div></div></div></div></div>";
			newObj = newObj.replace("TOOLNAME", Data_json.Items[i].name);
			newObj = newObj.replace("标签", Category[Data_json.Items[i].classificationId]);
			newObj = newObj.replace("GOODNUM", Data_json.Items[i].collect_num);
			newObj = newObj.replace("CONUM", Data_json.Items[i].collect_num);
			newObj = newObj.replace("标题", Data_json.Items[i].title);
			newObj = newObj.replace("日期", Data_json.Items[i].uploadTime);
			newObj = newObj.replace("xxx", Data_json.Items[i].referrer);
	
			main = document.createElement("a");
			main.href = Data_json.Items[i].page_url;
			main.target = "_blank";
			main.style.textDecoration = "none";
			main.innerHTML = newObj;
			targetObj.appendChild(main);
		}
	}
	if (!flag) {
		emptyObj = document.createElement("div");
		emptyObj.id = "NormalListEmpty";
		emptyObj.innerHTML =
			"<svg t='1647501132883' class='icon' viewbox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='6197' width='1rem' height='1rem'><path d='M645.8 544.9L415.6 240 195.1 394c-20.8 14.5-25.2 43.4-9.8 63.5L327.5 643l318.3-98.1z' fill='#8F3694' p-id='6198'></path><path d='M645.8 544.9L415.6 240 595 120.8c21.3-14.1 49.9-8.4 64.2 12.7l141.5 209.7-154.9 201.7z' fill='#8F3694' p-id='6199'></path><path d='M800.7 343.2l-0.1-0.2v0.2zM562.2 289c7.8-14.9 21.9-25.6 38.4-29.1l125.9-26.7-74.6-110.6c-11.2-16.5-31.2-24.7-50.7-20.8l-286.4 58 177.5 262.9L562.2 289z' fill='#CAC134' p-id='6200'></path><path d='M377.5 357.4L492 423.2l0.3-0.5-177.5-262.9-140.3 232c-10.5 17.4-9.3 39.4 3.1 55.6l47.8 62.4 104.9-142.4c10.9-14.9 31.2-19.2 47.2-10zM492.4 423.5l0.2-0.2-0.3 0.1zM327.5 643l7.8-10.5-7.8 10.4zM816.8 214l-90.3 19.2L800.6 343l34-109.5c3.5-11.2-6.4-21.9-17.8-19.5z' fill='#FFBA3B' p-id='6201'></path><path d='M492.6 423.3l308-80.1-308 80z' fill='#FE506B' p-id='6202'></path><path d='M600.6 259.9c-16.5 3.5-30.5 14.2-38.4 29.1l-70 133.7 0.3 0.5 308-80v-0.2l-74.1-109.9-125.8 26.8z' fill='#CAC134' p-id='6203'></path><path d='M600.6 259.9c-16.5 3.5-30.5 14.2-38.4 29.1l-70 133.7 0.3 0.5 308-80v-0.2l-74.1-109.9-125.8 26.8z' fill='#FF7C20' p-id='6204'></path><path d='M492.3 422.7l-0.3 0.5 0.3 0.2 0.3-0.1v-0.1z' fill='#FFBA3B' p-id='6205'></path><path d='M492.3 422.7l-0.3 0.5 0.3 0.2 0.3-0.1v-0.1z' fill='#FE506B' p-id='6206'></path><path d='M201.7 541.7c-9.6 13-5.4 31.5 8.9 39L327.4 643v-0.1L225.3 509.7l-23.6 32z' fill='#FFBA3B' p-id='6207'></path><path d='M492.8 423.7l-0.4-0.2-157.1 209z' fill='#FE506B' p-id='6208'></path><path d='M491.9 423.5l0.1-0.2-114.5-65.8c-16-9.2-36.3-4.9-47.2 9.9l-105 142.3 102.1 133.2 7.9-10.4 157.1-209.1-0.2-0.1-0.3 0.2z' fill='#FFBA3B' p-id='6209'></path><path d='M491.9 423.5l0.1-0.2-114.5-65.8c-16-9.2-36.3-4.9-47.2 9.9l-105 142.3 102.1 133.2 7.9-10.4 157.1-209.1-0.2-0.1-0.3 0.2z' fill='#FF7C20' p-id='6210'></path><path d='M492.3 423.4l-0.3-0.2-0.1 0.3z' fill='#FFBA3B' p-id='6211'></path><path d='M492.3 423.4l-0.3-0.2-0.1 0.3z' fill='#FE506B' p-id='6212'></path><path d='M492.3 423.4l-0.3-0.2-0.1 0.3z' fill='#FE506B' p-id='6213'></path><path d='M595 680.5l-250.3 83.8c-14.4 4.9-29-6.7-27.5-21.8l10.3-99.5 318.3-98.1-14 94.7c-4.3 19-18.2 34.5-36.8 40.9z' fill='#FFBA3B' p-id='6214'></path><path d='M851.5 334.6L745.8 456c-7.2 9-15.5 17-24.7 23.9l-75.5 65.2 154.9-201.8 42.2-19.7c7-3.3 13.6 5 8.8 11z' fill='#FFBA3B' p-id='6215'></path><path d='M267.2 849a278.1 72.4 0 1 0 556.2 0 278.1 72.4 0 1 0-556.2 0Z' fill='#8F3694' p-id='6216'></path><path d='M511.4 669.9l14.7-5.6c5.3-2.1 11.4-1 15.8 2.7l22.6 19.2c8.6 7.3 7 21-3.1 26l-13.6 6.8c-5.6 2.8-12.4 2-17.2-2.1l-23.7-20.3c-9.1-7.9-6.5-22.4 4.5-26.7zM624.1 838.6l11-6.2c4-2.3 9-2.9 13.1-1.8l21 6.1c8 2.3 8.7 10.4 1.3 15.4l-10 6.7c-4.1 2.8-9.7 3.7-14.2 2.4l-22.1-6.6c-8.3-2.5-8.4-11.3-0.1-16z' fill='#FE506B' p-id='6217'></path></svg>";
		targetObj.appendChild(emptyObj);
	}
}