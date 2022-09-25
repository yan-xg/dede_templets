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
              {/dede:arclist}
            </div>

            <section class="boxWrap">
              <div class="box">
                <div class="top">
                  <span><a href="#" title="{dede:field name='typename'/}">更多</a></span>
                  <h2>{dede:field name='typename'/}</h2>
                </div>
                <ul>
                  {dede:arclist titlelen='80' row='1'}
                  <li class="first">
                    <figure class="thumbnail">
                      <a href="[field:typedir /]/[field:pubdate function="MyDate('Ymd',@me)"/]/[field:id /].html" target="_blank" title="[field:title/]">
                        <img src="[field:litpic/]" alt="[field:title/]" /></a>
                    </figure>
                    <div class="info">
                      <h4>
                        <a href="[field:typedir /]/[field:pubdate function="MyDate('Ymd',@me)"/]/[field:id /].html" target="_blank" title="[field:title/]">[field:title/]</a></h4>
                      <p>[field:description /]...</p>
                    </div>
                  </li>
                  {/dede:arclist}

                  {dede:arclist titlelen='80' limit='1,6'}
                  <li class="list">
                    <h4><a href="[field:typedir /]/[field:pubdate function="MyDate('Ymd',@me)"/]/[field:id /].html" target="_blank" title="[field:title/]">[field:title/]</a></h4>
                  </li>
                  {/dede:arclist}
                </ul>
              </div>
            </section>