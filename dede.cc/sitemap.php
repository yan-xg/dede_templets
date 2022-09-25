<?php
/*
适用于dedecms系统，自动sitemap
*/

include("data/common.inc.php");

/*设置*/
$moshi = 'xml';   //xml 或者 html ，txt
$cache = 1;  //是否开启缓存
$cachetime = 0;  //是分钟
$cachefile = "sitemapcache1";  //如果多个地图模式，每个文件要改下这个文件名
//end

if($cache && file_exists($cachefile.$moshi) && (filemtime($cachefile.$moshi)+$cachetime*60)>time()){
    if($moshi=='xml'){
        header('Content-type:text/xml');
        echo file_get_contents($cachefile.$moshi);
    }elseif($moshi=='txt'){
        header("content-type: text/plain; charset=utf-8");
        echo file_get_contents($cachefile.$moshi);
    }else{
        include($cachefile.$moshi);
    }
    exit;
}

$pdo =  null;
try{
    $pdo = new PDO("mysql:dbname=".$cfg_dbname.";host=".$cfg_dbhost,$cfg_dbuser,$cfg_dbpwd);
}catch(Exception $e){
    echo $e->getMessage();
}


$host = "http://".$_SERVER['HTTP_HOST'];
$sql = "SELECT t.id,t.typename,t.typedir,t.namerule FROM dede_arctype t";
$stmt = $pdo->prepare($sql);
$stmt->execute();
$cat = $urlrule = array();
while ($row=$stmt->fetch()){
    $typedir[$row['id']] = $row['typedir'];
    $namerule[$row['id']] = $row['namerule'];
}
$sql = "SELECT a.id,a.pubdate,a.typeid,a.title FROM dede_archives a  order by a.id desc limit 500";
$stmt = $pdo->prepare($sql);
$stmt->execute();
if($moshi=='xml'){

    header('Content-type:text/xml');
    $xml = "<?xml version='1.0' encoding='UTF-8'?><urlset>";
    $xml .="<url>
 <loc>http://www.yqytdz.com/</loc>
 <priority>1.0</priority>
 <changefreq>always</changefreq>
</url>
<url>
 <loc>http://www.yqytdz.com/guonei/</loc>
 <priority>1.0</priority>
 <changefreq>always</changefreq>
</url>
<url>
 <loc>http://www.yqytdz.com/keji/</loc>
 <priority>1.0</priority>
 <changefreq>always</changefreq>
</url>
<url>
 <loc>http://www.yqytdz.com/shenghuo/</loc>
 <priority>1.0</priority>
 <changefreq>always</changefreq>
</url>";
    while ($row=$stmt->fetch())
    {
        $url = $namerule[$row['typeid']];
        $_typedir = str_replace("{cmspath}/","",$typedir[$row['typeid']]);
        //{typedir}/{Y}/{M}{D}/{aid}.html
        //$url .= "/".date("Y/md",$row['pubdate'])."/".$row['id'].".html";
        $url = $host.$url;
        $url = str_replace("{typedir}",$_typedir,$url);
        $url = str_replace("{Y}",date("Y",$row['pubdate']),$url);
        $url = str_replace("{M}",date("m",$row['pubdate']),$url);
        $url = str_replace("{D}",date("d",$row['pubdate']),$url);
        $url = str_replace("{aid}",$row['id'],$url);
        $xml .="<url>
        <loc>".$url."</loc>
        <lastmod>".date("Y-m-d",$row['pubdate'])."</lastmod>
        <changefreq>always</changefreq>
        <priority>1.0</priority>
        </url>";
    }

    $xml .= "</urlset>";
    echo $xml;
}elseif($moshi=='txt'){

    $xml = "";
    header("content-type: text/plain; charset=utf-8");
    while ($row=$stmt->fetch())
    {
        $url = $namerule[$row['typeid']];
        $_typedir = str_replace("{cmspath}/","",$typedir[$row['typeid']]);
        //{typedir}/{Y}/{M}{D}/{aid}.html
        //$url .= "/".date("Y/md",$row['pubdate'])."/".$row['id'].".html";
        $url = $host.$url;
        $url = str_replace("{typedir}",$_typedir,$url);
        $url = str_replace("{Y}",date("Y",$row['pubdate']),$url);
        $url = str_replace("{M}",date("m",$row['pubdate']),$url);
        $url = str_replace("{D}",date("d",$row['pubdate']),$url);
        $url = str_replace("{aid}",$row['id'],$url);
        $xml .=$url."\n";
    }
    $xml .= "";
    echo $xml;
}else{

    $xml = "<ul>";
    while ($row=$stmt->fetch())
    {
        $url = $namerule[$row['typeid']];
        $_typedir = str_replace("{cmspath}/","",$typedir[$row['typeid']]);
        //{typedir}/{Y}/{M}{D}/{aid}.html
        //$url .= "/".date("Y/md",$row['pubdate'])."/".$row['id'].".html";
        $url = $host."/".$url;
        $url = str_replace("{typedir}",$_typedir,$url);
        $url = str_replace("{Y}",date("Y",$row['pubdate']),$url);
        $url = str_replace("{M}",date("m",$row['pubdate']),$url);

        $url = str_replace("{D}",date("d",$row['pubdate']),$url);

        $url = str_replace("{aid}",$row['id'],$url);

        $xml .="<li><a href='".$url."'>".$row['title']."</a> &nbsp; &nbsp;".date("Y-m-d",$row['pubdate'])."</li>";

    }

    $xml .= "</ul>";

    echo $xml;

}

if($cache){

    file_put_contents($cachefile.$moshi,$xml);

}
