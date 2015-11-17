'use strict';

const gobble = require( 'gobble' );
const post = require( './gobble/gobble-post' );
const template = require( 'fs' ).readFileSync( './post.jade' );

const posts = gobble( 'posts' ).transform( post, { template } );
const css = gobble( 'css' ).moveTo( 'css' );

module.exports = gobble([ posts, css ]);
