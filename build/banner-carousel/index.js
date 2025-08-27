/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/banner-carousel/block.json":
/*!****************************************!*\
  !*** ./src/banner-carousel/block.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/altimate-banner-carousel","version":"1.0.0","title":"Altimate Banner Carousel Pro","category":"altimate","icon":"slides","description":"A highly customizable & responsive plugin for gutenberg.","example":{},"supports":{"html":false,"align":["wide","full"],"typography":{"fontSize":true,"lineHeight":true,"fontWeight":true,"letterSpacing":true,"textTransform":true,"fontStyle":true,"textDecoration":true}},"attributes":{"slides":{"type":"array","default":[{"id":1,"image":"","title":"SLIDER TITLE","content":"Slider CONTENT","buttonOneText":"BUTTON ONE","buttonOneUrl":"#","buttonTwoText":"BUTTON TWO","buttonTwoUrl":"#"}]},"socialIcons":{"type":"array","default":[],"items":{"type":"object","properties":{"icon":{"type":"string","default":""},"label":{"type":"string","default":""},"url":{"type":"string","default":""},"openInNewTab":{"type":"boolean","default":false}}}},"skins":{"type":"string","default":"default"},"slidesby":{"type":"number","default":1},"slideSpeed":{"type":"number","default":300},"zIndex":{"type":"number","default":1},"autoplay":{"type":"boolean","default":true},"autoplaySpeed":{"type":"number","default":3000},"loop":{"type":"boolean","default":true},"showDots":{"type":"boolean","default":true},"showIcons":{"type":"boolean","default":true},"showArrows":{"type":"boolean","default":true},"adaptiveHeight":{"type":"boolean","default":true},"padding":{"type":"object","default":{"top":"0px","right":"0px","bottom":"0px","left":"0px"}},"margin":{"type":"object","default":{"top":"0px","right":"0px","bottom":"0px","left":"0px"}},"horizontalAlignment":{"type":"string","default":"center"},"verticalAlignment":{"type":"string","default":"center"},"sliderHeight":{"type":"string","default":"400px"},"unit":{"type":"string","default":"px","enum":["px","em","%","vh"]},"sliderWidth":{"type":"string","default":"100%"},"gap":{"type":"string","default":"0px"},"subtitleColor":{"type":"string","default":"#000000"},"subtitleFontFamily":{"type":"string","default":"inherit"},"subtitleFontSize":{"type":"string","default":"16px"},"subtitleLineHeight":{"type":"number","default":1.5},"subtitleLetterSpacing":{"type":"number","default":1.5},"subtitleWordSpacing":{"type":"number","default":1},"subtitleFontWeight":{"type":"string","default":"400"},"subtitleTextTransform":{"type":"string","default":"none"},"subtitleTextDecoration":{"type":"string","default":"none"},"titleColor":{"type":"string","default":"#ffffff"},"titleTypography":{"type":"object","default":{"fontFamily":"inherit","fontSize":"48px","fontWeight":"700","textTransform":"uppercase","fontStyle":"normal","textDecoration":"none","lineHeight":"1.2","letterSpacing":"2px","wordSpacing":"0px"}},"contentColor":{"type":"string","default":"#ffffff"},"contentTypography":{"type":"object","default":{"fontFamily":"inherit","fontSize":"18px","fontWeight":"400","textTransform":"none","fontStyle":"normal","textDecoration":"none","lineHeight":"1.6","letterSpacing":"0px","wordSpacing":"0px"}},"primaryButtonColor":{"type":"string","default":"#333333"},"primaryButtonBackgroundColor":{"type":"string","default":"rgba(255,255,255,0.9)"},"primaryButtonIconBgColor":{"type":"string","default":"#333333"},"primaryButtonIconColor":{"type":"string","default":"#ffffff"},"primaryButtonTypography":{"type":"object","default":{"fontFamily":"inherit","fontSize":"14px","fontWeight":"600","textTransform":"none","fontStyle":"normal","textDecoration":"none","lineHeight":"1.4","letterSpacing":"0px","wordSpacing":"0px"}},"secondaryButtonColor":{"type":"string","default":"#ffffff"},"secondaryButtonBackgroundColor":{"type":"string","default":"rgba(0,0,0,0.8)"},"secondaryButtonIconBgColor":{"type":"string","default":"#4ECDC4"},"secondaryButtonIconColor":{"type":"string","default":"#ffffff"},"secondaryButtonTypography":{"type":"object","default":{"fontFamily":"inherit","fontSize":"14px","fontWeight":"600","textTransform":"none","fontStyle":"normal","textDecoration":"none","lineHeight":"1.4","letterSpacing":"0px","wordSpacing":"0px"}},"buttonBorderRadius":{"type":"string","default":"25px"},"buttonPadding":{"type":"object","default":{"top":"12px","right":"30px","bottom":"12px","left":"30px"}},"buttonIconPadding":{"type":"string","default":"10px"},"buttonIconBorderRadius":{"type":"string","default":"50%"},"navBackgroundColor":{"type":"string","default":"rgba(255,255,255,0.8)"},"navIconColor":{"type":"string","default":"#333333"},"navHoverBackgroundColor":{"type":"string","default":"rgba(255,255,255,1)"},"navHoverIconColor":{"type":"string","default":"#000000"},"dotBackgroundColor":{"type":"string","default":"#cccccc"},"dotActiveColor":{"type":"string","default":"#4ECDC4"},"dotHoverBackgroundColor":{"type":"string","default":"#999999"}},"textdomain":"altimate-gutenberg-carousel-pro","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ }),

/***/ "./src/banner-carousel/edit.js":
/*!*************************************!*\
  !*** ./src/banner-carousel/edit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/banner-carousel/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/banner-carousel/style.scss");
/* harmony import */ var _components_TabsComponents_Tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TabsComponents/Tabs */ "./src/components/TabsComponents/Tabs.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







