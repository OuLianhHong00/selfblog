<?php
namespace app\admin\controller;
use \think\Controller;
use app\common\model\Blog;
class Admin extends Controller{
	//首页
         public function admin(){
         $blog=new Blog();
        $list=$blog->content();
        $page=$list->render();
        $this->assign('list',$list);
        $this->assign('page',$page);
         	return $this->fetch('admin');
         }
     
	
	
	
}