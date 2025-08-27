<?php
// This file is generated. Do not modify it manually.
return array(
	'altimate-gutenberg-carousel' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/altimate-gutenberg-carousel',
		'version' => '0.1.0',
		'title' => 'Altimate Gutenberg Carousel',
		'category' => 'altimate',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'altimate-gutenberg-carousel',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'banner-carousel' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/altimate-banner-carousel',
		'version' => '1.0.0',
		'title' => 'Altimate Banner Carousel Pro',
		'category' => 'altimate',
		'icon' => 'slides',
		'description' => 'A highly customizable & responsive plugin for gutenberg.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'fontWeight' => true,
				'letterSpacing' => true,
				'textTransform' => true,
				'fontStyle' => true,
				'textDecoration' => true
			)
		),
		'attributes' => array(
			'slides' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 1,
						'image' => '',
						'title' => 'SLIDER TITLE',
						'content' => 'Slider CONTENT',
						'buttonOneText' => 'BUTTON ONE',
						'buttonOneUrl' => '#',
						'buttonTwoText' => 'BUTTON TWO',
						'buttonTwoUrl' => '#'
					)
				)
			),
			'socialIcons' => array(
				'type' => 'array',
				'default' => array(
					
				),
				'items' => array(
					'type' => 'object',
					'properties' => array(
						'icon' => array(
							'type' => 'string',
							'default' => ''
						),
						'label' => array(
							'type' => 'string',
							'default' => ''
						),
						'url' => array(
							'type' => 'string',
							'default' => ''
						),
						'openInNewTab' => array(
							'type' => 'boolean',
							'default' => false
						)
					)
				)
			),
			'skins' => array(
				'type' => 'string',
				'default' => 'default'
			),
			'slidesby' => array(
				'type' => 'number',
				'default' => 1
			),
			'slideSpeed' => array(
				'type' => 'number',
				'default' => 300
			),
			'zIndex' => array(
				'type' => 'number',
				'default' => 1
			),
			'autoplay' => array(
				'type' => 'boolean',
				'default' => true
			),
			'autoplaySpeed' => array(
				'type' => 'number',
				'default' => 3000
			),
			'loop' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showDots' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showIcons' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showArrows' => array(
				'type' => 'boolean',
				'default' => true
			),
			'adaptiveHeight' => array(
				'type' => 'boolean',
				'default' => true
			),
			'padding' => array(
				'type' => 'object',
				'default' => array(
					'top' => '0px',
					'right' => '0px',
					'bottom' => '0px',
					'left' => '0px'
				)
			),
			'margin' => array(
				'type' => 'object',
				'default' => array(
					'top' => '0px',
					'right' => '0px',
					'bottom' => '0px',
					'left' => '0px'
				)
			),
			'horizontalAlignment' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'verticalAlignment' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'sliderHeight' => array(
				'type' => 'string',
				'default' => '400px'
			),
			'unit' => array(
				'type' => 'string',
				'default' => 'px',
				'enum' => array(
					'px',
					'em',
					'%',
					'vh'
				)
			),
			'sliderWidth' => array(
				'type' => 'string',
				'default' => '100%'
			),
			'gap' => array(
				'type' => 'string',
				'default' => '0px'
			),
			'subtitleColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'subtitleFontFamily' => array(
				'type' => 'string',
				'default' => 'inherit'
			),
			'subtitleFontSize' => array(
				'type' => 'string',
				'default' => '16px'
			),
			'subtitleLineHeight' => array(
				'type' => 'number',
				'default' => 1.5
			),
			'subtitleLetterSpacing' => array(
				'type' => 'number',
				'default' => 1.5
			),
			'subtitleWordSpacing' => array(
				'type' => 'number',
				'default' => 1
			),
			'subtitleFontWeight' => array(
				'type' => 'string',
				'default' => '400'
			),
			'subtitleTextTransform' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'subtitleTextDecoration' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'titleTypography' => array(
				'type' => 'object',
				'default' => array(
					'fontFamily' => 'inherit',
					'fontSize' => '48px',
					'fontWeight' => '700',
					'textTransform' => 'uppercase',
					'fontStyle' => 'normal',
					'textDecoration' => 'none',
					'lineHeight' => '1.2',
					'letterSpacing' => '2px',
					'wordSpacing' => '0px'
				)
			),
			'contentColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'contentTypography' => array(
				'type' => 'object',
				'default' => array(
					'fontFamily' => 'inherit',
					'fontSize' => '18px',
					'fontWeight' => '400',
					'textTransform' => 'none',
					'fontStyle' => 'normal',
					'textDecoration' => 'none',
					'lineHeight' => '1.6',
					'letterSpacing' => '0px',
					'wordSpacing' => '0px'
				)
			),
			'primaryButtonColor' => array(
				'type' => 'string',
				'default' => '#333333'
			),
			'primaryButtonBackgroundColor' => array(
				'type' => 'string',
				'default' => 'rgba(255,255,255,0.9)'
			),
			'primaryButtonIconBgColor' => array(
				'type' => 'string',
				'default' => '#333333'
			),
			'primaryButtonIconColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'primaryButtonTypography' => array(
				'type' => 'object',
				'default' => array(
					'fontFamily' => 'inherit',
					'fontSize' => '14px',
					'fontWeight' => '600',
					'textTransform' => 'none',
					'fontStyle' => 'normal',
					'textDecoration' => 'none',
					'lineHeight' => '1.4',
					'letterSpacing' => '0px',
					'wordSpacing' => '0px'
				)
			),
			'secondaryButtonColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'secondaryButtonBackgroundColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.8)'
			),
			'secondaryButtonIconBgColor' => array(
				'type' => 'string',
				'default' => '#4ECDC4'
			),
			'secondaryButtonIconColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'secondaryButtonTypography' => array(
				'type' => 'object',
				'default' => array(
					'fontFamily' => 'inherit',
					'fontSize' => '14px',
					'fontWeight' => '600',
					'textTransform' => 'none',
					'fontStyle' => 'normal',
					'textDecoration' => 'none',
					'lineHeight' => '1.4',
					'letterSpacing' => '0px',
					'wordSpacing' => '0px'
				)
			),
			'buttonBorderRadius' => array(
				'type' => 'string',
				'default' => '25px'
			),
			'buttonPadding' => array(
				'type' => 'object',
				'default' => array(
					'top' => '12px',
					'right' => '30px',
					'bottom' => '12px',
					'left' => '30px'
				)
			),
			'buttonIconPadding' => array(
				'type' => 'string',
				'default' => '10px'
			),
			'buttonIconBorderRadius' => array(
				'type' => 'string',
				'default' => '50%'
			),
			'navBackgroundColor' => array(
				'type' => 'string',
				'default' => 'rgba(255,255,255,0.8)'
			),
			'navIconColor' => array(
				'type' => 'string',
				'default' => '#333333'
			),
			'navHoverBackgroundColor' => array(
				'type' => 'string',
				'default' => 'rgba(255,255,255,1)'
			),
			'navHoverIconColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'dotBackgroundColor' => array(
				'type' => 'string',
				'default' => '#cccccc'
			),
			'dotActiveColor' => array(
				'type' => 'string',
				'default' => '#4ECDC4'
			),
			'dotHoverBackgroundColor' => array(
				'type' => 'string',
				'default' => '#999999'
			)
		),
		'textdomain' => 'altimate-gutenberg-carousel-pro',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
