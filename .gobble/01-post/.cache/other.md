<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Hola hola</title>
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<link rel="stylesheet" type="text/css" href="css/solarized-light.css">
	</head>
	<body>
		<header>
			<h1>Hola hola</h1>
			<h6>Fri Nov 13 2015 00:00:00 GMT-0800 (PST)</h6>
		</header>
		<main><h2 id="just-javascript">Just javascript</h2>
<p>Passing options to constructor, get added as &quot;properties&quot;</p>
<pre><code class="hljs lang-js"><span class="hljs-keyword">var</span> ractive = <span class="hljs-keyword">new</span> Ractive({
    magic: <span class="hljs-literal">true</span>,
    events: {
        myEvent: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">node, fire</span>)</span>{...}
    }
})
</code></pre>
<h3 id="defaults">Defaults</h3>
<pre><code class="hljs lang-js"><span class="hljs-comment">// Ractive.default === Ractive.prototype</span>

Ractive.default.debug = <span class="hljs-literal">true</span>
Ractive.default.noIntro = <span class="hljs-literal">true</span>

Ractive.prototype.someMethod = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{...}

<span class="hljs-keyword">var</span> ractive = <span class="hljs-keyword">new</span> Ractive()

ractive.someMethod()
</code></pre>
<p>Also good for data functions and ubiquitous data.</p>
<h3 id="registry-defaults">Registry Defaults</h3>
<p>On constructor instead:</p>
<pre><code class="hljs lang-js">
Ractive.events.myEvent = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">node, fire</span>)</span>{...}
Ractive.components.widget = Ractive.extend({...})
</code></pre>
<ul>
<li>adaptors</li>
<li>components</li>
<li>computed</li>
<li>decorators</li>
<li>easing</li>
<li>events</li>
<li>interpolators</li>
<li>partials</li>
<li>transitions</li>
</ul>
<h3 id="ractive-extend">Ractive.extend</h3>
<pre><code class="hljs lang-js">
<span class="hljs-keyword">var</span> MyRactive = Ractive.extend({
      template: <span class="hljs-string">'#mytemplate'</span>,
      init: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
          <span class="hljs-keyword">this</span>.on(<span class="hljs-string">'select'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
              ....
          })

          <span class="hljs-keyword">this</span>.observe(<span class="hljs-string">'foo.*.name'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{

          })
      },
      complete: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
          <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'when do I fire?'</span>)
      },
      myMethod: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{

      }
});

<span class="hljs-keyword">var</span> ractive = <span class="hljs-keyword">new</span> MyRactive({
    el: <span class="hljs-string">'body'</span>
})

ractive.myMethod()
</code></pre>
<h3 id="accessing-the-parent">Accessing the Parent</h3>
<p>Use <code>this._super()</code> to call a base method.</p>
<h2 id="components">Components</h2>
<pre><code class="hljs lang-js"><span class="hljs-keyword">var</span> Component = Ractive.extend({
    template: <span class="hljs-string">'I can be instantiated _or_ be a component!'</span>
});

<span class="hljs-keyword">var</span> ractive = <span class="hljs-keyword">new</span> Component({
    el: <span class="hljs-string">'container'</span>
});

<span class="hljs-keyword">var</span> ractive2 = Ractive({
    el: <span class="hljs-string">'container2'</span>,
    template: <span class="hljs-string">'&lt;widget/&gt;'</span>,
    components: {
        widget: MyRactive
    }
});
</code></pre>
<h2 id="lab">Lab</h2>
<ol>
<li>Play with Ractive.extend</li>
<li>Try <code>this._super()</code></li>
<li>Componentize a previous lab, or create a new one.</li>
</ol>
</main>
	</body>
</html>