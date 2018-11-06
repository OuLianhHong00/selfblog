<?php
namespace app\index\controller;
use \think\Controller;
use app\common\model\Blog;
use app\common\model\Recommend;
use app\common\model\SelfInfo;
use app\common\model\Intership;
use app\common\model\Prize;
class Index extends Controller
{
    //首页
    public function index()
    {
        $blog=new Blog();
        $list=$blog->content();
        $page=$list->render();
        $this->assign('list',$list);
        $this->assign('page',$page);
        $recommend=new Recommend();
        $recommendPeople=$recommend->recommendPeople();
        $this->assign('recommendPeople',$recommendPeople);
        $recommendBook=$recommend->recommendBook();
        $this->assign('recommendBook',$recommendBook);
        $recommendMusic=$recommend->recommendMusic();
        $this->assign('recommendMusic',$recommendMusic);
        return $this->fetch('index');
    }
    //个人简历
    public function selfInfo(){
        //实例化模型类
        $selfInfo=new SelfInfo();
        //调用模型方法
        $data=$selfInfo->selectinfo();
        $intership=new Intership();
        $item=$intership->intership();
        $this->assign('item',$item);
        $prize=new Prize();
        $prizeList=$prize->prize();
        $this->assign('prizeList',$prizeList);
        //加载视图
    	return $this->fetch('selfInfo',[
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
    //心情随笔
    public function mood(){
        $blog=new Blog();
        $moodList=$blog->mood();
        $this->assign('moodList',$moodList);
        $page=$moodList->render();
        $this->assign('page',$page);
        return $this->fetch('mood');
    }
    //技术分享
    public function technology(){
        $blog=new Blog();
        $technologyList=$blog->technology();
        $this->assign('technologyList',$technologyList);
        $page=$technologyList->render();
        $this->assign('page',$page);
        return $this->fetch('technology');
    }
}
