//自定义BUTTON组件

function button(height,width,value,id) {
	var target = document.getElementById(id);
	var button = document.createElement("button");
	button.style.height=height+"px";
	button.style.width=width+"px";
	button.innerHTML=value;
	button.setAttribute('type','button');
	target.appendChild(button);
}