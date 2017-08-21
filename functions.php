<?php
require_once(__DIR__ . '/vendor/autoload.php');

require_once "inc/customPostTypes.php";
require_once "inc/init.php";
require_once "inc/timber.php";
require_once "inc/scriptsAndStyles.php";


function my_home_query( $query ) {
    if ( $query->is_main_query() && !is_admin() && !is_page() ) {
      $query->set( 'post_type', array( 'book' ));
    }
  }
add_action( 'pre_get_posts', 'my_home_query' );
