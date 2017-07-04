<?php

function _mustreads_theme_setup() {

  // Clean up the head
  remove_action( 'wp_head', 'rsd_link' );
  remove_action( 'wp_head', 'wlwmanifest_link' );
  remove_action( 'wp_head', 'wp_generator' );
  remove_action( 'wp_head', 'wp_shortlink_wp_head' );
}


add_action( 'after_setup_theme', '_mustreads_theme_setup' );