function Edit({
  attributes,
  setAttributes
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: "Slider",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_TabsComponents_Tabs__WEBPACK_IMPORTED_MODULE_5__["default"], {
          attributes: attributes,
          setAttributes: setAttributes
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(),
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Altimate Banner Carousel – hello from the editor!', 'altimate-banner-carousel')
    })]
  });
}

/***/ }),

/***/ "./src/banner-carousel/editor.scss":
/*!*****************************************!*\
  !*** ./src/banner-carousel/editor.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/banner-carousel/index.js":
/*!**************************************!*\
  !*** ./src/banner-carousel/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/banner-carousel/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/banner-carousel/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/banner-carousel/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/banner-carousel/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/banner-carousel/save.js":
/*!*************************************!*\
  !*** ./src/banner-carousel/save.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

function save() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(),
    children: 'Altimate Gutenberg Carousel – hello from the saved content!'
  });
}

/***/ }),

/***/ "./src/banner-carousel/style.scss":
/*!****************************************!*\
  !*** ./src/banner-carousel/style.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Panels/AdvancedPanel.js":
/*!************************************************!*\
  !*** ./src/components/Panels/AdvancedPanel.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

// AdvancedPanel.js
const AdvancedPanel = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
  children: "Advanced Settings Here"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvancedPanel);

/***/ }),

/***/ "./src/components/Panels/ContentPanel.js":
/*!***********************************************!*\
  !*** ./src/components/Panels/ContentPanel.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TabsComponents_Slides__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TabsComponents/Slides */ "./src/components/TabsComponents/Slides.js");
