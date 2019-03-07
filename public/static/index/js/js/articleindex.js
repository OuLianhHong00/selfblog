//对每一个评论添加删除按钮
var myList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myList.length; i++) {
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	myList[i].appendChild(span);
}
//评论按钮
function newElement() {
	var li = document.createElement("li");
	var inputValue = document.getElementById("otherinput").value;
	var t = document.createTextNode(inputValue);
	li.appendChild(t);
	if (inputValue === '') {
		alert("You must write something!");
	} else {
		document.getElementById("commentUL").appendChild(li);
	}
	document.getElementById("otherinput").value = "";

	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);
	var close = document.getElementsByClassName("close");
	var i;
	for (i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
}
//点赞成功
function myPerfect(id) {
	$.ajax({
		url: '/index/Article/numperfect',
		type: 'POST',
		data: {
			'id': id,
		},
		error: function() {
			var popup = document.getElementById("outPopup");
			popup.classList.toggle("show");
		},
		success: function() {
			var popup = document.getElementById("myPopup");
			popup.classList.toggle("show");
		}
	});
}