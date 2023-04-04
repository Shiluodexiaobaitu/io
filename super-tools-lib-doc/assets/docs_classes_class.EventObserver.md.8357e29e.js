import{_ as e,c as t,o as a,N as s}from"./chunks/framework.a618ffea.js";const b=JSON.parse('{"title":"Class: EventObserver","description":"","frontmatter":{},"headers":[],"relativePath":"docs/classes/class.EventObserver.md"}'),o={name:"docs/classes/class.EventObserver.md"},r=s(`<p><a href="./../README.html">super-tools-lib - v1.61.0</a> / <a href="./../modules.html">Modules</a> / <a href="./../modules/class.html">class</a> / EventObserver</p><h1 id="class-eventobserver" tabindex="-1">Class: EventObserver <a class="header-anchor" href="#class-eventobserver" aria-label="Permalink to &quot;Class: EventObserver&quot;">​</a></h1><p><a href="./../modules/class.html">class</a>.EventObserver</p><p>自定义事件观察者</p><p><strong><code>Since</code></strong></p><p>1.62.0</p><p><strong><code>Example</code></strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">EventObserver</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">super-tools-lib</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> _eventPool </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">EventObserver</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> click </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">_eventPool</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">myclick</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> click)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 触发已经注册好的myclick事件</span></span>
<span class="line"><span style="color:#A6ACCD;">_eventPool</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">spread</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">myclick</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h3><ul><li><a href="./class.EventObserver.html#constructor">constructor</a></li></ul><h3 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h3><ul><li><a href="./class.EventObserver.html#_listener">_listener</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h3><ul><li><a href="./class.EventObserver.html#_off">_off</a></li><li><a href="./class.EventObserver.html#_on">_on</a></li><li><a href="./class.EventObserver.html#_spread">_spread</a></li><li><a href="./class.EventObserver.html#off">off</a></li><li><a href="./class.EventObserver.html#on">on</a></li><li><a href="./class.EventObserver.html#spread">spread</a></li></ul><h2 id="constructors-1" tabindex="-1">Constructors <a class="header-anchor" href="#constructors-1" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h3><p>• <strong>new EventObserver</strong>()</p><h2 id="properties-1" tabindex="-1">Properties <a class="header-anchor" href="#properties-1" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="listener" tabindex="-1">_listener <a class="header-anchor" href="#listener" aria-label="Permalink to &quot;\\_listener&quot;">​</a></h3><p>• <code>Private</code> <strong>_listener</strong>: <code>Record</code>&lt;<code>string</code>, <code>any</code>[]&gt; = <code>{}</code></p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="off" tabindex="-1">_off <a class="header-anchor" href="#off" aria-label="Permalink to &quot;\\_off&quot;">​</a></h3><p>▸ <strong>_off</strong>(<code>type</code>, <code>cb</code>): <code>void</code></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>cb</code></td><td style="text-align:left;">(...<code>rest</code>: <code>any</code>) =&gt; <code>void</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><hr><h3 id="on" tabindex="-1">_on <a class="header-anchor" href="#on" aria-label="Permalink to &quot;\\_on&quot;">​</a></h3><p>▸ <strong>_on</strong>(<code>type</code>, <code>cb</code>): <code>void</code></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>cb</code></td><td style="text-align:left;">(...<code>rest</code>: <code>any</code>[]) =&gt; <code>void</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><hr><h3 id="spread" tabindex="-1">_spread <a class="header-anchor" href="#spread" aria-label="Permalink to &quot;\\_spread&quot;">​</a></h3><p>▸ <strong>_spread</strong>(<code>type</code>, <code>...rest</code>): <code>void</code></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>...rest</code></td><td style="text-align:left;"><code>any</code>[]</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><hr><h3 id="off-1" tabindex="-1">off <a class="header-anchor" href="#off-1" aria-label="Permalink to &quot;off&quot;">​</a></h3><p>▸ <strong>off</strong>(<code>type</code>, <code>cb</code>): <code>void</code></p><p>移除事件</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">事件名</td></tr><tr><td style="text-align:left;"><code>cb</code></td><td style="text-align:left;">(...<code>rest</code>: <code>any</code>[]) =&gt; <code>void</code></td><td style="text-align:left;">对应监听时的回调函数</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><hr><h3 id="on-1" tabindex="-1">on <a class="header-anchor" href="#on-1" aria-label="Permalink to &quot;on&quot;">​</a></h3><p>▸ <strong>on</strong>(<code>type</code>, <code>cb</code>): <code>void</code></p><p>监听事件</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">事件名</td></tr><tr><td style="text-align:left;"><code>cb</code></td><td style="text-align:left;">(...<code>rest</code>: <code>any</code>[]) =&gt; <code>void</code></td><td style="text-align:left;">回调函数</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><hr><h3 id="spread-1" tabindex="-1">spread <a class="header-anchor" href="#spread-1" aria-label="Permalink to &quot;spread&quot;">​</a></h3><p>▸ <strong>spread</strong>(<code>type</code>, <code>...rest</code>): <code>void</code></p><p>触发事件</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">事件名</td></tr><tr><td style="text-align:left;"><code>...rest</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;">传递的参数</td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p>`,66),l=[r];function n(d,c,i,p,h,y){return a(),t("div",null,l)}const u=e(o,[["render",n]]);export{b as __pageData,u as default};
