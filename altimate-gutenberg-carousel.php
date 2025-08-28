<?php
/**
 * Plugin Name:       Altimate Gutenberg Carousel
 * Description:       A highly customizable & responsive plugin for gutenberg.
 * Version:           1.0.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            WPDrops
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       altimate-gutenberg-carousel
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
/**
 * Registers the block using a `blocks-manifest.php` file, which improves the performance of block type registration.
 * Behind the scenes, it also registers all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
function create_block_altimate_gutenberg_carousel_block_init() {
	/**
	 * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
	 * based on the registered block metadata.
	 * Added in WordPress 6.8 to simplify the block metadata registration process added in WordPress 6.7.
	 *
	 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
	 */
	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
		wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
		return;
	}

	/**
	 * Registers the block(s) metadata from the `blocks-manifest.php` file.
	 * Added to WordPress 6.7 to improve the performance of block type registration.
	 *
	 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
	 */
	if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
		wp_register_block_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
	}
	/**
	 * Registers the block type(s) in the `blocks-manifest.php` file.
	 *
	 * @see https://developer.wordpress.org/reference/functions/register_block_type/
	 */
	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
	foreach ( array_keys( $manifest_data ) as $block_type ) {
		register_block_type( __DIR__ . "/build/{$block_type}" );
	}
}
add_action( 'init', 'create_block_altimate_gutenberg_carousel_block_init' );

function altimate_register_block_category( $categories, $post ) {
    // Only add if it doesn't exist already
    $exists = wp_list_pluck( $categories, 'slug' );
    if ( ! in_array( 'altimate', $exists, true ) ) {
        $categories[] = array(
            'slug'  => 'altimate',
            'title' => __( 'Altimate Gutenberg Carousel Blocks', 'altimate-gutenberg-carousel' ),
            'icon'  => null,
        );
    }

    return $categories;
}
add_filter( 'block_categories_all', 'altimate_register_block_category', 10, 2 );

function altimate_gutenberg_carousel_enqueue_assets() {
    wp_enqueue_style(
        'font-awesome',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
    );
}
add_action('enqueue_block_editor_assets', 'altimate_gutenberg_carousel_enqueue_assets');
add_action('wp_enqueue_scripts', 'altimate_gutenberg_carousel_enqueue_assets');

function altimate_gutenberg_carousel_enqueue_fontawesome() {
    wp_enqueue_style( 'fontawesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css', [], '6.5.1' );
}
add_action( 'enqueue_block_editor_assets', 'altimate_gutenberg_carousel_enqueue_fontawesome' );
function altimate_gutenberg_enqueue_google_fonts() {
    wp_enqueue_style(
        'my-google-fonts',
        'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Open+Sans:wght@400;600&display=swap',
        [],
        null
    );
}
add_action( 'enqueue_block_assets', 'altimate_gutenberg_enqueue_google_fonts' );

function altimate_enqueue_selected_google_font() {
    $font = get_post_meta( get_the_ID(), 'subtitleFontFamily', true ); 
    if ( $font && $font !== 'inherit' ) {
        $font_url = 'https://fonts.googleapis.com/css2?family=' . str_replace( ' ', '+', $font );
        wp_enqueue_style( 'subtitle-google-font', $font_url, [], null );
    }
}
add_action( 'wp_enqueue_scripts', 'altimate_enqueue_selected_google_font' );



function altimate_gutenberg_block_enqueue_assets() {
    $handle = 'altimate-block-editor';

    wp_enqueue_script(
        $handle,
        plugins_url( 'build/index.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-editor' ),
        '1.0.0'
    );

    
    wp_localize_script(
        $handle,
        'AltimateBlockConfig',
        array(
            'googleFontsApiKey' => getenv('GOOGLE_FONTS_API_KEY') ?: ''
        )
    );
}
add_action( 'enqueue_block_editor_assets', 'altimate_gutenberg_block_enqueue_assets' );

