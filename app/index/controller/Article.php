<?php
namespace app\index\controller;
use \think\Controller;
use app\common\model\Blog;
class Article extends Controller
{
	 public function article($id){
        $blog=Blog::get($id);
        $this->assign('blog',$blog);
        $blog->liulannum=($blog->liulannum)+1;
        $blog->save();
         return $this->fetch('index/article');
         }
         public function numperfect(){
         	$id=$_POST['id'];
         	$blog=Blog::get($id);
         	$blog->dianzan=($blog->dianzan)+1;
         	$blog->save();
         }
}