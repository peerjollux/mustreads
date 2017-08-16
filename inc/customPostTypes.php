<?php

$books = new CPT(array(
	'post_type_name' => 'book',
	'singular' => 'Book',
	'plural' => 'Books',
	'slug' => 'books',
	'supports' => array('title', 'editor', 'thumbnail', 'comments'),
	'taxonomies'  => array( 'category' ),
));

$books->register_taxonomy(array(
	'taxonomy_name' => 'category',
	'singular' => 'Category',
	'plural' => 'Categories',
	'slug' => 'category'
));
