const marked = require( 'marked');
const hljs = require( 'highlight.js' );
const renderer = new marked.Renderer();
const base_code = renderer.code.bind( renderer );

renderer.code = function( code, lang ){
	return base_code( code, lang ).replace( /<code class="/gi, '<code class="hljs ' )
};

marked.setOptions({
	renderer,
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: false,
	smartLists: true,
	smartypants: false,
	highlight: function ( code, lang ) {
		return lang ? hljs.highlight( lang, code ).value : code;
	}
});

function markdown ( code, options ) {
	return marked( code, options );
};

markdown.defaults = {
	accept: ['.md', '.markdown'],
	ext: '.html'
};

module.exports = markdown;

