<?php
namespace app\common\model;
use think\Model;

class Prize extends Model{
	public function prize(){
		return Prize::select();
	}
}