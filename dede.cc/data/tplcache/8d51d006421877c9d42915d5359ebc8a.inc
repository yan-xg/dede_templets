<div class="cmslist">
                <div class="cmsbb">
                <h3>{dede:field name='typename'/}</h3>
                <a href="{dede:field name='typedir'/}/" class="more">更多</a>
            </div>

                <ul>
                    {dede:arclist titlelen='80' limit='1,5'}
                    <li><span>[field:pubdate function="MyDate('m-d',@me)"/]</span><a  href="[field:typedir /]/[field:pubdate function="MyDate('Ymd',@me)"/]/[field:id /].html" title="[field:title/]">[field:title/]</a></li>
                    {/dede:arclist}
                </ul>
            </div>