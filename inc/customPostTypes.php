<?php

$books = new CPT(array(
	'post_type_name' => 'book',
	'singular' => 'Book',
	'plural' => 'Books',
	'slug' => 'books',
	'supports' => array('title', 'editor', 'thumbnail', 'comments'),
));
