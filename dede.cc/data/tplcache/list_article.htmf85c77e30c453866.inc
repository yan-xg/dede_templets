<?php
$z[0]=Array("field","",72,91);
$z[0][4]=array();
$z[0][4]['name']="title";
$z[1]=Array("global","",94,120);
$z[1][4]=array();
$z[1][4]['name']="cfg_webname";
$z[2]=Array("field","",163,185);
$z[2][4]=array();
$z[2][4]['name']="keywords";
$z[3]=Array("field","",227,278);
$z[3][4]=array();
$z[3][4]['name']="description";
$z[3][4]['function']="html2text(@me)";
$z[4]=Array("include","",286,321);
$z[4][4]=array();
$z[4][4]['filename']="meta.htm";
$z[5]=Array("include","",426,463);
$z[5][4]=array();
$z[5][4]['filename']="header.htm";
$z[6]=Array("field","",703,724);
$z[6][4]=array();
$z[6][4]['name']="typedir";
$z[7]=Array("field","",727,749);
$z[7][4]=array();
$z[7][4]['name']="typename";
$z[8]=Array("list","\r\n        <li>\r\n          <h3 class=\"blogtitle\">\r\n            <a href=\"[field:typedir /]/[field:pubdate function=\"MyDate('Ymd',@me)\"/]/[field:id /].html\">[field:title/]</a></h3>\r\n          <span class=\"blogpic imgscale\"><i><a href=\"[field:typedir /]\">[field:typename /]</a></i><a href=\"[field:typedir /]/[field:pubdate function=\"MyDate('Ymd',@me)\"/]/[field:id /].html\" title=\"[field:title/]\"><img src=\"[field:litpic/]\" alt=\"[field:title/]\"></a></span>\r\n          <p class=\"blogtext\"> [field:description /]...</p>\r\n          <p class=\"bloginfo\"><span></span><span>[field:pubdate function=\"MyDate('Y-m-d',@me)\"/]</span><span>【<a href=\"[field:typedir /]\">[field:typename /]</a>】</span></p>\r\n          <a href=\"[field:typedir /]/[field:pubdate function=\"MyDate('Ymd',@me)\"/]/[field:id /].html\" class=\"viewmore\">阅读更多</a>\r\n        </li>\r\n        ",788,1677);
$z[8][4]=array();
$z[8][4]['pagesize']="20";
$z[9]=Array("pagelist","",1796,1861);
$z[9][4]=array();
$z[9][4]['listitem']="info,index,end,pre,next,pageno,option";
$z[10]=Array("tag","\r\n                <a href=\"/tags/[field:tag /]/\" class=\"tags[field:id runphp='yes']@me = rand(0,7);[/field:id] tagc[field:highlight /]\">[field:tag /]</a>\r\n                ",2116,2330);
$z[10][4]=array();
$z[10][4]['row']="40";
$z[10][4]['sort']="total";
$z[11]=Array("arclist","\r\n                <li><i></i><a href=\"[field:typedir /]/[field:pubdate function=\"MyDate('Ymd',@me)\"/]/[field:id /].html\" title=\"[field:title/]\">[field:title/]</a></li>\r\n                ",2492,2757);
$z[11][4]=array();
$z[11][4]['row']="8";
$z[11][4]['titlelen']="80";
$z[11][4]['typeid']="top";
$z[11][4]['orderby']="click";
$z[12]=Array("arclist","\r\n            <section class=\"topnews imgscale\"><a href=\"[field:typedir /]/[field:pubdate function=\"MyDate('Ymd',@me)\"/]/[field:id /].html\"><img src=\"[field:litpic /]\"><span>[field:title /]</span></a></section>\r\n            ",2895,3196);
$z[12][4]=array();
$z[12][4]['titlelen']="80";
$z[12][4]['flag']="c,p";
$z[12][4]['typeid']="top";
$z[12][4]['limit']="1";
$z[13]=Array("arclist","\r\n                <li><a href=\"[field:typedir /]/[field:pubdate function=\"MyDate('Ymd',@me)\"/]/[field:id /].html\" title=\"[field:title /]\"><i><img src=\"[field:litpic /]\"></i><p>[field:title /]</p></a></li>\r\n                ",3234,3542);
$z[13][4]=array();
$z[13][4]['typeid']="top";
$z[13][4]['orderby']="pubdate";
$z[13][4]['titlelen']="80";
$z[13][4]['limit']="0,8";
$z[14]=Array("include","",3603,3640);
$z[14][4]=array();
$z[14][4]['filename']="footer.htm";

?>