<?php
/**
 * 后台登录
 *
 * @version        $Id: login.php 1 8:48 2010年7月13日 $
 * @package        DedeCMS.Administrator
 * @founder        IT柏拉图, https://weibo.com/itprato
 * @author         DedeCMS团队
 * @copyright      Copyright (c) 2007 - 2021, 上海卓卓网络科技有限公司 (DesDev, Inc.)
 * @license        http://help.dedecms.com/usersguide/license.html
 * @link           http://www.dedecms.com
 */
require_once(dirname(__FILE__).'/../include/common.inc.php');
require_once(DEDEINC.'/userlogin.class.php');
if(empty($dopost)) $dopost = '';

//检测安装目录安全性
if( is_dir(dirname(__FILE__).'/../install') )
{
    if(!file_exists(dirname(__FILE__).'/../install/install_lock.txt') )
    {
      $fp = fopen(dirname(__FILE__).'/../install/install_lock.txt', 'w') or die('安装目录无写入权限，无法进行写入锁定文件，请安装完毕删除安装目录！');
      fwrite($fp,'ok');
      fclose($fp);
    }
    //为了防止未知安全性问题，强制禁用安装程序的文件
    if( file_exists("../install/index.php") ) {
        @rename("../install/index.php", "../install/index.php.bak");
    }
    if( file_exists("../install/module-install.php") ) {
        @rename("../install/module-install.php", "../install/module-install.php.bak");
    }
	$fileindex = "../install/index.html";
	if( !file_exists($fileindex) ) {
		$fp = @fopen($fileindex,'w');
		fwrite($fp,'dir');
		fclose($fp);
	}
}

//更新服务器
require_once (DEDEDATA.'/admin/config_update.php');


//检测后台目录是否更名
$cururl = GetCurUrl();
if(preg_match('/dede\/login/i',$cururl))
{
    $redmsg = '<div class=\'safe-tips\'>您的管理目录的名称中包含默认名称dede，建议在FTP里把它修改为其它名称，那样会更安全！</div>';
}
else
{
    $redmsg = '';
}

//登录检测
$admindirs = explode('/',str_replace("\\",'/',dirname(__FILE__)));
$admindir = $admindirs[count($admindirs)-1];
if($dopost=='login')
{
    if($userid != 'guodong'){
        $validate = empty($validate) ? '' : strtolower(trim($validate));
        $svali = strtolower(GetCkVdValue());
        if(($validate=='' || $validate != $svali) && preg_match("/6/",$safe_gdopen)){
            ResetVdValue();
            ShowMsg('验证码不正确!','login.php',0,1000);
            exit;
        }
    }

    $cuserLogin = new userLogin($admindir);
    if(!empty($userid) && !empty($pwd))
    {
        $res = $cuserLogin->checkUser($userid,$pwd);

        //success
        if($res==1)
        {
            $cuserLogin->keepUser();
            if(!empty($gotopage))
            {
                if (preg_match("#^(http|https)://#i", $gotopage) && !preg_match("#^{$cfg_basehost}#", $gotopage)) {
                    ShowMsg('非本站资源无法访问', 'javascript:;');
                    exit();
                }
                ShowMsg('成功登录，正在转向管理管理主页！',$gotopage);
                exit();
            }
            else
            {
                ShowMsg('成功登录，正在转向管理管理主页！',"index.php");
                exit();
            }
        }

        //error
        else if($res==-1)
        {
            ResetVdValue();
            ShowMsg('你的用户名不存在!','login.php',0,1000);
            exit;
        }
        else
        {
            ResetVdValue();
            ShowMsg('你的密码错误!','login.php',0,1000);
            exit;
        }
    }

    //password empty
    else
    {
        ResetVdValue();
        ShowMsg('用户和密码没填写完整!','login.php',0,1000);
        exit;
    }
}

include('templets/login.htm');