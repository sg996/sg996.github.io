import{_ as s,o as a,c as n,U as l}from"./chunks/framework.76b79cb5.js";const F=JSON.parse('{"title":"CSS 笔记","description":"","frontmatter":{},"headers":[],"relativePath":"blog/css/index.md","filePath":"blog/css/index.md","lastUpdated":1688956399000}'),e={name:"blog/css/index.md"},o=l(`<h1 id="css-笔记" tabindex="-1">CSS 笔记 <a class="header-anchor" href="#css-笔记" aria-label="Permalink to &quot;CSS 笔记&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">学习资料</p><ul><li><a href="https://stateofcss.com/zh-hans/" target="_blank" rel="noreferrer">State of CSS</a></li><li><a href="https://github.com/AllThingsSmitty/css-protips/tree/master/translations/zh-CN" target="_blank" rel="noreferrer">CSS 专业技巧</a></li><li><a href="https://lhammer.cn/You-need-to-know-css/#/zh-cn/" target="_blank" rel="noreferrer">You-need-to-know-css</a></li><li><a href="https://chokcoco.github.io/CSS-Inspiration/" target="_blank" rel="noreferrer">CSS Inspiration--CSS 灵感</a></li><li><a href="https://qishaoxuan.github.io/css_tricks/" target="_blank" rel="noreferrer">CSS Tricks</a></li></ul></div><h2 id="_001-空元素设置占位符" tabindex="-1">001_空元素设置占位符 <a class="header-anchor" href="#_001-空元素设置占位符" aria-label="Permalink to &quot;001\\_空元素设置占位符&quot;">​</a></h2><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">empty</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">before</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#B2CCD6;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">-</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_002-文本省略号" tabindex="-1">002_文本省略号 <a class="header-anchor" href="#_002-文本省略号" aria-label="Permalink to &quot;002\\_文本省略号&quot;">​</a></h2><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* 单行文本 */</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">white-space</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> nowrap</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">text-overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> ellipsis</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 多行文本 */</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> -webkit-box</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/* autoprefixer: off */</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* webpack 打包兼容问题 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-box-orient</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> vertical</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/*设置方向*/</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/* autoprefixer: on */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-line-clamp</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/*设置超过为省略号的行数*/</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">word-break</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> break-all</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 处理字母数字折行*/</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="_003-去除行内元素左右间隙" tabindex="-1">003_去除行内元素左右间隙 <a class="header-anchor" href="#_003-去除行内元素左右间隙" aria-label="Permalink to &quot;003\\_去除行内元素左右间隙&quot;">​</a></h2><ul><li>父元素设置<code>font-size:0;</code></li><li>元素设置<code>float: left;</code></li><li>元素设置<code>display: table-cell;</code></li></ul><h2 id="_004-去除-img-底部间隙" tabindex="-1">004_去除 img 底部间隙 <a class="header-anchor" href="#_004-去除-img-底部间隙" aria-label="Permalink to &quot;004\\_去除 img 底部间隙&quot;">​</a></h2><ul><li>父元素设置<code>font-size:0;</code></li><li>元素设置<code>vertical-align: bottom;</code></li><li>元素设置<code>display: block;</code>或者<code>display: flex;</code></li></ul><h2 id="_005-纯英文、数字文本自动换行" tabindex="-1">005_纯英文、数字文本自动换行 <a class="header-anchor" href="#_005-纯英文、数字文本自动换行" aria-label="Permalink to &quot;005\\_纯英文、数字文本自动换行&quot;">​</a></h2><ul><li>元素设置<code>word-break: break-all;</code><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-break" target="_blank" rel="noreferrer">链接</a></li></ul><h2 id="_006-平滑滚动" tabindex="-1">006_平滑滚动 <a class="header-anchor" href="#_006-平滑滚动" aria-label="Permalink to &quot;006\\_平滑滚动&quot;">​</a></h2><ul><li>元素设置<code>scroll-behavior: smooth;</code><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-behavior" target="_blank" rel="noreferrer">链接</a></li><li>js 实现<code>element.scrollIntoView({behavior: &quot;smooth&quot;});</code><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView" target="_blank" rel="noreferrer">链接</a></li></ul><h2 id="_007-针对全局样式覆盖问题" tabindex="-1">007_针对全局样式覆盖问题 <a class="header-anchor" href="#_007-针对全局样式覆盖问题" aria-label="Permalink to &quot;007\\_针对全局样式覆盖问题&quot;">​</a></h2><ul><li>对当前影响元素设置<code>color: unset;</code><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/unset" target="_blank" rel="noreferrer">链接</a></li></ul><h2 id="_008-事件穿透" tabindex="-1">008_事件穿透 <a class="header-anchor" href="#_008-事件穿透" aria-label="Permalink to &quot;008\\_事件穿透&quot;">​</a></h2><ul><li>元素设置<code>pointer-events:none;</code><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/pointer-events" target="_blank" rel="noreferrer">链接</a></li></ul><h2 id="_009-移动端1像素问题" tabindex="-1">009_移动端1像素问题 <a class="header-anchor" href="#_009-移动端1像素问题" aria-label="Permalink to &quot;009\\_移动端1像素问题&quot;">​</a></h2><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">before</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">box-sizing</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> border-box</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">pointer-events</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-50%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-50%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-50%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-50%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">scale</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">transform-origin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> solid red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,20),p=[o];function r(t,c,i,C,D,y){return a(),n("div",null,p)}const d=s(e,[["render",r]]);export{F as __pageData,d as default};
