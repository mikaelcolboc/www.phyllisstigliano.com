function changeImg(nb){
	for(i=1;i<=10;i++){
		if(i==nb) document.getElementById('large'+i).style.display='block';
		else if(document.getElementById('large'+i)) document.getElementById('large'+i).style.display='none';
	}
}

//suckerfish for hover in ie

sfHover = function() {
	document.getElementById("niki").onmouseover=function() {
		this.className+=" sfhover";
	}
	document.getElementById("niki").onmouseout=function() {
		this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
	}
}
window.onload = function(){
	if (window.attachEvent) window.attachEvent("onload", sfHover);
}