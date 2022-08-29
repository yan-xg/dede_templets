<?php
if(!isset($GLOBALS['_vars'])) $GLOBALS['_vars'] = array(); 
$fields = array();
?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=<?php echo $cfg_soft_lang; ?>">
	<title>发布软件</title>
	<style type="text/css">
		<!--
		body {
			background-image: url(images/allbg.gif);
		}
		-->
	</style>
	<link href="css/base.css" rel="stylesheet" type="text/css">
	<script type="text/javascript" src="js/calendar/calendar.js"></script>
</head>
<body>
<table width="98%"  border="0" align="center" cellpadding="1" cellspacing="1" bgcolor="#cfcfcf">
	<tr>
		<td width="100%" height="24" colspan="2" background="images/tbg.gif" style="padding-left:10px;">
			<strong>发布软件</strong>
			<div style="float:right;padding-right:10px">
				<span>未发布：<?php echo $fields['unpublished']; ?></span>
				<span>已发布：<?php echo $fields['published']; ?></span>
			</div>
		</td>
	</tr>
	<tr>
		<td height="187" colspan="2" align="center" bgcolor="#FFFFFF">
			<form name="form1" method="post" action="release_soft.php">
				<input type="hidden" name="dopost" value="release" />
				<table width="100%" border="0" cellpadding="3" cellspacing="1" style="text-align:left;">
					<tr bgcolor="#FFFFFF">
						<td height="24" width="20">发布数量：</td>
						<td>
							<input name="num" type="text" id="num" size="20" value="10" />
						</td>
					</tr>
					<tr bgcolor="#FFFFFF">
						<td height="24" width="20">发布时间：</td>
						<td width="20"><?php
          $nowtime = GetDateTimeMk(time());
          echo "<input name=\"pubdate\" value=\"$nowtime\" type=\"text\" id=\"pubdate\" style=\"width:200;\" >";
							?>

							<script language="javascript" type="text/javascript">
								Calendar.setup({
									inputField     :    "pubdate",
									ifFormat       :    "%Y-%m-%d %H:%M:%S",
									showsTime      :    true,
									timeFormat     :    "24"
								});
							</script>

					<tr bgcolor="#FFFFFF">
						<td height="40" width='600' colspan="2" align="center">
							<input type="submit" name="Submit1" class='coolbg np' value="发布"  />
						</td>
					</tr>
				</table>
			</form>
		</td>
	</tr>
</table>
</body>
</html>