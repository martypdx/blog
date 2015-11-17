const regex = /^{[^}]+}/;

function extract ( code, options ) {
	const header = regex.exec( code );
	if ( header && header.length ) {
		const fn = new Function( `return ${header[0]};` );
		const result = fn();
		if ( result.date ) result.date = new Date( result.date );
		return result;
	}
};

function remove ( code ) {
	return code.replace( regex, '' );
};

module.exports = { extract, remove };

