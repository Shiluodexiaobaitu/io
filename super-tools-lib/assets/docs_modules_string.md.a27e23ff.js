import{_ as t,c as s,o as a,N as e}from"./chunks/framework.06387d3b.js";const F=JSON.parse('{"title":"Module: string","description":"","frontmatter":{},"headers":[],"relativePath":"docs/modules/string.md"}'),l={name:"docs/modules/string.md"},o=e(`<p><a href="./../README.html">super-tools-lib - v1.74.0</a> / <a href="./../modules.html">Modules</a> / string</p><h1 id="module-string" tabindex="-1">Module: string <a class="header-anchor" href="#module-string" aria-label="Permalink to &quot;Module: string&quot;">​</a></h1><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h3><ul><li><a href="./string.html#decode">decode</a></li><li><a href="./string.html#gettextwidth">getTextWidth</a></li><li><a href="./string.html#initialtocapitali">initialToCapitali</a></li><li><a href="./string.html#lettertoemoji">letterToEmoji</a></li><li><a href="./string.html#removespaces">removeSpaces</a></li><li><a href="./string.html#repeat">repeat</a></li><li><a href="./string.html#replacetext">replaceText</a></li><li><a href="./string.html#strinversion">strInversion</a></li><li><a href="./string.html#tofullhexcolor">toFullHexColor</a></li><li><a href="./string.html#toline">toLine</a></li><li><a href="./string.html#topascalcase">toPascalCase</a></li><li><a href="./string.html#transformat">transFormat</a></li><li><a href="./string.html#trim">trim</a></li></ul><h2 id="functions-1" tabindex="-1">Functions <a class="header-anchor" href="#functions-1" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="decode" tabindex="-1">decode <a class="header-anchor" href="#decode" aria-label="Permalink to &quot;decode&quot;">​</a></h3><p>▸ <strong>decode</strong>(<code>token</code>): <code>string</code></p><p>解码JWT令牌</p><p><strong><code>Since</code></strong></p><p>1.62.0</p><p><strong><code>Example</code></strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">decode</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">super-tools-lib</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">decode</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.</span></span>
<span class="line"><span style="color:#C3E88D;">   eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0I</span></span>
<span class="line"><span style="color:#C3E88D;">   joxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c</span></span>
<span class="line"><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;{&quot;sub&quot;:&quot;1234567890&quot;,&quot;name&quot;:&quot;John Doe&quot;,&quot;iat&quot;:1516239022}&#39;</span></span>
<span class="line"></span></code></pre></div><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>token</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">字符串</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><p>返回解析后的数据</p><hr><h3 id="gettextwidth" tabindex="-1">getTextWidth <a class="header-anchor" href="#gettextwidth" aria-label="Permalink to &quot;getTextWidth&quot;">​</a></h3><p>▸ <strong>getTextWidth</strong>(<code>text</code>, <code>font</code>): <code>number</code></p><p>计算文字宽度</p><p><strong><code>Since</code></strong></p><p>1.62.0</p><p><strong><code>Example</code></strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getTextWidth</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">super-tools-lib</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getTextWidth</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">哈哈哈哈</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">14px sans-serif</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 56</span></span>
<span class="line"></span></code></pre></div><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">文字</td></tr><tr><td style="text-align:left;"><code>font</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;14px sans-serif&#39; 字号 字体</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>number</code></p><hr><h3 id="initialtocapitali" tabindex="-1">initialToCapitali <a class="header-anchor" href="#initialtocapitali" aria-label="Permalink to &quot;initialToCapitali&quot;">​</a></h3><p>▸ <strong>initialToCapitali</strong>(<code>name</code>): <code>string</code></p><p>字符串首位是字母转大写</p><p><strong><code>Since</code></strong></p><p>1.62.0</p><p><strong><code>Example</code></strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">values</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">super-tools-lib</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">values</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// [1, 2]</span></span>
<span class="line"></span></code></pre></div><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">字符串</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><p>返回首字母转换成大写的字符串</p><hr><h3 id="lettertoemoji" tabindex="-1">letterToEmoji <a class="header-anchor" href="#lettertoemoji" aria-label="Permalink to &quot;letterToEmoji&quot;">​</a></h3><p>▸ <strong>letterToEmoji</strong>(<code>c</code>): <code>string</code></p><p>转换字母以关联表情符号</p><p><strong><code>Since</code></strong></p><p>1.62.0</p><p><strong><code>Example</code></strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">letterToEmoji</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">super-tools-lib</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">letterToEmoji</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;🇦&#39;</span></span>
<span class="line"></span></code></pre></div><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>c</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">要操作的字符串</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><p>返回和字母关联的表情符号</p><hr><h3 id="removespaces" tabindex="-1">removeSpaces <a class="header-anchor" href="#removespaces" aria-label="Permalink to &quot;removeSpaces&quot;">​</a></h3><p>▸ <strong>removeSpaces</strong>(<code>str</code>): <code>string</code></p><p>删除字符串中的空格</p><p><strong><code>Since</code></strong></p><p>1.62.0</p><p><strong><code>Example</code></strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">removeSpaces</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">super-tools-lib</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">removeSpaces</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">s s s k </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// sssk</span></span>
<span class="line"></span></code></pre></div><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>str</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">要操作的字符串</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><p>返回去除空格后的新字符串</p><hr><h3 id="repeat" tabindex="-1">repeat <a class="header-anchor" href="#repeat" aria-label="Permalink to &quot;repeat&quot;">​</a></h3><p>▸ <strong>repeat</strong>(<code>str</code>, <code>n</code>): <code>string</code></p><p>传入字符串，和重复次数，返回结果字符串</p><p><strong><code>Since</code></strong></p><p>1.62.0</p><p><strong><code>Example</code></strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">repeat</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">super-tools-lib</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">repeat</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// abcabcabc</span></span>
<span class="line"></span></code></pre></div><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>str</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">字符串</td></tr><tr><td style="text-align:left;"><code>n</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">重复次数</td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><p>返回字符串*重复次数的字符串</p><hr><h3 id="replacetext" tabindex="-1">replaceText <a class="header-anchor" href="#replacetext" aria-label="Permalink to &quot;replaceText&quot;">​</a></h3><p>▸ <strong>replaceText</strong>(<code>str</code>, <code>range</code>, <code>mask</code>): <code>string</code></p><p>替换指定位置字符串内容</p><p><strong><code>Since</code></strong></p><p>1.62.0</p><p><strong><code>Example</code></strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">replaceText</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">super-tools-lib</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">replaceText</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">17778780909</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;177****0909&#39;</span></span>
<span class="line"></span></code></pre></div><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>str</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">要操作的字符串</td></tr><tr><td style="text-align:left;"><code>range</code></td><td style="text-align:left;">[<code>number</code>, <code>number</code>] | [<code>number</code>]</td><td style="text-align:left;">替换字符串的区间</td></tr><tr><td style="text-align:left;"><code>mask</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">替换内容</td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><p>返回替换后的新字符串</p><hr><h3 id="strinversion" tabindex="-1">strInversion <a class="header-anchor" href="#strinversion" aria-label="Permalink to &quot;strInversion&quot;">​</a></h3><p>▸ <strong>strInversion</strong>(<code>str</code>): <code>string</code></p><p>反转字符串</p><p><strong><code>Since</code></strong></p><p>1.62.0</p><p><strong><code>Example</code></strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">strInversion</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">super-tools-lib</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">strInversion</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// cba</span></span>
<span class="line"></span></code></pre></div><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>str</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">字符串</td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><p>返回反转后的字符串</p><hr><h3 id="tofullhexcolor" tabindex="-1">toFullHexColor <a class="header-anchor" href="#tofullhexcolor" aria-label="Permalink to &quot;toFullHexColor&quot;">​</a></h3><p>▸ <strong>toFullHexColor</strong>(<code>color</code>): <code>string</code></p><p>将3位数颜色转换为6位数颜色</p><p><strong><code>Since</code></strong></p><p>1.62.0</p><p><strong><code>Example</code></strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">toFullHexColor</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">super-tools-lib</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">toFullHexColor</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#FFF</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// #FFFFFF</span></span>
<span class="line"></span></code></pre></div><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>color</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">颜色值 #FFF</td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><p>返回6位数的颜色值 例如：#FFFFFF</p><hr><h3 id="toline" tabindex="-1">toLine <a class="header-anchor" href="#toline" aria-label="Permalink to &quot;toLine&quot;">​</a></h3><p>▸ <strong>toLine</strong>(<code>val</code>, <code>isLowercase?</code>): <code>string</code></p><p>驼峰转下划线</p><p><strong><code>Since</code></strong></p><p>1.62.0</p><p><strong><code>Example</code></strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">toLine</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">super-tools-lib</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">toLine</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">contBeginDate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;CONT_BEGIN_DATE&#39;</span></span>
<span class="line"></span></code></pre></div><h4 id="parameters-9" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-9" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>val</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">要操作的字符串</td></tr><tr><td style="text-align:left;"><code>isLowercase</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>true</code></td><td style="text-align:left;">是否转换为小写字母 默认值 true</td></tr></tbody></table><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><p>返回转换后的字符串</p><hr><h3 id="topascalcase" tabindex="-1">toPascalCase <a class="header-anchor" href="#topascalcase" aria-label="Permalink to &quot;toPascalCase&quot;">​</a></h3><p>▸ <strong>toPascalCase</strong>(<code>str</code>): <code>string</code></p><p>将字符串转换为PascalCase</p><p><strong><code>Since</code></strong></p><p>1.62.0</p><p><strong><code>Example</code></strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">toPascalCase</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">super-tools-lib</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">toPascalCase</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello world</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;HelloWorld&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">toPascalCase</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello.world</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;HelloWorld&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">toPascalCase</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo_bar-baz</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// FooBarBaz</span></span>
<span class="line"></span></code></pre></div><h4 id="parameters-10" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-10" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>str</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">要操作的字符串</td></tr></tbody></table><h4 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><hr><h3 id="transformat" tabindex="-1">transFormat <a class="header-anchor" href="#transformat" aria-label="Permalink to &quot;transFormat&quot;">​</a></h3><p>▸ <strong>transFormat</strong>(<code>str</code>, <code>oldChar</code>, <code>newChar</code>): <code>string</code></p><p>字符替换</p><p><strong><code>Since</code></strong></p><p>1.62.0</p><p><strong><code>Example</code></strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">transFormat</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">super-tools-lib</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">transFormat</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2019-12-13</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">-</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 2019/12/13</span></span>
<span class="line"></span></code></pre></div><h4 id="parameters-11" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-11" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>str</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">表示将要替换的字符串</td></tr><tr><td style="text-align:left;"><code>oldChar</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">表示你将要替换的字符</td></tr><tr><td style="text-align:left;"><code>newChar</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">表示你想要替换的字符</td></tr></tbody></table><h4 id="returns-11" tabindex="-1">Returns <a class="header-anchor" href="#returns-11" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><p>返回替换后的字符串</p><hr><h3 id="trim" tabindex="-1">trim <a class="header-anchor" href="#trim" aria-label="Permalink to &quot;trim&quot;">​</a></h3><p>▸ <strong>trim</strong>(<code>str</code>): <code>string</code></p><p>去除字符串首尾空格</p><p><strong><code>Since</code></strong></p><p>1.62.0</p><p><strong><code>Example</code></strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">trim</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">super-tools-lib</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">trim</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> AA </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// &#39;AA&#39;</span></span>
<span class="line"></span></code></pre></div><h4 id="parameters-12" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-12" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>str</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">字符串</td></tr></tbody></table><h4 id="returns-12" tabindex="-1">Returns <a class="header-anchor" href="#returns-12" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><p>返回去除首尾空格后的字符串</p>`,172),n=[o];function r(p,c,i,d,y,h){return a(),s("div",null,n)}const g=t(l,[["render",r]]);export{F as __pageData,g as default};