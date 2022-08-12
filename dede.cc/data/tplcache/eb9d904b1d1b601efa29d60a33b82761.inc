<div class="cmslist">
                <div class="xyti">
                    <h3> <a href="{dede:field name='typedir'/}/" class="mcolor">{dede:field name='typename'/}</a></h3>
                </div>
                <ul>
                    {dede:arclist titlelen='80' limit='1,5'}
                    <li> <i class="fa fa-caret-right"></i> <a href="[field:typedir /]/[field:pubdate function="MyDate('Ymd',@me)"/]/[field:id /].html" title="[field:title/]">[field:title/]</a> </li>
                    {/dede:arclist}
                </ul>
            </div>