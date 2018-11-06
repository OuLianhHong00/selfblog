<?php
namespace app\admin\controller;
use \think\Controller;
use app\common\model\SelfInfo as ModelSelfInfo;
use app\common\model\Prize;
use app\common\model\Intership;
header('Content-type:text/json;charset=utf-8');

class Selfinfo extends Controller{
	//个人中心
    public function selfInfo(){
        //实例化模型类
        $selfInfo=new ModelSelfInfo();
        //调用模型方法
        $data=$selfInfo->selectinfo();

        $intership=new Intership();
        $item=$intership->intership();
        $this->assign('item',$item);
        $prize=new Prize();
        $prizeList=$prize->prize();
        $this->assign('prizeList',$prizeList);
        //加载视图
    	return $this->fetch('admin/selfInfo',[
             'name'=>$data->name,
             'jobExper'=>$data->jobExper,
             'address'=>$data->address,
             'politicalface'=>$data->politicalface, 
             'phone'=>$data->phone,
             'QQ'=>$data->QQ,
             'emil'=>$data->emil,
             'weixin'=>$data->weixin,
             'evaluation'=>$data->evaluation,
             'studytime'=>$data->studytime,
             'studyschool'=>$data->studyschool,
             'studeresult'=>$data->studeresult,
             'studycollege'=>$data->studycollege,
             'studyjob'=>$data->studyjob,
             
    	]);
    }
    //修改个人信息的表单
    public function getSelfInfo(){
    	$selfInfo=ModelSelfInfo::get(1);
    	$selfInfo->name=$_POST["name"];
        $selfInfo->jobExper=$_POST["jobExper"];
        $selfInfo->address=$_POST["address"];
        $selfInfo->politicalface=$_POST["political"];
        $selfInfo->phone=$_POST["phone"];
        $selfInfo->emil=$_POST["emil"];
        $selfInfo->QQ=$_POST["qq"];
        $selfInfo->weixin=$_POST["weixin"];
        $selfInfo->studytime=$_POST["studytime"];
        $selfInfo->studyschool=$_POST["studyschool"];
        $selfInfo->studeresult=$_POST["studyresult"];
        $selfInfo->studycollege=$_POST["studycollege"];
        $selfInfo->studyjob=$_POST["studymajor"];
        $selfInfo->evaluation=$_POST["evaluation"];
        $result=$selfInfo->save();
        if($result==true)
        {
        	$this->success('个人信息修改成功','/../admin/Selfinfo/selfInfo');
        }else
        {
        	$this->error("信息修改失败");
        }
    	
    }

    //添加获奖信息
    public function addPrize(){
    	$addPrize=new Prize;
    	$addPrize->prizename=$_POST['prizename'];
    	$addPrize->prizetime=$_POST['prizetime'];
    	$addPrize->save();	
    }
    //修改获奖信息
    public function fixPrize(){
    	$id=$_POST['id'];
    	$fixprize=Prize::get($id);
    	$fixprize->prizename=$_POST['prizename'];
    	$fixprize->prizetime=$_POST['prizetime'];
    	$fixprize->save();

    }
    //删除获奖信息
    public function deletePrize(){
    	$id=$_POST['id'];
    	$deleteprize=Prize::get($id);
    	$deleteprize->delete();
    }
    //添加实习经历的表单
    public function addIntership(){
    	$inter=$_POST['q'];
        $intership=new Intership;
        $intership->company=$inter[0];
        $intership->time=$inter[1];
        $intership->position=$inter[2];
        $intership->description=$inter[3];
        $intership->save();
    }
    //修改实习经历
    public function fixIntership(){
    	$id=$_POST['id'];
    	$fixintership=Intership::get($id);
    	$fixintership->company=$_POST['company'];
    	$fixintership->time=$_POST['time'];
    	$fixintership->position=$_POST['position'];
    	$fixintership->description=$_POST['description'];
    	$fixintership->save();
    }
    //删除实习经历
    public function deleteIntership(){
    	$id=$_POST['id'];
    	$deleteintership=Intership::get($id);
    	$deleteintership->delete();
    }
}
