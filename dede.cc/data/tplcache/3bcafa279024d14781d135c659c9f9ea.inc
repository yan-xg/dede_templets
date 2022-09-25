<div class="full-post sb br mb">
    <p class="c-title mb"> <span>{dede:field name='typename'/}</span> <a class="more" href="{dede:field name='typedir'/}/" title="更多{dede:field name='typename'/}的文章"> <i class="iconfont icon-more"></i> </a> </p>
    <div class="clearfix">

      {dede:arclist titlelen='80' row='9'}
      <article class="img-list br mt fl jq-remove-mb">
        <div class="clearfix">
          <figure class="figure br fl"> <a class="thumbnail" href="[field:typedir /]/[field:id /].html" title="[field:title/]"> <img class="img-cover br" src="[field:litpic/]" alt="[field:title/]" title="[field:title/]"></a> </figure>
          <div class="content">
            <h2 class="title ellipsis m-multi-ellipsis"> <a href="[field:typedir /]/[field:id /].html" title="[field:title/]">[field:title/]</a></h2>
            <div class="intro hidden-sm">[field:description /]...</div>
            <p class="info clearfix">
              <time class="time fl font-oswald" datetime="[field:pubdate function="MyDate('Y-m-d',@me)"/]" title="[field:pubdate function="MyDate('Y-m-d',@me)"/]"> <i class="iconfont icon-time"></i>2016-01-01</time>
              <span class="hidden-sm-md-lg view fl font-oswald"> <i class="iconfont icon-view"></i>[field:click /]</span> </p>
          </div>
        </div>
      </article>
      {/dede:arclist}
    </div>
  </div>