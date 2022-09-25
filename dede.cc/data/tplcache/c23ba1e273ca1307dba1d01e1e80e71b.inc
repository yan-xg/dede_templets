<li>
              <h3 class="blogtitle">
                  [field:global name=autoindex runphp= 'yes' ] if(@me <=3) @me="<b>【顶】</b>"; else @me=""; [/field:global]
                  <a href="[field:typedir /]/[field:pubdate function="MyDate('Ymd',@me)"/]/[field:id /].html">[field:title/]</a></h3>
              <span class="blogpic imgscale"><i><a href="[field:typedir /]">[field:typename /]</a></i><a href="[field:typedir /]/[field:pubdate function="MyDate('Ymd',@me)"/]/[field:id /].html" title="[field:title/]"><img src="[field:litpic/]" alt="[field:title/]"></a></span>
              <p class="blogtext"> [field:description /]...</p>
              <p class="bloginfo"><span></span><span>[field:pubdate function="MyDate('Y-m-d',@me)"/]</span><span>【<a href="[field:typedir /]">[field:typename /]</a>】</span></p>
              <a href="[field:typedir /]/[field:pubdate function="MyDate('Ymd',@me)"/]/[field:id /].html" class="viewmore">阅读更多</a>
          </li>