<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Hello World</title>
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<link rel="stylesheet" type="text/css" href="css/solarized-light.css">
	</head>
	<body>
		<header>
			<h1>Hello World</h1>
			<h6>Tue Nov 17 2015 00:00:00 GMT-0800 (PST)</h6>
		</header>
		<main><h2 id="intro-really-hi-there-">Intro, really hi there?</h2>
<p>At its core, RactiveJS interpolates data into an html template and renders into the DOM and a specified location:</p>
<pre><code class="hljs lang-html"><span class="hljs-tag">&lt;<span class="hljs-title">h1</span>&gt;</span>Hello {{world}}<span class="hljs-tag">&lt;/<span class="hljs-title">h1</span>&gt;</span>
</code></pre>
<h3 id="-">+</h3>
<pre><code class="hljs lang-javascript"><span class="hljs-keyword">new</span> Ractive({
    el: <span class="hljs-built_in">document</span>.body,
    template: <span class="hljs-string">'#template'</span>,
    data: {
        world: <span class="hljs-string">'Earth'</span>
    }
})
</code></pre>
<p>The config option <code>append: true</code> will retain the existing el content and append the rendered template. If <code>append</code> refers to a node, content will
be inserted before the &quot;anchor&quot; node.</p>
<h2 id="lab">Lab</h2>
<ol>
<li>Make sure <code>01-lab.html</code> runs and renders in the browser.</li>
<li>Create a node under the body called <code>&lt;div id=&#39;container&#39;&gt;</code> and render the output there.</li>
<li>Past the following under body and render to the third paragraph (you don&#39;t need it, but there&#39;s a reference to jquery on the page if you want to use it). <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference">MDN CSS Reference</a></li>
</ol>
<pre><code class="hljs lang-html"><span class="hljs-tag">&lt;<span class="hljs-title">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">p</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">'first'</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">p</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">'second'</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">p</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">'third'</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
</code></pre>
<ol>
<li>Render into the list after the first <code>&lt;p&gt;</code></li>
<li>Create two seperate ractive instances that render different templates to two different nodes</li>
<li>Try an inline template instead of an element selector</li>
</ol>
</main>
	</body>
</html>