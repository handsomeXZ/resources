document.getElementById("UserIco").addEventListener("click",function(){
	document.getElementById("userDetailList").style.visibility="visible";
	document.getElementById("userDetailList").style.width="1rem";
	document.getElementById("userDetailList").style.height="2rem";
	document.getElementById("userDetailList").style.borderRadius="0.1rem";
	document.getElementById("userDetailList").style.boxShadow="1px 1px 9px rgb(0, 0, 0, 0.6)";
	document.getElementById("userDetailList").style.fontSize="17px";
	document.getElementById("userDetailList").style.fontWeight="660";
})
document.getElementById("userDetailList").addEventListener("mouseleave",function(){
	document.getElementById("userDetailList").style.visibility="visible";
	document.getElementById("userDetailList").style.width="0rem";
	document.getElementById("userDetailList").style.height="0rem";
	document.getElementById("userDetailList").style.borderRadius="0";
	document.getElementById("userDetailList").style.boxShadow="none";
	document.getElementById("userDetailList").style.fontSize="0";
	document.getElementById("userDetailList").style.fontWeight="0";
})
