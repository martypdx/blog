const headers = require( './headers' );
const markdown = require( './gobble-markdown' );
const render = require( 'gobble-jade' );

function post ( code, options ) {
	const data = headers.extract( code );
	const md = headers.remove( code );
	data.content = markdown( md );
	return render( options.template, data );
};

post.defaults = {
	accept: ['.md', '.markdown'],
	ext: '.html'
};

module.exports = post;

