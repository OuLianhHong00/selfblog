function openContent(evt, Cname) {
	var i;
	var tabcontent;
	var tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(Cname).style.display = "block";
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
//实习经历选项卡
function openIntership(evt, name) {
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
//修改奖项的弹窗
function occurModal(name, time, id) {
	var modal = document.getElementById("myModal");
	modal.style.display = "block";
	document.getElementById("prizename_2").value = name;
	document.getElementById("prizetime_2").value = time;
	document.getElementById("prizeId").innerHTML = id;
}
//点击其他位置时关闭弹窗(奖项)
function canclePrize() {
	var mymodal = document.getElementById("myModal");
	mymodal.style.display = "none";
}
//修改实习经历的弹窗
function intershipModal(company, time, position, description, id) {
	var intershipModal = document.getElementById("intershipModal");
	intershipModal.style.display = "block";
	document.getElementById("company_1").value = company;
	document.getElementById("intershiptime_1").value = time;
	document.getElementById("position_1").value = position;
	document.getElementById("description_1").value = description;
	document.getElementById("intershipId_1").innerHTML = id;
}
//点击其他位置时关闭弹窗(实习经历)
function cancleIntership() {
	var modal = document.getElementById("intershipModal");
	modal.style.display = "none";
}
//个人基础信息修改
function baseSelfInfo() {
	var name = document.forms["selfinfoForm"]["name"].value;
	if (name == "" || name == null) {
		alert("姓名不能为空！");
		document.getElementsByName("name").focus();

	} else {
		var confirm = window.confirm("是否要提交修改后的信息？");
		if (confirm == true) {
			return true;
		} else {
			return false;
		}

	}

}

//添加获奖经历
$(function() {
	$("#addPrize").click(function() {
		var prizetime = document.getElementById("prizetime").value;
		var prizename = document.getElementById("prizename").value;
		if (prizename == "" || prizename == null) {
			alert("获奖名称不能为空！");
		} else if (prizetime == "") {
			alert("获奖时间不能为空！");
		} else {
			var r = confirm("是否要提交添加的获奖信息？");
			if (r == true) {
				$.ajax({
					url: '/admin/Selfinfo/addPrize',
					type: 'POST',
					data: {
						'prizename': prizename,
						'prizetime': prizetime
					},
					error: function() {
						alert("添加获奖信息失败");
					},
					success: function() {
						alert("添加获奖信息成功");
					}
				});
			}
		}
	});
})
//修改获奖经历
function fixPrize() {
	var prizename = document.getElementById("prizename_2").value;
	var prizetime = document.getElementById("prizetime_2").value;
	var id = document.getElementById("prizeId").innerHTML;
	if (prizename == "" || prizename == null) {
		alert("获奖名称不能为空！");
	} else if (prizetime == "") {
		alert("获奖时间不能为空！");
	} else {
		var r = confirm("是否要提交修改后的获奖信息？");
		if (r == true) {
			$.ajax({
				url: '/admin/Selfinfo/fixPrize',
				type: 'POST',
				data: {
					'id': id,
					'prizename': prizename,
					'prizetime': prizetime
				},
				error: function() {
					alert("修加获奖信息失败");
				},
				success: function() {
					alert("修加获奖信息成功");
					window.location.reload();
				}
			});
		}
	}
}
//删除获奖经历
function deletePrize(id) {
	var r = confirm("确认删除获奖信息？");
	if (r == true) {
		$.ajax({
			url: '/admin/Selfinfo/deletePrize',
			type: 'POST',
			data: {
				'id': id,
			},
			error: function() {
				alert("删除获奖信息失败");
			},
			success: function() {
				alert("删除获奖信息成功");
				window.location.reload();
			}
		});
	}
}
//添加实习经历
$(function() {
	$("#addIntership").click(function() {
		var intership = new Array();
		var text = document.getElementById("company");
		intership[0] = text.value;
		intership[1] = document.getElementById("intershiptime").value;
		intership[2] = document.getElementById("position").value;
		intership[3] = document.getElementById("description").value;
		if (intership[0] == "" || intership[0] == null) {
			alert("实习公司名称不能为空！");
		} else {
			$.ajax({
				url: '/admin/Selfinfo/addIntership',
				type: "POST",
				data: {
					'q': intership
				},
				error: function() {
					alert("添加失败");
				},
				success: function() {
					alert("添加成功");
				}
			});
		}
	})
});
//修改实习经历
function fixIntership() {
	var company = document.getElementById("company_1").value;
	var intershiptime = document.getElementById("intershiptime_1").value;
	var position = document.getElementById("position_1").value
	var description = document.getElementById("description_1").value;
	var id = document.getElementById("intershipId_1").innerHTML;
	if (company == "" || company == null) {
		alert("实习公司名称不能为空！");
	} else if (intershiptime == "") {
		alert("实习时间不能为空！");
	} else {
		var r = confirm("是否要提交修改后的实习经历信息？");
		if (r == true) {
			$.ajax({
				url: '/admin/Selfinfo/fixIntership',
				type: 'POST',
				data: {
					'id': id,
					'company': company,
					'time': intershiptime,
					'position': position,
					'description': description
				},
				error: function() {
					alert("修加实习经历失败");
				},
				success: function() {
					alert("修加实习经历成功");
					window.location.reload();
				}
			});
		}
	}
}
//删除实习经历
function deleteIntership(id) {
	var r = confirm("确认删除此实习经历？");
	if (r == true) {
		$.ajax({
			url: '/admin/Selfinfo/deleteIntership',
			type: 'POST',
			data: {
				'id': id
			},
			error: function() {
				alert("删除实习经历失败");
			},
			success: function() {
				alert("删除实习经历成功");
				window.location.reload();
			}
		});
	}
}