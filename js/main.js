
document.getElementById("favoritesOpen").addEventListener("click",function(){
	var obj=document.getElementById("favoritesCheckBox");
	var container=document.getElementById("Favorites");
	var containerItem=document.getElementById("favoritesItem");
	if (obj.checked == true) {
		container.style.height="2rem";
		containerItem.style.height="1.75rem";
		containerItem.style.fontSize="0";
	}
	else{
		container.style.height="0.5rem";
		containerItem.style.height="0.27rem";
	}
})

var test={
	"Items":[
		{
			"id":"1",
			"classification_id":"a",
			"name":"房贷计算器",
			"title":"房贷计算器",
			"tweet":"房贷计算器",
			"referrer":"汤宇婷",
			"upload_time":"2022/3/17",
			"collect_num":"100",
			"tool_url":""
		},
		{
			"id":"2",
			"classification_id":"a",
			"name":"全款买车计算器",
			"title":"全款买车计算器",
			"tweet":"全款买车计算器",
			"referrer":"汤宇婷",
			"upload_time":"2022/3/17",
			"collect_num":"100",
			"tool_url":""
		},
		{
			"id":"3",
			"classification_id":"b",
			"name":"发票识别软件",
			"title":"发票识别软件",
			"tweet":"发票识别软件",
			"referrer":"汤宇婷",
			"upload_time":"2022/3/17",
			"collect_num":"10",
			"tool_url":""
		}
		]
}
function select(name){
	var flag = false;
	var emptyObj;
	var newObj;
	var targetObj=document.getElementById("NormalList");
	
	targetObj.innerHTML="";
	for (var i = 0; i < test.Items.length; i++) {
		if(name==test.Items[i].classification_id){
			flag = true;
			newObj=document.createElement("div");
			newObj.className="normalItems";
			newObj.innerHTML="<div class='normalItemsTop'><div class='normalItemsTopIco'></div><div class='normalItemsTopInfo'><div class='normalItemsTopInfoName'>"+test.Items[i].name+"</div><div class='normalItemsTopInfoTiitle'>"+test.Items[i].title+"</div><div class='normalItemsTopInfoIntroduce'>"+test.Items[i].tweet+"</div></div></div><div class='normalItemsBottom'><div class='normalItemsBottomCollect'><svg t='1647515960080' class='icon' viewbox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='13214' width='0.2rem' height='0.2rem'><path d='M892.543016 224.150106c-9.284457-11.914354-17.804505-21.814842-26.454512-30.930453C759.437485 80.827887 642.682341 92.003414 536.033369 176.799682c-9.493212 7.547907-18.453281 15.383362-26.88737 23.346731-8.43409-7.963369-17.395182-15.798824-26.888394-23.346731C375.608633 92.003414 258.853489 80.827887 152.202471 193.21863c-8.650007 9.115612-17.170055 19.016099-25.559119 29.714765C-2.680039 410.134984 68.411089 595.897805 259.728416 764.030084c42.320874 37.192064 87.560218 70.64906 132.799562 99.905384 15.841803 10.245342 30.570249 19.244296 43.816948 26.932396 8.024767 4.657067 13.827937 7.872295 17.044188 9.578146 4.869914 2.916423 9.728572 5.142114 14.530948 6.771217 3.470031 1.619894 7.516184 3.091408 12.218276 4.387937 25.377994 6.998391 62.97938 1.908466 85.839017-11.764951 2.14178-1.101077 7.944949-4.315282 15.969717-8.972349 13.246699-7.688099 27.974122-16.687054 43.816948-26.932396 45.239344-29.256324 90.478687-62.71332 132.799562-99.905384C949.879885 595.897805 1020.971014 410.134984 892.543016 224.150106z' p-id='13215' fill='#ff6b81'></path></svg><div class='normalItemsBottomCollectNum'>"+test.Items[i].collect_num+"</div></div><div class='normalItemsBottomReferrer'><div>来源：</div><div>"+test.Items[i].referrer+"</div></div>"
			targetObj.appendChild(newObj);
		}
	}
	if(!flag){
		emptyObj=document.createElement("div");
		emptyObj.id="NormalListEmpty";
		emptyObj.innerHTML="<svg t='1647501132883' class='icon' viewbox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='6197' width='1rem' height='1rem'><path d='M645.8 544.9L415.6 240 195.1 394c-20.8 14.5-25.2 43.4-9.8 63.5L327.5 643l318.3-98.1z' fill='#8F3694' p-id='6198'></path><path d='M645.8 544.9L415.6 240 595 120.8c21.3-14.1 49.9-8.4 64.2 12.7l141.5 209.7-154.9 201.7z' fill='#8F3694' p-id='6199'></path><path d='M800.7 343.2l-0.1-0.2v0.2zM562.2 289c7.8-14.9 21.9-25.6 38.4-29.1l125.9-26.7-74.6-110.6c-11.2-16.5-31.2-24.7-50.7-20.8l-286.4 58 177.5 262.9L562.2 289z' fill='#CAC134' p-id='6200'></path><path d='M377.5 357.4L492 423.2l0.3-0.5-177.5-262.9-140.3 232c-10.5 17.4-9.3 39.4 3.1 55.6l47.8 62.4 104.9-142.4c10.9-14.9 31.2-19.2 47.2-10zM492.4 423.5l0.2-0.2-0.3 0.1zM327.5 643l7.8-10.5-7.8 10.4zM816.8 214l-90.3 19.2L800.6 343l34-109.5c3.5-11.2-6.4-21.9-17.8-19.5z' fill='#FFBA3B' p-id='6201'></path><path d='M492.6 423.3l308-80.1-308 80z' fill='#FE506B' p-id='6202'></path><path d='M600.6 259.9c-16.5 3.5-30.5 14.2-38.4 29.1l-70 133.7 0.3 0.5 308-80v-0.2l-74.1-109.9-125.8 26.8z' fill='#CAC134' p-id='6203'></path><path d='M600.6 259.9c-16.5 3.5-30.5 14.2-38.4 29.1l-70 133.7 0.3 0.5 308-80v-0.2l-74.1-109.9-125.8 26.8z' fill='#FF7C20' p-id='6204'></path><path d='M492.3 422.7l-0.3 0.5 0.3 0.2 0.3-0.1v-0.1z' fill='#FFBA3B' p-id='6205'></path><path d='M492.3 422.7l-0.3 0.5 0.3 0.2 0.3-0.1v-0.1z' fill='#FE506B' p-id='6206'></path><path d='M201.7 541.7c-9.6 13-5.4 31.5 8.9 39L327.4 643v-0.1L225.3 509.7l-23.6 32z' fill='#FFBA3B' p-id='6207'></path><path d='M492.8 423.7l-0.4-0.2-157.1 209z' fill='#FE506B' p-id='6208'></path><path d='M491.9 423.5l0.1-0.2-114.5-65.8c-16-9.2-36.3-4.9-47.2 9.9l-105 142.3 102.1 133.2 7.9-10.4 157.1-209.1-0.2-0.1-0.3 0.2z' fill='#FFBA3B' p-id='6209'></path><path d='M491.9 423.5l0.1-0.2-114.5-65.8c-16-9.2-36.3-4.9-47.2 9.9l-105 142.3 102.1 133.2 7.9-10.4 157.1-209.1-0.2-0.1-0.3 0.2z' fill='#FF7C20' p-id='6210'></path><path d='M492.3 423.4l-0.3-0.2-0.1 0.3z' fill='#FFBA3B' p-id='6211'></path><path d='M492.3 423.4l-0.3-0.2-0.1 0.3z' fill='#FE506B' p-id='6212'></path><path d='M492.3 423.4l-0.3-0.2-0.1 0.3z' fill='#FE506B' p-id='6213'></path><path d='M595 680.5l-250.3 83.8c-14.4 4.9-29-6.7-27.5-21.8l10.3-99.5 318.3-98.1-14 94.7c-4.3 19-18.2 34.5-36.8 40.9z' fill='#FFBA3B' p-id='6214'></path><path d='M851.5 334.6L745.8 456c-7.2 9-15.5 17-24.7 23.9l-75.5 65.2 154.9-201.8 42.2-19.7c7-3.3 13.6 5 8.8 11z' fill='#FFBA3B' p-id='6215'></path><path d='M267.2 849a278.1 72.4 0 1 0 556.2 0 278.1 72.4 0 1 0-556.2 0Z' fill='#8F3694' p-id='6216'></path><path d='M511.4 669.9l14.7-5.6c5.3-2.1 11.4-1 15.8 2.7l22.6 19.2c8.6 7.3 7 21-3.1 26l-13.6 6.8c-5.6 2.8-12.4 2-17.2-2.1l-23.7-20.3c-9.1-7.9-6.5-22.4 4.5-26.7zM624.1 838.6l11-6.2c4-2.3 9-2.9 13.1-1.8l21 6.1c8 2.3 8.7 10.4 1.3 15.4l-10 6.7c-4.1 2.8-9.7 3.7-14.2 2.4l-22.1-6.6c-8.3-2.5-8.4-11.3-0.1-16z' fill='#FE506B' p-id='6217'></path></svg>";
		targetObj.appendChild(emptyObj);
	}
}