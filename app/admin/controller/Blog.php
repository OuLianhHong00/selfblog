<?php
namespace app\admin\controller;
use \think\Controller;
use app\common\model\Blog as ModelBlog;

class Blog extends Controller{
	public function blog(){
		if($_SERVER["REQUEST_METHOD"]=="POST")
		{
			$blogname=$_POST["blogname"];
            $content=$_POST["content"];
            $type=$_POST["blogtype"];
            $time=date("Y/m/d H:i:s",time());
            $file=request()->file('photo');
            $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads','');
            $blog=new ModelBlog();
            $blog->blogname=$blogname;
            $blog->type=$type;
            $blog->time=$time;
            $blog->content=$content;
            $blog->picture='/public/uploads/'.$info->getSaveName();
            $result=$blog->save();
             if($info){
              
    }else{
        // 上传失败获取错误信息
        echo $file->getError();
    }
            if($result==true)
            {
            	$this->success('博客发布成功','/../admin/Admin/admin');
            }
            else{
            	$this->error('博客发布失败');
            }
           
        }

		 return $this->fetch('admin/blog',[
		 ]);
		// dump(__PUBLIC__);
	}
    //加载修改博客页面
    public function fixArticle($id){
         $blog=ModelBlog::get($id);
        $this->assign('blog',$blog);
         return $this->fetch('admin/fixarticle');
    }
    //保存修改博客
    public function saveArticle($id){
        if($_SERVER["REQUEST_METHOD"]=="POST")
        {
            $blogname=$_POST["blogname"];
            $content=$_POST["content"];
            $type=$_POST["blogtype"];
            $time=date("Y/m/d H:i:s",time());
            $file=request()->file('photo');
            $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads','');
            $blog=ModelBlog::get($id);
            $blog->blogname=$blogname;
            $blog->type=$type;
            $blog->time=$time;
            $blog->content=$content;
            $blog->picture='/public/uploads/'.$info->getSaveName();
            $result=$blog->save();
             if($info){
              
    }else{
        // 上传失败获取错误信息
        echo $file->getError();
    }
            if($result==true)
            {
                $this->success('博客修改成功','/../admin/Admin/admin');
            }
            else{
                $this->error('博客修改失败');
            }
           
        }

    }
    //删除博文
    function deleteArticle(){
        $id=$_POST["id"];
        $deletearticle=ModelBlog::get($id);
       $result= $deletearticle->delete();
       if($result==true)
            {
                $this->success('博客删除成功','/../admin/Admin/admin');
            }
            else{
                $this->error('博客删除失败');
            }
    }
}
