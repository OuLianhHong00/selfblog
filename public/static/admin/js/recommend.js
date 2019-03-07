function openContent(evt, Cname, tab_id) {
	var i;
	var tabcontent;
	var tablinks;
	var tab;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tab = document.getElementsByClassName("tab_1");
	for (i = 0; i < tab.length; i++) {
		tab[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(Cname).style.display = "block";
	document.getElementById(tab_id).style.display = "block";
	evt.currentTarget.className += " active";
}

function openTab(evt, name) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent_1");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks_1");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(name).style.display = "block";
	evt.currentTarget.className += " active";
}

function openTabe(evt, name) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent_2");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks_2");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(name).style.display = "block";
	evt.currentTarget.className += " active";
}

function openTabs(evt, name) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent_3");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks_3");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(name).style.display = "block";
	evt.currentTarget.className += " active";
}
//添加y音乐
$(function() {
	$("#addMusic").click(function() {
		var musicname = document.getElementById("musicname").value;
		var musicurl = document.getElementById("musicurl").value;
		if (musicname == "" || musicname == null) {
			alert("音乐名称不能为空！");
		} else {
			var r = confirm("是否要提交添加的音乐信息？");
			if (r == true) {
				$.ajax({
					url: '/admin/Recommend/addMusic',
					type: 'POST',
					data: {
						'musicname': musicname,
						'musicurl': musicurl
					},
					error: function() {
						alert("添加音乐信息失败");
					},
					success: function() {
						alert("添加音乐信息成功");
					}
				});
			}
		}
	});
})
//修改音乐
function occurMusicModal(name, id, url) {
	var modal = document.getElementById("musicModal");
	modal.style.display = "block";
	document.getElementById("musicname_2").value = name;
	document.getElementById("musicurl_2").value = url;
	document.getElementById("musicId").innerHTML = id;

}

function cancleMusic() {
	var mymodal = document.getElementById("musicModal");
	mymodal.style.display = "none";
}

function fixMusic() {
	var musicname = document.getElementById("musicname_2").value;
	var musicurl = document.getElementById("musicurl_2").value;
	var id = document.getElementById("musicId").innerHTML;
	var r = confirm("是否要提交修改后的获奖信息？");
	if (r == true) {
		$.ajax({
			url: '/admin/Recommend/fixMusic',
			type: 'POST',
			data: {
				'id': id,
				'musicname': musicname,
				'musicurl': musicurl,
			},
			error: function() {
				alert("修改音乐信息失败");
			},
			success: function() {
				alert("修改音乐信息成功");
				window.location.reload();
			}
		});
	}
}

//删除音乐
function deleteMusic(id) {
	var r = confirm("确认删除此音乐");
	if (r == true) {
		$.ajax({
			url: '/admin/Recommend/deleteMusic',
			type: 'POST',
			data: {
				'id': id,
			},
			error: function() {
				alert("删除音乐信息失败");
			},
			success: function() {
				alert("删除音乐信息成功");
				window.location.reload();
			}
		});
	}
}
//添加书籍
$(function() {
	$("#addBook").click(function() {
		var bookname = document.getElementById("bookname").value;
		var bookurl = document.getElementById("bookurl").value;
		if (bookname == "" || bookname == null) {
			alert("书籍名称不能为空！");
		} else {
			var r = confirm("是否要提交添加的书籍信息？");
			if (r == true) {
				$.ajax({
					url: '/admin/Recommend/addBooks',
					type: 'POST',
					data: {
						'bookname': bookname,
						'bookurl': bookurl,
					},
					error: function() {
						alert("添加书籍信息失败");
					},
					success: function() {
						alert("添加书籍信息成功");
					}
				});
			}
		}
	});
})
//修改书籍
function occurBookModal(name, id, url) {
	var modal = document.getElementById("bookModal");
	modal.style.display = "block";
	document.getElementById("bookname_2").value = name;
	document.getElementById("bookurl_2").value = url;
	document.getElementById("bookId").innerHTML = id;

}

function cancleBook() {
	var mymodal = document.getElementById("bookModal");
	mymodal.style.display = "none";
}

function fixBook() {
	var bookname = document.getElementById("bookname_2").value;
	var bookurl = document.getElementById("bookurl_2").value;
	var id = document.getElementById("bookId").innerHTML;
	var r = confirm("是否要提交修改后的书籍信息？");
	if (r == true) {
		$.ajax({
			url: '/admin/Recommend/fixBook',
			type: 'POST',
			data: {
				'id': id,
				'bookname': bookname,
				'bookurl': bookurl,
			},
			error: function() {
				alert("修改书籍信息失败");
			},
			success: function() {
				alert("修改书籍信息成功");
				window.location.reload();
			}
		});
	}
}
//删除书籍
function deleteBook(id) {
	var r = confirm("确认删除书籍？");
	if (r == true) {
		$.ajax({
			url: '/admin/Recommend/deleteBook',
			type: 'POST',
			data: {
				'id': id,
			},
			error: function() {
				alert("删除书籍信息失败");
			},
			success: function() {
				alert("删除书籍信息成功");
				window.location.reload();
			}
		});
	}
}
//添加人
$(function() {
	$("#addPerson").click(function() {
		var name = document.getElementById("personname").value;
		var url = document.getElementById("personurl").value;
		if (name == "" || name == null) {
			alert("人名不能为空！");
		} else {
			var r = confirm("是否要提交添加的人信息？");
			if (r == true) {
				$.ajax({
					url: '/admin/Recommend/addPerson',
					type: 'POST',
					data: {
						'personname': name,
						'personurl': url,
					},
					error: function() {
						alert("添加人息失败");
					},
					success: function() {
						alert("添加人息成功");
					}
				});
			}
		}
	});
})
//修改人
function occurPersonModal(name, id, url) {
	var modal = document.getElementById("personModal");
	modal.style.display = "block";
	document.getElementById("personname_2").value = name;
	document.getElementById("personurl_2").value = url;
	document.getElementById("personId").innerHTML = id;

}

function canclePerson() {
	var mymodal = document.getElementById("personModal");
	mymodal.style.display = "none";
}

function fixPerson() {
	var personname = document.getElementById("personname_2").value;
	var personurl = document.getElementById("personurl_2").value;
	var id = document.getElementById("personId").innerHTML;
	var r = confirm("是否要提交修改后的获奖信息？");
	if (r == true) {
		$.ajax({
			url: '/admin/Recommend/fixPerson',
			type: 'POST',
			data: {
				'id': id,
				'personname': personname,
				'personurl': personurl,
			},
			error: function() {
				alert("修改失败");
			},
			success: function() {
				alert("修改成功");
				window.location.reload();
			}
		});
	}
}
//删除人
function deletePerson(id) {
	var r = confirm("确认删除推荐的人？");
	if (r == true) {
		$.ajax({
			url: '/admin/Recommend/deletePerson',
			type: 'POST',
			data: {
				'id': id,
			},
			error: function() {
				alert("删除推荐人失败");
			},
			success: function() {
				alert("删除推荐人成功");
				window.location.reload();
			}
		});
	}
}