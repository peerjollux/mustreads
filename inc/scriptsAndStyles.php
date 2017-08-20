<?php

// load css into the website's front-end
function mustreads_enqueue_style() {
    wp_enqueue_style( 'mustreads-theme', get_template_directory_uri() . '/dist/css/theme.css' );
}
add_action( 'wp_enqueue_scripts', 'mustreads_enqueue_style' );



function mustreads_adding_scripts() {
  wp_register_script('bootstrap-modal', get_template_directory_uri() . '/bower_components/bootstrap/js/dist/modal.js', array('bootstrap-util'),'1.1', true);
  wp_enqueue_script('bootstrap-modal');

  wp_register_script('bootstrap-util', get_template_directory_uri() . '/bower_components/bootstrap/js/dist/util.js', array('jquery'),'1.1', true);
  wp_enqueue_script('bootstrap-util');

  wp_register_script('viewport-checker', get_template_directory_uri() . '/bower_components/jQuery-viewport-checker/dist/jquery.viewportchecker.min.js', array('jquery'),'1.1', true);
  wp_enqueue_script('viewport-checker');

  wp_register_script('mustreads-main', get_template_directory_uri() . '/dist/js/main.js', array('jquery', 'bootstrap-modal'),'1.1', true);
  wp_enqueue_script('mustreads-main');
}

add_action( 'wp_enqueue_scripts', 'mustreads_adding_scripts' );
?>
