import{_ as a,c as t,a2 as i,o as n}from"./chunks/framework.BQmytedh.js";const u=JSON.parse('{"title":"Selection","description":"","frontmatter":{"layout":"doc","footer":false},"headers":[],"relativePath":"en/api/action/selection.md","filePath":"en/api/action/selection.md","lastUpdated":1742177806000}'),s={name:"en/api/action/selection.md"};function o(l,e,c,h,d,r){return n(),t("div",null,e[0]||(e[0]=[i(`<h1 id="selection" tabindex="-1">Selection <a class="header-anchor" href="#selection" aria-label="Permalink to &quot;Selection&quot;">​</a></h1><p>Action for selecting a Shape with the mouse. When using the selection plugin, this action will be added to each Shape by the plugin. You can also add this action to a Shape instance yourself to replace the previous selection action, allowing you to customize the selection action style by adding initDrawFunc.</p><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SelectionActionOptions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	initDrawFunc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SelectionDrawFunc</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="instance-properties" tabindex="-1">Instance Properties <a class="header-anchor" href="#instance-properties" aria-label="Permalink to &quot;Instance Properties&quot;">​</a></h2><h3 id="selected" tabindex="-1">selected <a class="header-anchor" href="#selected" aria-label="Permalink to &quot;selected&quot;">​</a></h3><p>Indicates whether the current <code>Shape</code> is selected.</p><h2 id="instance-methods" tabindex="-1">Instance Methods <a class="header-anchor" href="#instance-methods" aria-label="Permalink to &quot;Instance Methods&quot;">​</a></h2><h3 id="getselectionplugin" tabindex="-1">getSelectionPlugin <a class="header-anchor" href="#getselectionplugin" aria-label="Permalink to &quot;getSelectionPlugin&quot;">​</a></h3><p>Get the <code>Selection</code> plugin instance.</p><h3 id="getselectionshape" tabindex="-1">getSelectionShape <a class="header-anchor" href="#getselectionshape" aria-label="Permalink to &quot;getSelectionShape&quot;">​</a></h3><p>Get the <code>Svg.js</code> shape instance of the selected <code>Shape</code>.</p><h3 id="getselectionid" tabindex="-1">getSelectionId <a class="header-anchor" href="#getselectionid" aria-label="Permalink to &quot;getSelectionId&quot;">​</a></h3><p>Get the <code>id</code> of the selection for the currently selected <code>Shape</code>.</p><h3 id="disableselection" tabindex="-1">disableSelection <a class="header-anchor" href="#disableselection" aria-label="Permalink to &quot;disableSelection&quot;">​</a></h3><p>Disable the <code>Selection</code> plugin.</p><h3 id="enableselection" tabindex="-1">enableSelection <a class="header-anchor" href="#enableselection" aria-label="Permalink to &quot;enableSelection&quot;">​</a></h3><p>Enable the <code>Selection</code> plugin.</p><h3 id="destroy" tabindex="-1">destroy <a class="header-anchor" href="#destroy" aria-label="Permalink to &quot;destroy&quot;">​</a></h3><p>alled when the <code>ImageMark</code> is <code>destroyed</code> or when <code>unuseAction</code> is invoked.</p>`,20)]))}const k=a(s,[["render",o]]);export{u as __pageData,k as default};
