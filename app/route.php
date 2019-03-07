<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

return [
    '__pattern__' => [
        'name' => '\w+',
    ],
    '[hello]'     => [
        ':id'   => ['index/hello', ['method' => 'get'], ['id' => '\d+']],
        ':name' => ['index/hello', ['method' => 'post']],
    ],
    'url_route_on'=>true,
    'url_route_must'=>false,
    'login'=>'admin/Login/login',
    'admin/self'=>'admin/Admin/admin',
    'selfinfo'=>'admin/Selfinfo/selfInfo',
    'blog'=>'admin/Blog/blog',
    'recommend'=>'admin/Recommend/recommend',
    'admin/article'=>'admin/Article/article',
    'admin/fixArticle'=>'admin/Blog/fixArticle',
    'index/user'=>'index/index/index',
    'index/self'=>'index/Index/selfInfo',
    'index/mood'=>'index/Index/mood',
    'index/technology'=>'index/Index/technology',
    'index/proposal'=>'index/Proposal/proposal',
    'index/article'=>'index/Article/article',

];