/* harmony import */ var _Skins_DefaultSkin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Skins/DefaultSkin */ "./src/components/Skins/DefaultSkin.js");
/* harmony import */ var _Skins_ClassicSkin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Skins/ClassicSkin */ "./src/components/Skins/ClassicSkin.js");
/* harmony import */ var _Skins_ExclusiveSkin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Skins/ExclusiveSkin */ "./src/components/Skins/ExclusiveSkin.js");
/* harmony import */ var _Skins_StandardSkin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Skins/StandardSkin */ "./src/components/Skins/StandardSkin.js");
/* harmony import */ var _Skins_SuperiorSkin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Skins/SuperiorSkin */ "./src/components/Skins/SuperiorSkin.js");
/* harmony import */ var _Skins_AdvancedSkin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Skins/AdvancedSkin */ "./src/components/Skins/AdvancedSkin.js");
/* harmony import */ var _TabsComponents_SlidesSettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../TabsComponents/SlidesSettings */ "./src/components/TabsComponents/SlidesSettings.js");
/* harmony import */ var _SocialIconsPanel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SocialIconsPanel */ "./src/components/Panels/SocialIconsPanel.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);












const ContentPanel = ({
  attributes,
  setAttributes
}) => {
  const [selectedSkin, setSelectedSkin] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('default');
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('slides');
  const renderTab = () => {
    switch (activeTab) {
      case 'slides':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_TabsComponents_Slides__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attributes: attributes,
          setAttributes: setAttributes
        });
      case 'settings':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_TabsComponents_SlidesSettings__WEBPACK_IMPORTED_MODULE_9__["default"], {
          attributes: attributes,
          setAttributes: setAttributes
        });
      default:
        return null;
    }
  };
  const renderSkinComponent = () => {
    switch (selectedSkin) {
      case 'default':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Skins_DefaultSkin__WEBPACK_IMPORTED_MODULE_3__["default"], {});
      case 'classic':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Skins_ClassicSkin__WEBPACK_IMPORTED_MODULE_4__["default"], {});
      case 'exclusive':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Skins_ExclusiveSkin__WEBPACK_IMPORTED_MODULE_5__["default"], {});
      case 'standard':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Skins_StandardSkin__WEBPACK_IMPORTED_MODULE_6__["default"], {});
      case 'superior':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Skins_SuperiorSkin__WEBPACK_IMPORTED_MODULE_7__["default"], {});
      case 'advance':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Skins_AdvancedSkin__WEBPACK_IMPORTED_MODULE_8__["default"], {});
      default:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Skins_DefaultSkin__WEBPACK_IMPORTED_MODULE_3__["default"], {});
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: "Slider Settings",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "agc-slider-settings",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "agc-skin-container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("label", {
            htmlFor: "skin-select",
            children: "Skins:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
            value: selectedSkin,
            options: [{
              label: 'Default',
              value: 'default'
            }, {
              label: 'Classic',
              value: 'classic'
            }, {
              label: 'Exclusive',
              value: 'exclusive'
            }, {
              label: 'Standard',
              value: 'standard'
            }, {
              label: 'Superior',
              value: 'superior'
            }, {
              label: 'Advance',
              value: 'advance'
            }],
            onChange: value => setSelectedSkin(value)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          children: renderSkinComponent()
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "agc-slider-tab-container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            className: "agc-slider-tab-button",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("button", {
              className: activeTab === 'slides' ? 'active' : '',
              onClick: () => setActiveTab('slides'),
              children: "Slides"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("button", {
              className: activeTab === 'settings' ? 'active' : '',
              onClick: () => setActiveTab('settings'),
              children: "Settings"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
            className: "agc-slider-tab-content",
            children: renderTab()
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: "Social Icon Settings",
      initialOpen: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_SocialIconsPanel__WEBPACK_IMPORTED_MODULE_10__["default"], {
        attributes: attributes,
        setAttributes: setAttributes
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentPanel);

/***/ }),

