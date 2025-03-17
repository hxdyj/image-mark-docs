import{_ as a,c as i,a2 as s,o as t}from"./chunks/framework.BQmytedh.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"doc","footer":false},"headers":[],"relativePath":"en/api/constructor-methods.md","filePath":"en/api/constructor-methods.md","lastUpdated":1742177806000}'),n={name:"en/api/constructor-methods.md"};function l(o,e,h,r,p,d){return t(),i("div",null,e[0]||(e[0]=[s(`<h2 id="static-methods" tabindex="-1">Static Methods <a class="header-anchor" href="#static-methods" aria-label="Permalink to &quot;Static Methods&quot;">​</a></h2><h3 id="useplugin" tabindex="-1">usePlugin <a class="header-anchor" href="#useplugin" aria-label="Permalink to &quot;usePlugin&quot;">​</a></h3><p>Use a plugin</p><h3 id="unuseplugin" tabindex="-1">unusePlugin <a class="header-anchor" href="#unuseplugin" aria-label="Permalink to &quot;unusePlugin&quot;">​</a></h3><p>Unuse a plugin</p><h3 id="hasplugin" tabindex="-1">hasPlugin <a class="header-anchor" href="#hasplugin" aria-label="Permalink to &quot;hasPlugin&quot;">​</a></h3><p>Check if a plugin is in use</p><h3 id="usedefaultplugin" tabindex="-1">useDefaultPlugin <a class="header-anchor" href="#usedefaultplugin" aria-label="Permalink to &quot;useDefaultPlugin&quot;">​</a></h3><p>Use default plugins, which include the built-in <a href="/en/api/plugin/shape"><code>shape</code></a> and <a href="/en/api/plugin/selection"><code>selection</code></a> plugins</p><h3 id="unusedefaultplugin" tabindex="-1">unuseDefaultPlugin <a class="header-anchor" href="#unusedefaultplugin" aria-label="Permalink to &quot;unuseDefaultPlugin&quot;">​</a></h3><p>Unuse default plugins</p><h2 id="instance-methods" tabindex="-1">Instance Methods <a class="header-anchor" href="#instance-methods" aria-label="Permalink to &quot;Instance Methods&quot;">​</a></h2><h3 id="resize" tabindex="-1">resize <a class="header-anchor" href="#resize" aria-label="Permalink to &quot;resize&quot;">​</a></h3><p>Triggered when the container size changes</p><h3 id="rerender" tabindex="-1">rerender <a class="header-anchor" href="#rerender" aria-label="Permalink to &quot;rerender&quot;">​</a></h3><p>Triggered when re-rendering</p><h3 id="destroy" tabindex="-1">destroy <a class="header-anchor" href="#destroy" aria-label="Permalink to &quot;destroy&quot;">​</a></h3><p>Destroy the instance</p><h3 id="adddefaultaction" tabindex="-1">addDefaultAction <a class="header-anchor" href="#adddefaultaction" aria-label="Permalink to &quot;addDefaultAction&quot;">​</a></h3><p>Add default actions to the instance, currently including canvas zooming and moving</p><h3 id="removedefaultaction" tabindex="-1">removeDefaultAction <a class="header-anchor" href="#removedefaultaction" aria-label="Permalink to &quot;removeDefaultAction&quot;">​</a></h3><p>Remove default actions from the instance</p><h3 id="addstagelmbdownmoveing" tabindex="-1">addStageLmbDownMoveing <a class="header-anchor" href="#addstagelmbdownmoveing" aria-label="Permalink to &quot;addStageLmbDownMoveing&quot;">​</a></h3><p>Add canvas moving</p><h3 id="removestagelmbdownmoveing" tabindex="-1">removeStageLmbDownMoveing <a class="header-anchor" href="#removestagelmbdownmoveing" aria-label="Permalink to &quot;removeStageLmbDownMoveing&quot;">​</a></h3><p>Remove canvas moving</p><h3 id="addstagemousescale" tabindex="-1">addStageMouseScale <a class="header-anchor" href="#addstagemousescale" aria-label="Permalink to &quot;addStageMouseScale&quot;">​</a></h3><p>Add canvas zooming</p><h3 id="removestagemousescale" tabindex="-1">removeStageMouseScale <a class="header-anchor" href="#removestagemousescale" aria-label="Permalink to &quot;removeStageMouseScale&quot;">​</a></h3><p>Remove canvas zooming</p><h3 id="moveto" tabindex="-1">moveTo <a class="header-anchor" href="#moveto" aria-label="Permalink to &quot;moveTo&quot;">​</a></h3><p>params: <code>(position: Position)</code></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Position</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	|</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;left-top&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	|</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;right-top&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	|</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;left-bottom&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	|</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;right-bottom&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	|</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;top&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	|</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;bottom&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	|</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;left&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	|</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;right&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	|</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;center&#39;</span></span></code></pre></div><p>Move to a specified position</p><h3 id="move" tabindex="-1">move <a class="header-anchor" href="#move" aria-label="Permalink to &quot;move&quot;">​</a></h3><p>params: <code>(point: ArrayPoint)</code></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ArrayPoint</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p>Move to specified coordinates</p><h3 id="startsuccessivemove" tabindex="-1">startSuccessiveMove <a class="header-anchor" href="#startsuccessivemove" aria-label="Permalink to &quot;startSuccessiveMove&quot;">​</a></h3><p>params: <code>(point: ArrayPoint)</code></p><p>Start successive moving</p><h3 id="movesuccessive" tabindex="-1">moveSuccessive <a class="header-anchor" href="#movesuccessive" aria-label="Permalink to &quot;moveSuccessive&quot;">​</a></h3><p>params: <code>(point: ArrayPoint)</code></p><p>Successive moving</p><h3 id="endsuccessivemove" tabindex="-1">endSuccessiveMove() <a class="header-anchor" href="#endsuccessivemove" aria-label="Permalink to &quot;endSuccessiveMove()&quot;">​</a></h3><p>Stop successive moving</p><h3 id="scale" tabindex="-1">scale <a class="header-anchor" href="#scale" aria-label="Permalink to &quot;scale&quot;">​</a></h3><p>params: (</p><ul><li><p>direction: 1 | -1, <code>1 for zoom-in, -1 for zoom-out</code></p></li><li><p>point: ArrayPoint | &#39;left-top&#39; | &#39;center&#39;, <code>zoom-in point</code></p></li><li><p>reletiveTo: &#39;container&#39; | &#39;image&#39; = &#39;container&#39;, <code>relative to whom</code></p></li><li><p>newScale?: number <code>new scaling ratio, if provided, scale directly to this ratio</code></p><p>)</p></li></ul><h3 id="scaleto" tabindex="-1">scaleTo <a class="header-anchor" href="#scaleto" aria-label="Permalink to &quot;scaleTo&quot;">​</a></h3><p>params: (</p><ul><li>options: <a href="/en/api/constructor-options#initscaleconfig">ImageMarkOptions[&#39;initScaleConfig&#39;]</a>,</li><li>point: ArrayPoint | &#39;left-top&#39; | &#39;center&#39;, <code>zoom-in point</code></li><li>reletiveTo: &#39;container&#39; | &#39;image&#39; = &#39;container&#39; <code>relative to whom</code></li></ul><p>)</p><h3 id="setminscale" tabindex="-1">setMinScale <a class="header-anchor" href="#setminscale" aria-label="Permalink to &quot;setMinScale&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> InitialScaleSize</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;fit&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;original&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;width&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;height&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;cover&#39;</span></span></code></pre></div><p>params: <code>(minScale: number|InitialScaleSize)</code></p><p>Set minimum scaling ratio</p><h3 id="setmaxscale" tabindex="-1">setMaxScale <a class="header-anchor" href="#setmaxscale" aria-label="Permalink to &quot;setMaxScale&quot;">​</a></h3><p>params: <code>(minScale: number|InitialScaleSize)</code></p><p>Set maximum scaling ratio</p><h3 id="on" tabindex="-1">on <a class="header-anchor" href="#on" aria-label="Permalink to &quot;on&quot;">​</a></h3><p>params: (...rest: any) <code>Reference the on method of eventemitter3</code></p><p>Bind instance events, currently refer to the <a href="/en/api/constructor-on">events</a> documentation for events that can be listened to by the instance</p><h3 id="off" tabindex="-1">off <a class="header-anchor" href="#off" aria-label="Permalink to &quot;off&quot;">​</a></h3><p>params: (...rest: any) <code>Reference the off method of eventemitter3</code></p><p>Unbind instance events</p><h3 id="setenableimageoutofcontainer" tabindex="-1">setEnableImageOutOfContainer <a class="header-anchor" href="#setenableimageoutofcontainer" aria-label="Permalink to &quot;setEnableImageOutOfContainer&quot;">​</a></h3><p>params: <code>(enable: boolean)</code></p><p>Set whether the image can be out of the container</p><h3 id="initplugin" tabindex="-1">initPlugin <a class="header-anchor" href="#initplugin" aria-label="Permalink to &quot;initPlugin&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PluginNewCall</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">imageMarkInstance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ImageMark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Plugin</span></span></code></pre></div><p>params: <code>(plugin: typeof Plugin|PluginNewCall)</code></p><p>Initialize a plugin</p><h3 id="addplugin" tabindex="-1">addPlugin <a class="header-anchor" href="#addplugin" aria-label="Permalink to &quot;addPlugin&quot;">​</a></h3><p>params: <code>(plugin: typeof Plugin|PluginNewCall)</code></p><p>Add a plugin to the instance, currently has the same effect as <code>initPlugin</code></p><h3 id="removeplugin" tabindex="-1">removePlugin <a class="header-anchor" href="#removeplugin" aria-label="Permalink to &quot;removePlugin&quot;">​</a></h3><p>params: <code>(plugin: typeof Plugin)</code></p><p>Remove a plugin from the instance</p><h3 id="getshapeplugin" tabindex="-1">getShapePlugin <a class="header-anchor" href="#getshapeplugin" aria-label="Permalink to &quot;getShapePlugin&quot;">​</a></h3><p>Get the <code>shape plugin</code> instance on the instance</p><h3 id="getselectionplugin" tabindex="-1">getSelectionPlugin <a class="header-anchor" href="#getselectionplugin" aria-label="Permalink to &quot;getSelectionPlugin&quot;">​</a></h3><p>Get the <code>selection plugin</code> instance on the instance</p>`,83)]))}const k=a(n,[["render",l]]);export{u as __pageData,k as default};
