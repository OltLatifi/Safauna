/*! For license information please see src_components_AllPosts_js.js.LICENSE.txt */
(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([["src_components_AllPosts_js"],{"./src/components/AllPosts.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");\n;\n\nconst Navbar = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_material-ui_core_esm_ButtonBase_ButtonBase_js-node_modules_material-ui_c-230e9c"), __webpack_require__.e("vendors-node_modules_axios_index_js"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_Button_Button_js-node_modules_material-ui_core_esm_-2c3cfc"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_AppBar_AppBar_js-node_modules_material-ui_core_esm_-5cdcd8"), __webpack_require__.e("src_components_Navbar_js-_db4b0")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Navbar */ "./src/components/Navbar.js")));\nconst Post = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_material-ui_core_esm_ButtonBase_ButtonBase_js-node_modules_material-ui_c-230e9c"), __webpack_require__.e("vendors-node_modules_material-ui_core_esm_CardActionArea_CardActionArea_js-node_modules_mater-b6022e"), __webpack_require__.e("src_components_Post_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Post */ "./src/components/Post.js")));\n\nconst renderLoader = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Loading");\n\nfunction AllPosts() {\n  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    getData();\n  }, []);\n\n  function getData() {\n    fetch(\'/api/posts/\').then(response => {\n      return response.json();\n    }).then(json => {\n      setData(json);\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n    fallback: renderLoader()\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Navbar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    style: {\n      marginLeft: \'2%\'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__.default, {\n    variant: "h4",\n    component: "h5",\n    style: {\n      marginLeft: \'1%\'\n    }\n  }, "Te gjitha kafshet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "Home"\n  }, data.map((posts, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {\n    href: \'/posts/\' + posts.id,\n    style: {\n      margin: \'2% 1%\'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Post, {\n    name: posts.name.slice(0, 21),\n    description: posts.description,\n    features: posts.features.slice(0, 31) + \'...\',\n    city: posts.city,\n    reward: posts.reward,\n    image: posts.photo\n  })))))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllPosts);\n\n//# sourceURL=webpack://frontend/./src/components/AllPosts.js?')}}]);