/***/ "./src/components/Panels/SocialIconsPanel.js":
/*!***************************************************!*\
  !*** ./src/components/Panels/SocialIconsPanel.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const SocialIconsPanel = ({
  attributes,
  setAttributes
}) => {
  const {
    socialIcons = []
  } = attributes;
  const addNewIcon = () => {
    setAttributes({
      socialIcons: [...socialIcons, {
        icon: "",
        label: "",
        url: "",
        openInNewTab: false
      }]
    });
  };
  const updateIcon = (index, field, value) => {
    const updatedIcons = socialIcons.map((icon, i) => i === index ? {
      ...icon,
      [field]: value
    } : icon);
    setAttributes({
      socialIcons: updatedIcons
    });
  };
  const removeIcon = index => {
    const filteredIcons = socialIcons.filter((_, i) => i !== index);
    setAttributes({
      socialIcons: filteredIcons
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [socialIcons.map((iconItem, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
      style: {
        marginBottom: 10
      },
      title: iconItem.label ? iconItem.label : `Social Icon ${index + 1}`,
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: "Icon Class",
        value: iconItem.icon,
        onChange: value => updateIcon(index, "icon", value),
        help: "Example: fab fa-facebook"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: "Label",
        value: iconItem.label,
        onChange: value => updateIcon(index, "label", value)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: "URL",
        value: iconItem.url,
        onChange: value => updateIcon(index, "url", value)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "agc-toggle-button-color",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
          label: "Open in New Tab",
          checked: iconItem.openInNewTab,
          onChange: value => updateIcon(index, "openInNewTab", value)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        isDestructive: true,
        onClick: () => removeIcon(index),
        children: "Remove"
      })]
    }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
      isPrimary: true,
      onClick: addNewIcon,
      children: "Add Social Icon"
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialIconsPanel);

/***/ }),

/***/ "./src/components/Panels/StylePanel.js":
/*!*********************************************!*\
  !*** ./src/components/Panels/StylePanel.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Settings_ContentDesignSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Settings/ContentDesignSettings */ "./src/components/Settings/ContentDesignSettings.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const StylePanel = ({
  attributes,
  setAttributes
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: "Content Design Settings",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Settings_ContentDesignSettings__WEBPACK_IMPORTED_MODULE_2__["default"], {
        attributes: attributes,
        setAttributes: setAttributes
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StylePanel);

/***/ }),

