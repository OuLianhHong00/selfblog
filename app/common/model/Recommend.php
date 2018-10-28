<?php
namespace app\common\model;
use think\Model;

Class Recommend extends Model{
	//查询推荐的人
	public function recommendPeople(){
		return Recommend::where('type',"推荐的人")->select();
	}
	//推荐的书籍
	public function recommendMusic(){
		return Recommend::where('type',"推荐的音乐")->select();
	}
	//推荐的音乐
	public function recommendBook(){
		return Recommend::where('type',"推荐的书籍")->select();
	}
}