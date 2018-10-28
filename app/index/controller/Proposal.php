<?php
namespace app\index\controller;
use \think\Controller;
use app\common\model\Proposal as ModelProposal;
class Proposal extends Controller
{
    public function proposal(){
        $proposal=new ModelProposal(); 
        $list=$proposal->suggest();
        $this->assign('proposalList',$list);
         return $this->fetch('index/proposal');
         }
    public function saveProposal(){
        $proposal=new ModelProposal();
        $text=$_POST["text"];
        $proposal->text=$text;
        $proposal->save();
    }
    public function cancelProposal(){
        $id=$_POST["id"];
        $proposal=ModelProposal::get($id);
        $proposal->delete();
    }
}
