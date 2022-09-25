<div id="con_one_{dede:global name='itemindex' runphp='yes'} @me=@me+1;{/dede:global}" style="display:none;">
     {dede:arclist titlelen='80' row='10'}
     <div class="post">
      <h2>
       <a href="[field:typedir /]/[field:pubdate function="MyDate('Ymd',@me)"/]/[field:id /].html" title="[field:title/]" target="_blank" rel="bookmark">[field:title/]</a></h2>
      <h6>[field:pubdate function="MyDate('Y-m-d ',@me)"/] | 栏目：<a href='[field:typedir/]'>[field:typename/]</a>| 浏览:[field:click/]<div class="clear"></div></h6>
      <div class="intro">
                      <span id="img">
                        <a href="[field:typedir /]/[field:pubdate function="MyDate('Ymd',@me)"/]/[field:id /].html" title="[field:title/]">
                          <img alt="[field:title/]" src="[field:litpic/]" /></a>
                      </span>
       <p>[field:description /]...</p>
       </a>
      </div>
     </div>

     <div class="col-md-4 col-xs-12  pc_margintop">
      <section>
       <div class="thleftcon" style="height:363px;">
        <div class="thleftbt thwenzhang">
         <span>{dede:global name='typename'