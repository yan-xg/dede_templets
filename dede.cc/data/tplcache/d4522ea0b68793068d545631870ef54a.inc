<div class="newsitem">
              <div class="newspic">
                  <ul>
                      {dede:arclist titlelen='80' row='2'}
                      <li><a href="[field:typedir /]/[field:pubdate function="MyDate('Ymd',@me)"/]/[field:id /].html"><img src="[field:litpic/]"><span>[field:title/]</span></a></li>
                      {/dede:arclist}
                  </ul>
              </div>
              <ul class="newslist">
                  {dede:arclist titlelen='80' start='2' row='5'}
                  <li><a href="[field:typedir /]/[field:pubdate function="MyDate('Ymd',@me)"/]/[field:id /].html"><img src="[field:litpic/]"><span>[field:title/]</span></a></li>
                  <li>
                      <i></i>
                      <a href="[field:typedir /]/[field:pubdate function="MyDate('Ymd',@me)"/]/[field:id /].html" title="[field:title/]</a>
                      <p> [field:description/]...</p>
                  </li>
                  {/dede:arclist}
              </ul>
          </div>