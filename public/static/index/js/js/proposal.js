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
	$.ajax({
		url: '/index/Proposal/saveProposal',
		type: 'POST',
		data: {
			'text': inputValue,
		},
		error: function() {
			alert("建议提议失败");
		},
		success: function() {
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
		}
	});
}
var close = document.getElementsByClassName("close");
var num = document.getElementsByClassName("proid");
var i;
for (i = 0; i < close.length; i++) {
	close[i].onclick = function() {
		var sum = num[i];
		var r = confirm("是否要删除此条评论？");
		if (r == true) {
			$.ajax({
				url: '/index/Proposal/cancelProposal',
				type: 'POST',
				data: {
					'id': num,
				},
				error: function() {
					alert("删除提议失败");
				},
				success: function() {
					//var div = this.parentElement;
					//div.style.display = "none";
					window.location.reload();
				}
			});
		}
	}
}