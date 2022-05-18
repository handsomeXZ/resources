
document.getElementById("buttom").addEventListener("click", function() {
	var user = document.getElementById("phone_value").value;
	var password = document.getElementById("password_value").value;
	var http = new XMLHttpRequest();
	var Data_j;
	if(user=="" || password=="" || user=="undefind" || password=="undefind"){
		tip("账号或密码为空");
	}
	else{
		http.onreadystatechange = function() {
			if (http.readyState == 4 && http.status == 200) {
				Data_j = JSON.parse(http.responseText);
				console.log(Data_j.data);
				if(Data_j.data!="用户登陆成功"){
					tip("账号或密码错误","#df4a00");
				}
				else{
					window.location.href='index.html';
				}
			}
			else{
				tip("请求出错","#e20000");
			}
		}
		// http://vcafilm.gitee.io/resources/TestData/page.json
		http.open("GET", "http://120.26.39.150:8089/api/user/login?id="+user+"&password="+password+"&administrator=0", true);
		http.send();
	}

})

function tip(txt,color) {
	var target = document.getElementById("tipTop");
	var tip = document.createElement("div");
	var width = window.getComputedStyle(document.getElementById("tipTop")).width;
	var inner = document.createElement("div");
	tip.innerHTML="<svg t='1651909804863' class='icon' viewbox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='1887' width='35px' height='35px'><path d='M512 64a448 448 0 1 0 0.064 896.064A448 448 0 0 0 512 64z m70.208 612.864c-33.792 50.752-68.224 89.92-126.08 89.92-39.488-6.464-55.744-34.816-47.168-63.616l74.432-246.528c1.856-6.08-1.152-12.48-6.656-14.464s-16.256 5.184-25.6 15.36l-44.928 54.144c-1.28-9.024-0.192-24.064-0.192-30.144 33.856-50.752 89.344-90.816 127.04-90.816 35.84 3.712 52.736 32.32 46.528 63.744l-74.944 247.744c-0.96 5.632 1.984 11.264 7.04 13.056 5.504 1.984 17.088-5.184 26.432-15.424l44.928-54.08c1.216 9.088-0.832 25.088-0.832 31.104z m-9.984-322.048c-28.48 0-51.52-20.672-51.52-51.264 0-30.528 23.104-51.264 51.52-51.264 28.48 0 51.52 20.736 51.52 51.264 0 30.592-23.04 51.264-51.52 51.264z' fill='#2AE5B3' p-id='1888'></path></svg>";
	inner.innerHTML=txt;
	inner.id="tip_txt";
	inner.style.color=color;
	tip.id="J_tip";
	tip.style.left=((width.replace("px",""))/2-100)+"px";
	tip.style.top="30px"
	tip.appendChild(inner);
	target.appendChild(tip);
	setTimeout("document.getElementById('J_tip').remove();",1000);	
}
