<?php
/**
 * The main template file
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  MustReads
 * @since   MustReads 0.1
 */

$category = single_cat_title( '', false );


$context = Timber::get_context();
$args = array(
	'post_type' => 'book',
  'category_name' => $category
);
$context['category'] = $category;
$context['books'] = Timber::get_posts($args);


Timber::render( array( 'templates/category.twig' ), $context );
