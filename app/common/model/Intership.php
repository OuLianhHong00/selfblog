<?php
namespace app\common\model;
use think\Model;

Class Intership extends Model{
	//查询实习经历
	public function intership(){
		return Intership::select();
	}
}