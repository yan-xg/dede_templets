<?php
/*
//如果需要登陆，则加上这一句
require_once(dirname(__FILE__).'/config.php');
CheckPurview('a_New,a_AccNew');
*/
header("Content-type: text/html; charset=utf-8");

require_once(dirname(__FILE__).'/../include/common.inc.php');
define('DEDEADMIN', str_replace("\\", '/', dirname(__FILE__) ) );
require_once(DEDEADMIN."/inc/inc_archives_functions.php");

$classid = 5;
//自动获取关键字
$autokey = 1;
//自动获取缩略图
$autolitpic = 1;
//是否生成html，0生成，-1动态
$ismake = -1;

//获取id
$row = $dsql->GetOne("SELECT id FROM `#@__archives` order by id desc limit 1; ");
$arcID = $row['id'];

//获取权重
$row = $dsql->GetOne("SELECT count(id) as cnum FROM `#@__archives`;");
$weight = $row['cnum'];

set_time_limit(0);
$drnum = 0;
$back_url = $_SERVER['HTTP_REFERER'];
$ip = $_SERVER['REMOTE_ADDR'];

//ini_set("memory_limit", "1024M");
$sqlq = "INSERT INTO `#@__archives`(id,typeid,typeid2,sortrank,flag,ismake,channel,arcrank,click,money,title,shorttitle, color,writer,source,litpic,pubdate,senddate,mid,voteid,notpost,description,keywords,filename,dutyadmin,weight) VALUES ";
$sqlinfoq = "INSERT INTO `#@__addonarticle`(aid,typeid,redirecturl,templet,userip,body) Values";
$sqltinyq = "INSERT INTO `#@__arctiny`(id, typeid, typeid2, arcrank, channel, senddate, sortrank, mid) VALUES";

$setIDs = 0;
$send_url_array = array();

$url = 'http://juhe.50cnnet.com/juhe.php?s=zzfcw&n=2';
$data_json = getcontent($url);
$data_array = json_decode($data_json,1);
if($data_array['code']){
	echo "没有信息！";
	exit;
}else{
	foreach($data_array as $k=>$v){
		//unset($result);
		//$result = daoru($v);

		unset($title,$body,$description,$litpic,$keywords,$docUrl,$tags);
		$title = trim($v['title2']);
//		$imghtml = '<p align="center"><img src="/titleimg/'.urlencode($title).'.jpg"></p>';
		$body = $imghtml . $v['content'];
		$body = AnalyseHtmlBody($body,$description,$litpic,$keywords,'htmltext');
//		$content_txt = strip_tags($frow['conternt']);
//		$description = mb_substr($content_txt,0,250,'utf-8');
		$time = time();
		
		if($title && $body){
			$arcID++;
			$pubdate = time();
			$clicknum = rand(2,30);
			$sql = "{$sqlq}('{$arcID}','{$classid}','0','{$pubdate}','','{$ismake}','1','0','{$clicknum}','0','{$title}','', '','admin','未知','{$litpic}','{$pubdate}','{$pubdate}','1','0','0','{$description}','{$keywords}','','1','{$weight}');";
			$dsql->ExecuteNoneQuery($sql);
			$sqlinfo="{$sqlinfoq}('{$arcID}','{$classid}','','','{$ip}','{$body}' );";
			$dsql->ExecuteNoneQuery($sqlinfo);
			$sqltiny="{$sqltinyq}('{$arcID}','{$classid}','0','0','1','{$pubdate}','{$pubdate}','1');";
			$dsql->ExecuteNoneQuery($sqltiny);
			//生成HTML
			if($tags=="" && $keywords!="") $tags = $keywords;  
			InsertTags($tags,$arcID);

			$drnum++;
			$weight++;
			$docUrl = getpageurl($arcID);
			if($docUrl)
				$send_url_array[] = $docUrl;
		}
		$setIDs .= ',' . $frow['aid'];
		
	}
}

if($send_url_array){
	if(sendtobaidu($send_url_array)){
		echo '以下网址推送成功：' . PHP_EOL;
		print_r($send_url_array);
	}
}

echo "本次共导入{$drnum}条信息！";

function getcontent($linkurl){
	global $ua;
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $linkurl);
	//curl_setopt($ch, CURLOPT_PROXY, $proxyip);
//	curl_setopt($ch, CURLOPT_TIMEOUT, 10);
	//curl_setopt($ch, CURLOPT_POST, 1);
	//curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
	curl_setopt($ch, CURLOPT_HEADER, 0);    //是否输出头信息，0为不输出，非零则输出
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);    //设置输出方式, 0为自动输出返回的内容, 1为返回输出的内容,但不自动输出.
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1); // 使用自动跳转
	//curl_setopt($ch, CURLOPT_REFERER, $refer_url);
	curl_setopt($ch, CURLOPT_AUTOREFERER, 1); // 自动设置Referer 
//	curl_setopt($ch, CURLOPT_COOKIEFILE, $cookie_file);		//发送cookie
//	curl_setopt($ch, CURLOPT_COOKIEJAR, $cookie_file);		//保存cookie
	//		curl_setopt($ch, CURLOPT_COOKIE, $cookie);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
	//curl_setopt($ch, CURLOPT_USERAGENT, $ua);
	$output = curl_exec($ch);
	if (curl_errno($ch)) {
		//echo 'Curl error: ' . curl_error($ch);
	}
	//print_r($output);
	curl_close($ch);

	return $output;
}

function getpageurl($aid){
	global $cfg_basehost,$dsql;
	$arcRow = $dsql->GetOne("SELECT * FROM `#@__arctiny` where id='{$aid}'; ");

	$wrul = $cfg_basehost . '/shenghuo/'.date('Ymd',$arcRow['senddate']).'/'.$aid.'.html';
	return $wrul;
}

function sendtobaidu($urls){
	global $cfg_basehost;
	$web_url = str_replace('http://','',$cfg_basehost);
	$web_url = str_replace('https://','',$web_url);
//	$urls = array(
//		'http://www.example.com/1.html',
//		'http://www.example.com/2.html',
//	);
	$api = 'http://data.zz.baidu.com/urls?site='.$web_url.'&token=GQcFJ6lgSTxe25yR';
	$ch = curl_init();
	$options =  array(
		CURLOPT_URL => $api,
		CURLOPT_POST => true,
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_POSTFIELDS => implode("\n", $urls),
		CURLOPT_HTTPHEADER => array('Content-Type: text/plain'),
	);
	curl_setopt_array($ch, $options);
	$result = curl_exec($ch);
	$result_array = json_decode($result,1);
	//print_r($result_array);
	return $result_array['success'];
	//return $result;
}