function validateForm() {
	var title = document.forms["blogForm"]["blogname"].value;
	if (title == null || title == "") {
		alert("标题不能为空！");

		return false;
	}
}

function beginView() {
	//获取文件框的第一个文件,因为文件有可能上传多个文件,咱这里是一个文件
	var file = document.getElementById("photo").files[0];
	console.log(file);
	//可以进行一下文件类型的判断
	var fileType = file.type.split("/")[0];
	if (fileType != "image") {
		alert("请上传图片")
		return;
	}
	//图片大小的限制
	var fileSize = Math.round(file.size / 1024 / 1024);
	if (fileSize >= 3) {
		alert("请上传小于少于3M的图片");
		return;
	}
	//获取img对象
	var img = document.getElementById("picture");
	//建一条文件流来读取图片
	var reader = new FileReader();
	//根据url将文件添加的流中
	reader.readAsDataURL(file);
	//实现onload接口
	reader.onload = function(e) {
		//获取文件在流中url
		url = reader.result;
		//将url赋值给img的src属性
		img.src = url;
	};


}