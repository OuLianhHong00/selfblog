function delArticle(id, name) {

	var r = confirm("确认删除此篇博文吗？");
	if (r == true) {
		$.ajax({
			url: '/admin/Blog/deleteArticle',
			type: 'POST',
			data: {
				'id': id,
			},
			error: function() {
				alert("删除博文失败");
			},
			success: function() {
				alert("删除博文成功");
				window.location.href = "/../admin/admin/admin";
			}
		});
	}
}