import{_ as e,o,c as a,a as c}from"./app.877fd048.js";const b=JSON.parse('{"title":"HTML 空格占位符","description":"","frontmatter":{},"headers":[],"relativePath":"blog/others/html-space-placeholder.md"}'),d={name:"blog/others/html-space-placeholder.md"},t=c('<h1 id="html-空格占位符" tabindex="-1">HTML 空格占位符 <a class="header-anchor" href="#html-空格占位符" aria-hidden="true">#</a></h1><ul><li><code>&amp;#32;</code> == 普通的英文半角空格</li><li><code>&amp;#160;</code> == <code>&amp;nbsp;</code> == <code>&amp;#xA0;</code> == no-break space （普通的英文半角空格但不换行）</li><li><code>&amp;#12288;</code> == 中文全角空格 （一个中文宽度）</li><li><code>&amp;#8194;</code> == <code>&amp;ensp;</code> == en 空格 （半个中文宽度）</li><li><code>&amp;#8195;</code> == <code>&amp;emsp;</code> == em 空格 （一个中文宽度）</li><li><code>&amp;#8197;</code> == 四分之一 em 空格 （四分之一中文宽度）</li></ul><p>相比平时的空格（<code>&amp;#32;</code>），<code>&amp;nbsp;</code> 拥有不间断（non-breaking）特性。即连续的<code>&amp;nbsp;</code> 会在同一行内显示。即使有 100 个连续的<code>&amp;nbsp;</code>，浏览器也不会把它们拆成两行。</p><blockquote><p>参考资料：<a href="https://blog.csdn.net/sforiz/article/details/43937237" target="_blank" rel="noreferrer">HTML 空格占位符</a></p></blockquote>',4),l=[t];function p(r,s,n,i,m,_){return o(),a("div",null,l)}const f=e(d,[["render",p]]);export{b as __pageData,f as default};