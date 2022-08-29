<?php
/**
 * 发布管理
 *
 * @version        $Id: feedback_main.php 1 19:09 2010年7月12日 $
 * @package        DedeCMS.Administrator
 * @founder        IT柏拉图, https://weibo.com/itprato
 * @author         DedeCMS团队
 * @copyright      Copyright (c) 2007 - 2021, 上海卓卓网络科技有限公司 (DesDev, Inc.)
 * @license        http://help.dedecms.com/usersguide/license.html
 * @link           http://www.dedecms.com
 */
require_once(dirname(__FILE__)."/config.php");

//权限检查
CheckPurview('sys_Soft');
$ENV_GOBACK_URL = 'release_soft.php';
if(empty($dopost)) $dopost = "";

$channelid = 3;
if($dopost=='release')
{
    if(!is_numeric($num) || $num < 0){
        ShowMsg("数量错误！",$ENV_GOBACK_URL);
        return false;
    }

    $pubdate = GetMkTime($pubdate);
    $senddate = time();
    $sortrank = AddDay($pubdate,0);

    $count = $dsql->GetOne("Select count(id) as count From  `#@__archives` where channel='$channelid' and arcrank='-1' limit $num");
    if($count['count'] <= 0){
        ShowMsg("没有未发布的软件了！",$ENV_GOBACK_URL);
        return false;
    }

    $query = "Select id,title From  `#@__archives` where channel='$channelid' and arcrank='-1' order by id asc limit $num";
    $dsql->SetQuery($query);
    $dsql->Execute();
    while($sinfo = $dsql->GetArray()) {
        $inQuery = "UPDATE `#@__archives` SET sortrank='$sortrank', arcrank='0', senddate='$senddate', pubdate='$pubdate' WHERE id={$sinfo['id']}; ";
        $inQuery2 = "update `#@__arctiny` set `arcrank` = 0 WHERE id={$sinfo['id']}; ";
        if($dsql->ExecuteNoneQuery($inQuery) && $dsql->ExecuteNoneQuery($inQuery2)){
            echo $sinfo['id'].'--'.$sinfo['title'].'-已发布 <br />';
        }else{
            echo $sinfo['id'].'--'.$sinfo['title'].'-发布失败 <br />';
        }
    }

    ShowMsg("发布完成！",$ENV_GOBACK_URL);
    return true;
}

$dsql->SetQuery("Select arcrank,count(id) as num From  `#@__archives` where channel='$channelid' group by arcrank");
$dsql->Execute();
$unpublished=0;
while($row = $dsql->GetArray()) {
    if($row['arcrank']== '-1') $unpublished = $row['num'];
    if($row['arcrank']== '0')  $published   = $row['num'];
}
include DedeInclude('templets/release_soft.htm');