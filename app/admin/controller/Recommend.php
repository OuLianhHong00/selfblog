<?php
namespace app\admin\controller;
use \think\Controller;
use app\common\model\Recommend as ModelRecommend;
header('Content-type:text/json;charset=utf-8');

class Recommend extends Controller{
	//推荐
	public function recommend(){
		$recommend=new ModelRecommend();
		$music=$recommend->recommendMusic();
		$this->assign('musicList',$music);
		$person=$recommend->recommendPeople();
		$this->assign('personList',$person);
		$book=$recommend->recommendBook();
		$this->assign('bookList',$book);
		return $this->fetch('admin/recommend');
	}
	//添加推荐的音乐
	public function addMusic(){
		$recommend=new ModelRecommend;
		$recommend->name=$_POST["musicname"];
		$recommend->url=$_POST['musicurl'];
		$recommend->type="推荐的音乐";
		$recommend->save();
	}
	//修改推荐的音乐
	public function fixMusic(){
		$id=$_POST['id'];
    	$fixmusic=ModelRecommend::get($id);
    	$fixmusic->name=$_POST['musicname'];
    	$fixmusic->url=$_POST['musicurl'];
    	$fixmusic->type="推荐的音乐";
    	$fixmusic->save();
	}
	//删除推荐的音乐
    public function deleteMusic(){
    	$id=$_POST['id'];
    	$deletemusic=ModelRecommend::get($id);
    	$deletemusic->delete();
    }
	//添加推荐的书籍
	public function addBooks(){
		$recommend=new ModelRecommend();
		$recommend->name=$_POST['bookname'];
		$recommend->url=$_POST['bookurl'];
		$recommend->type="推荐的书籍";
		$recommend->save();
	}
	//修改推荐的书籍
	public function fixBook(){
		$id=$_POST['id'];
    	$fixbook=ModelRecommend::get($id);
    	$fixbook->name=$_POST['bookname'];
    	$fixbook->url=$_POST['bookurl'];
    	$fixbook->type="推荐的书籍";
    	$fixbook->save();
	}
	//删除推荐书籍
    public function deleteBook(){
    	$id=$_POST['id'];
    	$deletebook=ModelRecommend::get($id);
    	$deletebook->delete();
    }
	//添加推荐的人
	public function addPerson(){
		$recommend=new ModelRecommend();
		$recommend->name=$_POST['personname'];
		$recommend->url=$_POST['personurl'];
		$recommend->type="推荐的人";
		$recommend->save();
	}
	//修改推荐的人
	public function fixPerson(){
		$id=$_POST['id'];
    	$fixperson=ModelRecommend::get($id);
    	$fixperson->name=$_POST['personname'];
    	$fixperson->url=$_POST['personurl'];
    	$fixperson->type="推荐的人";
    	$fixperson->save();
	}
	//删除推荐的人
    public function deletePerson(){
    	$id=$_POST['id'];
    	$deleteperson=ModelRecommend::get($id);
    	$deleteperson->delete();
    }
}