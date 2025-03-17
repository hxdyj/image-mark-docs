import{_ as e,c as i,a2 as s,o as t}from"./chunks/framework.BQmytedh.js";const k=JSON.parse('{"title":"Shape 类","description":"","frontmatter":{"layout":"doc","footer":false},"headers":[],"relativePath":"api/shape-class.md","filePath":"zh/api/shape-class.md","lastUpdated":1742177806000}'),h={name:"api/shape-class.md"};function n(o,a,l,r,p,d){return t(),i("div",null,a[0]||(a[0]=[s(`<h1 id="shape-类" tabindex="-1">Shape 类 <a class="header-anchor" href="#shape-类" aria-label="Permalink to &quot;Shape 类&quot;">​</a></h1><p>Shape 类是所有形状的基类，它提供了一些基本的属性和方法。可以继承此类来实现自己的形状。</p><h2 id="类名" tabindex="-1">类名 <a class="header-anchor" href="#类名" aria-label="Permalink to &quot;类名&quot;">​</a></h2><p><code>ImageMarkShape</code></p><div class="danger custom-block"><p class="custom-block-title">注意</p><p>类名不是 Shape，而是 ImageMarkShape，这是因为 Shape 在 <code>Svg.js</code> 里有同名的类</p></div><h2 id="构造函数" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数" aria-label="Permalink to &quot;构造函数&quot;">​</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ShapeDrawFunc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">shape</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ImageMarkShape</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ShapeOptions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	afterRender</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">shapeInstance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ImageMarkShape</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 绘制完成后添加到画布后调用，也就是dom已经渲染完成</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	initDrawFunc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ShapeDrawFunc</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 初始自定义绘制函数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>参数：(</p><ul><li>public data: T, <code>形状的数据，可以是任意类型，具体的类型由子类实现</code></li><li>imageMarkInstance: ImageMark, <code>形状所属的 ImageMark 实例</code></li><li>public options: ShapeOptions <code>形状的选项，具体的选项由子类实现</code></li></ul><p>)</p><p>Shape 类的构造函数</p><h2 id="静态属性" tabindex="-1">静态属性 <a class="header-anchor" href="#静态属性" aria-label="Permalink to &quot;静态属性&quot;">​</a></h2><h3 id="shapename" tabindex="-1">shapeName <a class="header-anchor" href="#shapename" aria-label="Permalink to &quot;shapeName&quot;">​</a></h3><p>shape 的名称</p><h3 id="actionlist" tabindex="-1">actionList <a class="header-anchor" href="#actionlist" aria-label="Permalink to &quot;actionList&quot;">​</a></h3><p>shape 的动作列表</p><h2 id="静态方法" tabindex="-1">静态方法 <a class="header-anchor" href="#静态方法" aria-label="Permalink to &quot;静态方法&quot;">​</a></h2><h3 id="useaction" tabindex="-1">useAction <a class="header-anchor" href="#useaction" aria-label="Permalink to &quot;useAction&quot;">​</a></h3><p>参数：<code>(action: typeof Action, actionOptions: any = {})</code></p><p>使用指定的动作</p><h3 id="unuseaction" tabindex="-1">unuseAction <a class="header-anchor" href="#unuseaction" aria-label="Permalink to &quot;unuseAction&quot;">​</a></h3><p>参数：<code>(action: typeof Action)</code></p><p>取消使用指定的动作</p><h3 id="hasaction" tabindex="-1">hasAction <a class="header-anchor" href="#hasaction" aria-label="Permalink to &quot;hasAction&quot;">​</a></h3><p>参数：<code>(action: typeof Action)</code></p><p>判断是否有指定的动作</p><h3 id="usedefaultaction" tabindex="-1">useDefaultAction <a class="header-anchor" href="#usedefaultaction" aria-label="Permalink to &quot;useDefaultAction&quot;">​</a></h3><p>使用默认的动作</p><h3 id="unusedefaultaction" tabindex="-1">unuseDefaultAction <a class="header-anchor" href="#unusedefaultaction" aria-label="Permalink to &quot;unuseDefaultAction&quot;">​</a></h3><p>取消使用默认的动作</p><h2 id="抽象方法" tabindex="-1">抽象方法 <a class="header-anchor" href="#抽象方法" aria-label="Permalink to &quot;抽象方法&quot;">​</a></h2><h3 id="draw" tabindex="-1">draw <a class="header-anchor" href="#draw" aria-label="Permalink to &quot;draw&quot;">​</a></h3><p>刻画形状</p><h2 id="实例属性" tabindex="-1">实例属性 <a class="header-anchor" href="#实例属性" aria-label="Permalink to &quot;实例属性&quot;">​</a></h2><h3 id="mousedrawtype" tabindex="-1">mouseDrawType <a class="header-anchor" href="#mousedrawtype" aria-label="Permalink to &quot;mouseDrawType&quot;">​</a></h3><p><code>readonly</code></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ShapeMouseDrawType</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;oneTouch&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;multiPress&#39;</span></span></code></pre></div><p>鼠标绘制类型，oneTouch:一笔绘制，multiPress:多次点击绘制</p><h3 id="uid" tabindex="-1">uid <a class="header-anchor" href="#uid" aria-label="Permalink to &quot;uid&quot;">​</a></h3><p>形状的唯一标识符</p><h3 id="shapeinstance" tabindex="-1">shapeInstance <a class="header-anchor" href="#shapeinstance" aria-label="Permalink to &quot;shapeInstance&quot;">​</a></h3><p>形状的 <code>Svg.js</code> <code>G</code> 实例</p><h3 id="isrendered" tabindex="-1">isRendered <a class="header-anchor" href="#isrendered" aria-label="Permalink to &quot;isRendered&quot;">​</a></h3><p>是否已经渲染过</p><h3 id="isbindactions" tabindex="-1">isBindActions <a class="header-anchor" href="#isbindactions" aria-label="Permalink to &quot;isBindActions&quot;">​</a></h3><p>是否已经绑定动作</p><h3 id="imagemark" tabindex="-1">imageMark <a class="header-anchor" href="#imagemark" aria-label="Permalink to &quot;imageMark&quot;">​</a></h3><p>形状所属的 <code>ImageMark</code> 实例</p><h3 id="action" tabindex="-1">action <a class="header-anchor" href="#action" aria-label="Permalink to &quot;action&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">action</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	[key: string]: Action</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>形状的动作</p><h2 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h2><h3 id="adddrawfunc" tabindex="-1">addDrawFunc <a class="header-anchor" href="#adddrawfunc" aria-label="Permalink to &quot;addDrawFunc&quot;">​</a></h3><p>参数：<code>(func: ShapeDrawFunc)</code></p><p>添加绘制函数，用于自定义绘制，在每次<code>draw</code>时都会调用，比如自定义 fillColor，strokeWidth 等,或者 select fillColor 等等</p><h3 id="removedrawfunc" tabindex="-1">removeDrawFunc <a class="header-anchor" href="#removedrawfunc" aria-label="Permalink to &quot;removeDrawFunc&quot;">​</a></h3><p>参数：<code>(func: ShapeDrawFunc)</code></p><p>移除绘制函数</p><h3 id="getmainshape" tabindex="-1">getMainShape <a class="header-anchor" href="#getmainshape" aria-label="Permalink to &quot;getMainShape&quot;">​</a></h3><p>获取主形状</p><h3 id="getmainid" tabindex="-1">getMainId <a class="header-anchor" href="#getmainid" aria-label="Permalink to &quot;getMainId&quot;">​</a></h3><p>获取主形状的 id</p><h3 id="updatedata" tabindex="-1">updateData <a class="header-anchor" href="#updatedata" aria-label="Permalink to &quot;updateData&quot;">​</a></h3><p>参数：<code>(data: T)</code></p><p>更新形状的数据</p><h3 id="getmousemovethreshold" tabindex="-1">getMouseMoveThreshold <a class="header-anchor" href="#getmousemovethreshold" aria-label="Permalink to &quot;getMouseMoveThreshold&quot;">​</a></h3><p>获取鼠标移动绘制形状时候的阈值，默认为 0</p><h3 id="setmousemovethreshold" tabindex="-1">setMouseMoveThreshold <a class="header-anchor" href="#setmousemovethreshold" aria-label="Permalink to &quot;setMouseMoveThreshold&quot;">​</a></h3><p>参数：<code>(threshold: number)</code></p><p>设置鼠标移动绘制形状时候的阈值</p><h3 id="destroy" tabindex="-1">destroy <a class="header-anchor" href="#destroy" aria-label="Permalink to &quot;destroy&quot;">​</a></h3><p>销毁形状并从画布中移除</p><h3 id="render" tabindex="-1">render <a class="header-anchor" href="#render" aria-label="Permalink to &quot;render&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AddToShape</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Parameters</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">InstanceType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Shape&gt;[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;addTo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]&gt;[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p>参数：<code>(stage: AddToShape)</code></p><p>渲染形状到画布上，如果已经渲染过，则不再渲染</p><h3 id="addaction" tabindex="-1">addAction <a class="header-anchor" href="#addaction" aria-label="Permalink to &quot;addAction&quot;">​</a></h3><p>参数：<code>(action: typeof Action, actionOptions: any = {})</code></p><p>添加实例动作</p><h3 id="removeaction" tabindex="-1">removeAction <a class="header-anchor" href="#removeaction" aria-label="Permalink to &quot;removeAction&quot;">​</a></h3><p>参数：<code>(action: typeof Action)</code></p><p>移除实例动作</p><h3 id="initaction" tabindex="-1">initAction <a class="header-anchor" href="#initaction" aria-label="Permalink to &quot;initAction&quot;">​</a></h3><p>初始化实例动作，如果已经绑定动作，则不再绑定</p>`,85)]))}const u=e(h,[["render",n]]);export{k as __pageData,u as default};
