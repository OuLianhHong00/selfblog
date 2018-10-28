<?php
namespace app\common\model;
use think\Model;

class Proposal extends Model{
	public function suggest(){
		$pro=new Proposal();
		return $pro->order('id','desc')->select();
	}
}