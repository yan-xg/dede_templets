<div class="zhuanti whitebg">
          <h2 class="htitle">{dede:field name='typename'/}</h2>
          <ul>
              {dede:arclist     row='6'     titlelen='80'}
              <li> <i class="ztpic"><a href="[field:typedir /]/[field:pubdate function="MyDate('Ymd',@me)"/]/[field:id /].html" target="_blank"><img src="[field:litpic/]"></a></i> <b>[field:title/]</b><a href="" target="_blank" class="readmore"><span>[field:pubdate function="MyDate('Y年m月d日 ',@me)"/]</span></a> </li>
              {/dede:arclist}
          </ul>
      </div>