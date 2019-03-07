<?php
namespace app\admin\controller;
use \think\Controller;
class Login extends Controller{
	//首页
         public function login(){
         	return $this->fetch('admin/login');
         }	
}