<?php
namespace app\common\model;
use think\Model;

class SelfInfo extends Model{
	//protected $selfinfo='bolg_self_info';

//个人简介页面的全部内容选择
	public function selectinfo()
	{
       return SelfInfo::where('id',1)->find();
	}
}