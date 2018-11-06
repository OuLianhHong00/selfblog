<?php
namespace app\common\model;
use think\Model;
use think\Paginator;
Class Blog extends Model{
	
	//获取当前博客总数
	public function number()
	{
		return Blog::count();
	}
	//获取当前所有的数据
	public function content()
	{
		return Blog::order('id','desc')->paginate(5);
	}
	//获取分类为心情随笔的所有文章
	public function mood(){
		return Blog::where('type',"心情随笔")->order('id','desc')->paginate(8);
	}
	//获取分类为技术的所有文章
	public function technology(){
        return Blog::where('type',"技术分享")->order('id','desc')->paginate(8);
	}
}