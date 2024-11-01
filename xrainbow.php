<?php
/*
Plugin Name: X-Rainbow list plugin
Plugin URI: http://xcoder.in/blog/2011/01/xrainbow_list.xhtml
Description: To make your any list rainbow liked.
Version: 1.0 Beta
Author: XadillaX
Author URI: http://xcoder.in
*/

function xrainbow_header() {
    $cur_path = get_option("siteurl") . "/wp-content/plugins/" . basename(dirname(__FILE__)) . "/";
    echo "<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js?ver=3.0.4'></script>\n";
    echo "<script type='text/javascript' src='" . $cur_path . "xrainbow.js'></script>\n";
}

add_action("wp_head", "xrainbow_header");

?>