/***/ "./src/components/Settings/ContentDesignSettings.js":
/*!**********************************************************!*\
  !*** ./src/components/Settings/ContentDesignSettings.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GoogleFontsPicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GoogleFontsPicker */ "./src/components/Settings/GoogleFontsPicker.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const ContentDesignSettings = ({
  attributes,
  setAttributes
}) => {
  const {
    padding,
    horizontalAlignment,
    verticalAlignment,
    sliderHeight,
    unit,
    sliderWidth,
    gap,
    subtitleColor,
    subtitleFontFamily,
    subtitleFontSize,
    subtitleFontStyle,
    subtitleLineHeight,
    subtitleFontWeight,
    subtitleLetterSpacing,
    subtitleTextTransform,
    subtitleTextDecoration,
    subtitleWordSpacing
  } = attributes;
  const updateHorizontalAlignment = newAlign => {
    setAttributes({
      horizontalAlignment: newAlign
    });
  };
  const updateVerticalAlignment = newAlign => {
    setAttributes({
      verticalAlignment: newAlign
    });
  };
  const colors = [{
    name: "Black",
    color: "#000000"
  }, {
    name: "White",
    color: "#ffffff"
  }, {
    name: "Blue",
    color: "#007cba"
  }, {
    name: "Red",
    color: "#cc1818"
  }, {
    name: "Green",
    color: "#46b450"
  }, {
    name: "Yellow",
    color: "#ffb900"
  }, {
    name: "Orange",
    color: "#f56e28"
  }, {
    name: "Purple",
    color: "#826eb4"
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "agc-slider-settings",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalBoxControl, {
        label: "Padding",
        values: padding,
        onChange: value => setAttributes({
          padding: value
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "agc-horizontal-alignment",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          children: "Horizontal Alignment"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ButtonGroup, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            isPrimary: horizontalAlignment === "left",
            onClick: () => updateHorizontalAlignment("left"),
            title: "Left",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
              class: "fas fa-align-left"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            isPrimary: horizontalAlignment === "center",
            onClick: () => updateHorizontalAlignment("center"),
            title: "Center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
              class: "fas fa-align-center"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            isPrimary: horizontalAlignment === "right",
            onClick: () => updateHorizontalAlignment("right"),
            title: "Right",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
              class: "fas fa-align-right"
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "agc-vertical-alignment",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          children: "Vertical Alignment"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ButtonGroup, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            isPrimary: verticalAlignment === "top",
            onClick: () => updateVerticalAlignment("top"),
            title: "Top",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
              className: "fas fa-long-arrow-alt-up"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            isPrimary: verticalAlignment === "center",
            onClick: () => updateVerticalAlignment("center"),
            title: "Center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
              className: "fa-solid fa-arrows-up-down"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            isPrimary: verticalAlignment === "bottom",
            onClick: () => updateVerticalAlignment("bottom"),
            title: "Bottom",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
              className: "fa-solid fa-long-arrow-alt-down"
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "agc-slider-height",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
          label: "Height",
          value: sliderHeight,
          onChange: value => setAttributes({
            sliderHeight: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
          label: "Slider Height Unit",
          value: unit,
          options: [{
            label: "Pixels (px)",
            value: "px"
          }, {
            label: "Em",
            value: "em"
          }, {
            label: "Percent (%)",
            value: "%"
          }, {
            label: "Viewport Height (vh)",
            value: "vh"
          }],
          onChange: value => setAttributes({
            unit: value
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "agc-slider-width",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
          label: "Slider Width",
          value: sliderWidth,
          onChange: value => setAttributes({
            sliderWidth: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
          label: "Slider Width Unit",
          value: unit,
          options: [{
            label: "Pixels (px)",
            value: "px"
          }, {
            label: "Em",
            value: "em"
          }, {
            label: "Percent (%)",
            value: "%"
          }, {
            label: "Viewport Height (vh)",
            value: "vh"
          }],
          onChange: value => setAttributes({
            unit: value
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "agc-slider-gap",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
          label: "Gap",
          value: gap,
          onChange: value => setAttributes({
            gap: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
          label: "Slider Gap Unit",
          value: unit,
          options: [{
            label: "Pixels (px)",
            value: "px"
          }, {
            label: "Em",
            value: "em"
          }, {
            label: "Percent (%)",
            value: "%"
          }, {
            label: "Viewport Height (vh)",
            value: "vh"
          }],
          onChange: value => setAttributes({
            unit: value
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "agc-title-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          children: "Sub Title Color"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPalette, {
          label: "Sub Title Color",
          colors: colors,
          value: subtitleColor,
          onChange: value => setAttributes({
            subtitleColor: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
          title: "Subtitle Typography",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_GoogleFontsPicker__WEBPACK_IMPORTED_MODULE_2__["default"], {
            value: subtitleFontFamily,
            onChange: value => setAttributes({
              subtitleFontFamily: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
            label: "Font Weight",
            value: subtitleFontWeight,
            options: [{
              label: "Default",
              value: ""
            }, {
              label: "100",
              value: "100"
            }, {
              label: "200",
              value: "200"
            }, {
              label: "300",
              value: "300"
            }, {
              label: "400",
              value: "400"
            }, {
              label: "500",
              value: "500"
            }, {
              label: "600",
              value: "600"
            }, {
              label: "700",
              value: "700"
            }, {
              label: "800",
              value: "800"
            }, {
              label: "900",
              value: "900"
            }],
            onChange: value => setAttributes({
              subtitleFontWeight: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
            label: "Text Transform",
            value: subtitleTextTransform,
            options: [{
              label: "None",
              value: "none"
            }, {
              label: "Uppercase",
              value: "uppercase"
            }, {
              label: "Lowercase",
              value: "lowercase"
            }, {
              label: "Capitalize",
              value: "capitalize"
            }],
            onChange: value => setAttributes({
              subtitleTextTransform: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
            label: "Font Style",
            value: subtitleFontStyle,
            options: [{
              label: "Normal",
              value: "normal"
            }, {
              label: "Italic",
              value: "italic"
            }],
            onChange: value => setAttributes({
              subtitleFontStyle: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
            label: "Text Decoration",
            value: subtitleTextDecoration,
            options: [{
              label: "None",
              value: "none"
            }, {
              label: "Underline",
              value: "underline"
            }, {
              label: "Line Through",
              value: "line-through"
            }, {
              label: "Overline",
              value: "overline"
            }],
            onChange: value => setAttributes({
              subtitleTextDecoration: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
            label: "Line Height",
            value: subtitleLineHeight,
            onChange: value => setAttributes({
              subtitleLineHeight: value
            }),
            min: 1,
            max: 10,
            step: 0.1
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
            label: "Letter Spacing",
            value: subtitleLetterSpacing,
            onChange: value => setAttributes({
              subtitleLetterSpacing: value
            }),
            min: 1,
            max: 10,
            step: 0.1
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
            label: "Word Spacing",
            value: subtitleWordSpacing,
            onChange: value => setAttributes({
              subtitleWordSpacing: value
            }),
            min: 0,
            max: 20,
            step: 0.5
          })]
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentDesignSettings);

/***/ }),

/***/ "./src/components/Settings/GoogleFontsPicker.js":
/*!******************************************************!*\
  !*** ./src/components/Settings/GoogleFontsPicker.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const GoogleFontsPicker = ({
  value,
  onChange
}) => {
  const [fonts, setFonts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([{
    label: "Default",
    value: "inherit"
  }]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetch("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBgSgk9ol_8AwY9pnetoR2_KBY7GJlxnLE&sort=popularity").then(res => res.json()).then(data => {
      const fontOptions = data.items.slice(0, 50).map(font => ({
        label: font.family,
        value: font.family
      }));
      setFonts(prev => [...prev, ...fontOptions]);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
    label: "Font Family",
    value: value,
    options: fonts,
    onChange: onChange
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoogleFontsPicker);

/***/ }),

/***/ "./src/components/Skins/AdvancedSkin.js":
/*!**********************************************!*\
  !*** ./src/components/Skins/AdvancedSkin.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const AdvancedSkin = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
    children: "Avanced Skin selected"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvancedSkin);

/***/ }),

/***/ "./src/components/Skins/ClassicSkin.js":
/*!*********************************************!*\
  !*** ./src/components/Skins/ClassicSkin.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const CLassicSkin = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
    children: "Classic Skin Selected"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CLassicSkin);

/***/ }),

/***/ "./src/components/Skins/DefaultSkin.js":
/*!*********************************************!*\
  !*** ./src/components/Skins/DefaultSkin.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const DefaultSkin = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
    children: "Default Skin Selected"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultSkin);

/***/ }),

/***/ "./src/components/Skins/ExclusiveSkin.js":
/*!***********************************************!*\
  !*** ./src/components/Skins/ExclusiveSkin.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ExclusiveSkin = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
    children: "Exclusive skin selected"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExclusiveSkin);

/***/ }),

/***/ "./src/components/Skins/StandardSkin.js":
/*!**********************************************!*\
  !*** ./src/components/Skins/StandardSkin.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const StandardSkin = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
    children: "Standard Skin selected"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StandardSkin);

/***/ }),

/***/ "./src/components/Skins/SuperiorSkin.js":
/*!**********************************************!*\
  !*** ./src/components/Skins/SuperiorSkin.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const SuperiorSkin = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
    children: "Superior skin selected"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SuperiorSkin);

/***/ }),

/***/ "./src/components/TabsComponents/Slides.js":
/*!*************************************************!*\
  !*** ./src/components/TabsComponents/Slides.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const Slides = ({
  attributes,
  setAttributes
}) => {
  const {
    showIcons
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "agc-toggle-button-color",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
        label: "Show Button Icons",
        checked: showIcons,
        onChange: value => setAttributes({
          showIcons: value
        })
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slides);

/***/ }),

/***/ "./src/components/TabsComponents/SlidesSettings.js":
/*!*********************************************************!*\
  !*** ./src/components/TabsComponents/SlidesSettings.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const SlidesSettings = ({
  attributes,
  setAttributes
}) => {
  const {
    slidesby,
    slideSpeed,
    zIndex,
    autoplay,
    autoplaySpeed,
    loop,
    showArrows,
    showDots,
    adaptiveHeight
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
      label: "Slides By:",
      value: slidesby,
      onChange: value => setAttributes({
        slidesby: value
      }),
      min: 1,
      max: 300,
      step: 1
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
      label: "Slide Speed:",
      value: slideSpeed,
      onChange: value => setAttributes({
        slideSpeed: value
      }),
      min: 100,
      max: 3000,
      step: 100
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
      label: "Z-index:",
      value: zIndex,
      onChange: value => setAttributes({
        zIndex: value
      }),
      min: -10,
      max: 9999,
      step: 1
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
      label: "Autoplay",
      checked: autoplay,
      onChange: value => setAttributes({
        autoplay: value
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
      label: "Autoplay Speed:",
      value: autoplaySpeed,
      onChange: value => setAttributes({
        autoplaySpeed: value
      }),
      min: 500,
      max: 10000,
      step: 100
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
      label: "Loop",
      checked: loop,
      onChange: value => setAttributes({
        loop: value
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
      label: "Show Next/Prev",
      checked: showArrows,
      onChange: value => setAttributes({
        showArrows: value
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
      label: "Show Dots",
      checked: showDots,
      onChange: value => setAttributes({
        showDots: value
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
      label: "Adaptive Height",
      checked: adaptiveHeight,
      onChange: value => setAttributes({
        adaptiveHeight: value
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SlidesSettings);

/***/ }),

/***/ "./src/components/TabsComponents/Tabs.js":
/*!***********************************************!*\
  !*** ./src/components/TabsComponents/Tabs.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Panels_ContentPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Panels/ContentPanel */ "./src/components/Panels/ContentPanel.js");
/* harmony import */ var _Panels_StylePanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Panels/StylePanel */ "./src/components/Panels/StylePanel.js");
/* harmony import */ var _Panels_AdvancedPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Panels/AdvancedPanel */ "./src/components/Panels/AdvancedPanel.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const Tabs = ({
  attributes,
  setAttributes
}) => {
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('content');
  const renderPanel = () => {
    switch (activeTab) {
      case 'content':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Panels_ContentPanel__WEBPACK_IMPORTED_MODULE_1__["default"], {
          attributes: attributes,
          setAttributes: setAttributes
        });
      case 'style':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Panels_StylePanel__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attributes: attributes,
          setAttributes: setAttributes
        });
      case 'advanced':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Panels_AdvancedPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
          attributes: attributes,
          setAttributes: setAttributes
        });
      default:
        return null;
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "altimate-gutenberg-tabs-wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "altimate-gutenberg-tabs-header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        className: activeTab === 'content' ? 'active' : '',
        onClick: () => setActiveTab('content'),
        children: "Content"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        className: activeTab === 'style' ? 'active' : '',
        onClick: () => setActiveTab('style'),
        children: "Style"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        className: activeTab === 'advanced' ? 'active' : '',
        onClick: () => setActiveTab('advanced'),
        children: "Advanced"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "altimate-gutenberg-tab-panel",
      children: renderPanel()
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"banner-carousel/index": 0,
/******/ 			"banner-carousel/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkaltimate_gutenberg_carousel"] = globalThis["webpackChunkaltimate_gutenberg_carousel"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["banner-carousel/style-index"], () => (__webpack_require__("./src/banner-carousel/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map