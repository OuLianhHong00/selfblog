<?php
namespace app\admin\controller;
use \think\Controller;
use app\common\model\Blog;
class Article extends Controller{
	//首页
	//博客详情页
         public function article($id){
        $blog=Blog::get($id);
        $this->assign('blog',$blog);
         return $this->fetch('admin/article');
         }
     }
     