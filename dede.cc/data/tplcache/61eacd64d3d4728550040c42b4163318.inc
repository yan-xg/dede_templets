<div class="zhuanti whitebg">
          <h2 class="htitle">[field:typename/]</h2>
          <ul>
              {dede:arclist     row='6'     titlelen='80'   typeid='top'      }
              <li> <i class="ztpic"><a href="[field:typedir /]/[field:pubdate function="MyDate('Ymd',@me)"/]/[field:id /].html" target="_blank"><img src="[field:litpic/]"></a></i> <b>[field:title/]</b><a href="" target="_blank" class="readmore"><span>[field:pubdate function="MyDate('Y年m月d日 ',@me)"/]</span></a> </li>
              {/dede:arclist}
          </ul>
      </div>
      {/dede:channel}
    <div class="zhuanti whitebg">
        <h2 class="htitle">新闻</h2>
        <ul>
		{dede:arclist     row='6'     titlelen='80'   typeid='1'      }
		
         
          <li> <i class="ztpic"><a href="[field:typedir /]/[field:pubdate function="MyDate('Ymd',@me)"/]/[field:id /].html" target="_blank"><img src="[field:litpic/]"></a></i> <b>[field:title/]</b><a href="" target="_blank" class="readmore"><span>[field:pubdate function="MyDate('Y年m月d日 ',@me)"/]</span></a> </li>
		{/dede:arclist}
		</ul>
    </div>

      <div class="zhuanti whitebg">
        <h2 class="htitle">生活</h2>
        <ul>
        {dede:arclist     row='6'     titlelen='80'   typeid='2'      }
          <li> <i class="ztpic"><a href="[field:typedir /]/[field:pubdate function="MyDate('Ymd',@me)"/]/[field:id /].html" target="_blank"><img src="[field:litpic/]"></a></i> <b>[field:title/]</b><a href="" target="_blank" class="readmore"><span>[field:pubdate function="MyDate('Y年m月d日 ',@me)"/]</span></a> </li>
		{/dede:arclist}  
		</ul>
      </div>

    <div class="whitebg bloglist">
      <h2 class="htitle">最新</h2>
      <ul>
        <!--单图-->
		
		{dede:arclist typeid='top' orderby='pubdate' titlelen='80' row=20}
		 <li>
          <span class="blogpic imgscale"><i><a href="[field:typedir /]/[field:pubdate function="MyDate('Ymd',@me)"/]/[field:id /].html"></a></i><a href="[field:typedir /]/[field:pubdate function="MyDate('Ymd',@me)"/]/[field:id /].html" title=""><img src="[field:litpic/]" alt=""></a></span>
          <p class="blogtext"><h3 class="blogtitle"><a href="[field:typedir /]/[field:pubdate function="MyDate('Ymd',@me)"/]/[field:id /].html" target="_blank">[field:title/]</a></h3></p>
          <p class="bloginfo"><span>[field:pubdate function="MyDate('Y年m月d日 ',@me)"/]</span></p>
        </li>
   
		{/dede:arclist}
        
      </ul>
    </div>
    <!--bloglist end--> 
    <div class="links whitebg">
        <h2 class="htitle"><span class="sqlink"></span>友情链接</h2>
       
          {dede:flink row='24' type='text' titlelen="24"  typeid="0"}
			[field:link /]
			{/dede:flink}
        
      </div>
  </div>
  <div class="rbox">
    <div class="whitebg paihang">
        <h2 class="htitle">最新发布</h2>
        <ul>
		{dede:arclist typeid='top' orderby='pubdate' titlelen='80' row=4}
            <li><i></i><a href="[field:typedir /]/[field:pubdate function="MyDate('Ymd',@me)"/]/[field:id /].html">[field:title/]</a></li>
		{/dede:arclist}
          </ul>
      </div>
    <div class="whitebg paihang">
      <h2 class="htitle">点击排行</h2>
      <section class="topnews imgscale"><a href="/"><img src="http://demo.mxyhn.xyz:8020/cssthemes6/1.06ZF24/images/4.jpg"><span>6条网页设计配色原则,让你秒变配色高手</span></a></section>
      <ul>
        {dede:arclist typeid='1' orderby='pubdate' titlelen='80' row=8}
            <li><i></i><a href="[field:typedir /]/[field:pubdate function="MyDate('Ymd',@me)"/]/[field:id /].html">[field:title/]</a></li>
		{/dede:arclist}
      </ul>
    </div>
    <div class="whitebg paihang">
        <h2 class="htitle">点击排行</h2>
        <section class="topnews imgscale"><a href="/"><img src="http://demo.mxyhn.xyz:8020/cssthemes6/1.06ZF24/images/4.jpg"><span>6条网页设计配色原则,让你秒变配色高手</span></a></section>
        <ul>
		{dede:arclist typeid='2' orderby='pubdate' titlelen='80' row=8}
            <li><i></i><a href="[field:typedir /]/[field:pubdate function="MyDate('Ymd',@me)"/]/[field:id /].html">[field:title/]</a></li>
		{/dede:arclist}
        </ul>
      </div>
      <div class="whitebg paihang">
        <h2 class="htitle">点击排行</h2>
        <section class="topnews imgscale"><a href="/"><img src="http://demo.mxyhn.xyz:8020/cssthemes6/1.06ZF24/images/4.jpg"><span>6条网页设计配色原则,让你秒变配色高手</span></a></section>
        <ul>
		{dede:arclist typeid='3' orderby='pubdate' titlelen='80' row=8}
            <li><i></i><a href="[field:typedir /]/[field:pubdate function="MyDate('Ymd',@me)"/]/[field:id /].html">[field:title/]</a></li>
		{/dede:arclist}
        </ul>
      </div>
  </div>
</article>
<!--底部开始-->
{dede:include filename="footer.htm"