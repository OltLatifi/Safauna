/*! For license information please see src_components_ComposePost_js.js.LICENSE.txt */
(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([["src_components_ComposePost_js"],{"./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "styles": () => /* binding */ styles,\n/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");\n/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");\n/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ListItem */ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js");\n;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar styles = function styles(theme) {\r\n  return {\r\n    /* Styles applied to the root element. */\r\n    root: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__.default)({}, theme.typography.body1, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({\r\n      minHeight: 48,\r\n      paddingTop: 6,\r\n      paddingBottom: 6,\r\n      boxSizing: \'border-box\',\r\n      width: \'auto\',\r\n      overflow: \'hidden\',\r\n      whiteSpace: \'nowrap\'\r\n    }, theme.breakpoints.up(\'sm\'), {\r\n      minHeight: \'auto\'\r\n    })),\r\n    // TODO v5: remove\r\n\r\n    /* Styles applied to the root element if `disableGutters={false}`. */\r\n    gutters: {},\r\n\r\n    /* Styles applied to the root element if `selected={true}`. */\r\n    selected: {},\r\n\r\n    /* Styles applied to the root element if dense. */\r\n    dense: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__.default)({}, theme.typography.body2, {\r\n      minHeight: \'auto\'\r\n    })\r\n  };\r\n};\r\nvar MenuItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function MenuItem(props, ref) {\r\n  var classes = props.classes,\r\n      className = props.className,\r\n      _props$component = props.component,\r\n      component = _props$component === void 0 ? \'li\' : _props$component,\r\n      _props$disableGutters = props.disableGutters,\r\n      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,\r\n      ListItemClasses = props.ListItemClasses,\r\n      _props$role = props.role,\r\n      role = _props$role === void 0 ? \'menuitem\' : _props$role,\r\n      selected = props.selected,\r\n      tabIndexProp = props.tabIndex,\r\n      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(props, ["classes", "className", "component", "disableGutters", "ListItemClasses", "role", "selected", "tabIndex"]);\r\n\r\n  var tabIndex;\r\n\r\n  if (!props.disabled) {\r\n    tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;\r\n  }\r\n\r\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_ListItem__WEBPACK_IMPORTED_MODULE_6__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__.default)({\r\n    button: true,\r\n    role: role,\r\n    tabIndex: tabIndex,\r\n    component: component,\r\n    selected: selected,\r\n    disableGutters: disableGutters,\r\n    classes: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__.default)({\r\n      dense: classes.dense\r\n    }, ListItemClasses),\r\n    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__.default)(classes.root, className, selected && classes.selected, !disableGutters && classes.gutters),\r\n    ref: ref\r\n  }, other));\r\n});\r\n false ? 0 : void 0;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__.default)(styles, {\r\n  name: \'MuiMenuItem\'\r\n})(MenuItem));\n\n//# sourceURL=webpack://frontend/./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js?')},"./node_modules/@material-ui/icons/PhotoCamera.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";eval('\r\n\r\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");\r\n\r\nObject.defineProperty(exports, "__esModule", ({\r\n  value: true\r\n}));\r\nexports.default = void 0;\r\n\r\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));\r\n\r\nvar _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));\r\n\r\nvar _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("circle", {\r\n  cx: "12",\r\n  cy: "12",\r\n  r: "3.2"\r\n}), _react.default.createElement("path", {\r\n  d: "M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"\r\n})), \'PhotoCamera\');\r\n\r\nexports.default = _default;\n\n//# sourceURL=webpack://frontend/./node_modules/@material-ui/icons/PhotoCamera.js?')},"./src/components/ComposePost.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");\n/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/PhotoCamera */ "./node_modules/@material-ui/icons/PhotoCamera.js");\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./src/components/Navbar.js");\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Post */ "./src/components/Post.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n;\n\n\n\n\n\n\n\n\n\n\n // change this later with data from the api\n\nconst Kategori = [{\n  value: \'Humbje\'\n}, {\n  value: \'Gjetje\'\n}, {\n  value: \'Adoptim\'\n}];\nconst Raca = [{\n  value: \'Belgian Malinois\'\n}, {\n  value: \'German Shephard\'\n}];\nconst Qyteti = [{\n  value: \'Gjilan\'\n}, {\n  value: \'Prishtine\'\n}, {\n  value: \'Prizren\'\n}, {\n  value: \'Peje\'\n}, {\n  value: \'Ferizaj\'\n}, {\n  value: \'Mitrovice\'\n}, {\n  value: \'Gjakove\'\n}];\nconst useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.default)(theme => ({\n  root: {\n    flexGrow: 1,\n    \'& .MuiTextField-root\': {\n      margin: theme.spacing(1),\n      width: \'25ch\'\n    }\n  }\n}));\n\nfunction ComposePost(props) {\n  const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\'Humbje\');\n  const [animalName, setAnimalName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\'\');\n  const [features, setFeatures] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\'\');\n  const [reward, setReward] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\'\');\n  const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\'\');\n  const [breed, setBreed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\'\');\n  const [city, setCity] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\'\');\n  const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\'\');\n  const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    getUser();\n  }, []);\n  const requestOptions = {\n    method: \'GET\',\n    headers: {\n      Authorization: `Bearer ${localStorage.getItem(\'access_token\')}`\n    }\n  };\n\n  function getUser() {\n    fetch(\'http://127.0.0.1:8000/api/loged-in/\', requestOptions).then(response => {\n      return response.json();\n    }).then(json => {\n      setUser(json.user);\n      console.log(json.user);\n    });\n  }\n\n  function categoryInputHandler(e) {\n    setCategory(e.target.value);\n  }\n\n  function nameInputHandler(e) {\n    setAnimalName(e.target.value);\n  }\n\n  function featuresInputHandler(e) {\n    setFeatures(e.target.value);\n  }\n\n  function rewardInputHandler(e) {\n    setReward(e.target.value);\n  }\n\n  function breedInputHandler(e) {\n    setBreed(e.target.value);\n  }\n\n  function descriptionInputHandler(e) {\n    setDescription(e.target.value);\n  }\n\n  function cityInputHandler(e) {\n    setCity(e.target.value);\n  }\n\n  function phoneInputHandler(e) {\n    setPhone(e.target.value);\n  }\n\n  function imageInputHandler(e) {\n    setImage(e.target.files);\n  }\n\n  function buttonPressed() {\n    let formData = new FormData();\n    formData.append(\'category\', category);\n    formData.append(\'name\', animalName);\n    formData.append(\'description\', description);\n    formData.append(\'features\', features);\n    formData.append(\'breed\', breed);\n    formData.append(\'city\', city);\n    formData.append(\'reward\', reward);\n    formData.append(\'user\', parseInt(user));\n    formData.append(\'phone\', phone);\n    formData.append(\'photo\', image[0]);\n    console.log(formData);\n    axios__WEBPACK_IMPORTED_MODULE_3___default().post("/api/create-post/", formData).then(response => console.log(response)).then(response => props.history.push(\'/\'));\n  }\n\n  const classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    style: {\n      display: \'flex\',\n      flexDirection: \'row\'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {\n    className: classes.root,\n    style: {\n      margin: \'4%\'\n    },\n    method: "post"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {\n    variant: "h2",\n    component: "h2"\n  }, "Krijo nje postim"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__.default, {\n    style: {\n      width: \'52ch\'\n    },\n    id: "outlined-basic",\n    onChange: nameInputHandler,\n    label: "Emri",\n    variant: "outlined"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__.default, {\n    style: {\n      width: \'52ch\'\n    },\n    id: "outlined-basic",\n    onChange: featuresInputHandler,\n    label: "Tiparet dalluese",\n    variant: "outlined"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__.default, {\n    select: true,\n    id: "outlined-basic",\n    onChange: categoryInputHandler,\n    label: "Kategori",\n    variant: "outlined"\n  }, Kategori.map(option => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__.default, {\n    key: option.value,\n    value: option.value\n  }, option.value))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__.default, {\n    select: true,\n    id: "outlined-basic",\n    onChange: breedInputHandler,\n    label: "Raca",\n    variant: "outlined"\n  }, Raca.map(option => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__.default, {\n    key: option.value,\n    value: option.value\n  }, option.value)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    style: {\n      display: \'flex\',\n      flexDirection: \'row\'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    style: {\n      display: \'flex\',\n      flexDirection: \'column\'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__.default, {\n    select: true,\n    id: "outlined-basic",\n    onChange: cityInputHandler,\n    label: "Qyteti",\n    variant: "outlined"\n  }, Qyteti.map(option => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__.default, {\n    key: option.value,\n    value: option.value\n  }, option.value))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__.default, {\n    id: "outlined-basic",\n    onChange: rewardInputHandler,\n    type: "number",\n    label: "Shperblimi",\n    variant: "outlined"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__.default, {\n    id: "outlined-basic",\n    onChange: descriptionInputHandler,\n    label: "Pershkrimi",\n    variant: "outlined",\n    multiline: true,\n    rows: 5\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    style: {\n      display: \'flex\',\n      flexDirection: \'row\'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__.default, {\n    id: "outlined-basic",\n    onChange: phoneInputHandler,\n    type: "number",\n    label: "Numri i telefonit",\n    variant: "outlined"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    style: {\n      margin: \'2%\'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {\n    accept: "image/*",\n    id: "contained-button-file",\n    multiple: true,\n    type: "file",\n    onChange: imageInputHandler,\n    style: {\n      display: \'none\'\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {\n    htmlFor: "contained-button-file"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__.default, {\n    variant: "contained",\n    color: "default",\n    component: "span"\n  }, "Shto Foto")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {\n    accept: "image/*",\n    id: "icon-button-file",\n    type: "file",\n    style: {\n      display: \'none\'\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {\n    htmlFor: "icon-button-file"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__.default, {\n    color: "default",\n    "aria-label": "upload picture",\n    component: "span"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_10__.default, null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__.default, {\n    style: {\n      margin: \'1ch\',\n      width: \'55ch\'\n    },\n    variant: "contained",\n    color: "primary",\n    onClick: buttonPressed\n  }, "Posto")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    style: {\n      width: \'50%\',\n      marginTop: \'4%\'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {\n    variant: "h2",\n    component: "h3"\n  }, "Pamje paraprake"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Post__WEBPACK_IMPORTED_MODULE_2__.default, {\n    name: animalName,\n    description: description,\n    features: features,\n    city: city,\n    reward: reward\n  }))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComposePost);\n\n//# sourceURL=webpack://frontend/./src/components/ComposePost.js?')},"./src/components/Navbar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => /* binding */ Navbar\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/Drawer.js");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/AppBar.js");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js");\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/List.js");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");\n/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/Divider.js");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");\n/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js");\n/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "./node_modules/@material-ui/icons/ChevronRight.js");\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js");\n/* harmony import */ var _material_ui_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/HomeOutlined */ "./node_modules/@material-ui/icons/HomeOutlined.js");\n/* harmony import */ var _material_ui_icons_PostAddRounded__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/PostAddRounded */ "./node_modules/@material-ui/icons/PostAddRounded.js");\n/* harmony import */ var _material_ui_icons_FilterListRounded__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/FilterListRounded */ "./node_modules/@material-ui/icons/FilterListRounded.js");\n/* harmony import */ var _material_ui_icons_DescriptionOutlined__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/DescriptionOutlined */ "./node_modules/@material-ui/icons/DescriptionOutlined.js");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");\n;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst drawerWidth = 240;\nconst useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.default)(theme => ({\n  root: {\n    display: \'flex\',\n    marginBottom: \'60px\'\n  },\n  appBar: {\n    transition: theme.transitions.create([\'margin\', \'width\'], {\n      easing: theme.transitions.easing.sharp,\n      duration: theme.transitions.duration.leavingScreen\n    })\n  },\n  appBarShift: {\n    width: `calc(100% - ${drawerWidth}px)`,\n    marginLeft: drawerWidth,\n    transition: theme.transitions.create([\'margin\', \'width\'], {\n      easing: theme.transitions.easing.easeOut,\n      duration: theme.transitions.duration.enteringScreen\n    })\n  },\n  menuButton: {\n    marginRight: theme.spacing(2)\n  },\n  hide: {\n    display: \'none\'\n  },\n  drawer: {\n    width: drawerWidth,\n    flexShrink: 0\n  },\n  drawerPaper: {\n    width: drawerWidth\n  },\n  drawerHeader: {\n    display: \'flex\',\n    alignItems: \'center\',\n    padding: theme.spacing(0, 1),\n    // necessary for content to be below app bar\n    ...theme.mixins.toolbar,\n    justifyContent: \'flex-end\'\n  },\n  content: {\n    flexGrow: 1,\n    padding: theme.spacing(3),\n    transition: theme.transitions.create(\'margin\', {\n      easing: theme.transitions.easing.sharp,\n      duration: theme.transitions.duration.leavingScreen\n    }),\n    marginLeft: -drawerWidth\n  },\n  contentShift: {\n    transition: theme.transitions.create(\'margin\', {\n      easing: theme.transitions.easing.easeOut,\n      duration: theme.transitions.duration.enteringScreen\n    }),\n    marginLeft: 0\n  }\n}));\nconst axiosInstance = axios__WEBPACK_IMPORTED_MODULE_1___default().create({\n  timeout: 1000,\n  headers: {\n    Authorization: localStorage.getItem(\'access_token\') ? \'JWT\' + localStorage.getItem(\'access_token\') : null,\n    \'Content-Type\': \'application/json\',\n    accept: \'application/json\'\n  }\n});\nfunction Navbar() {\n  const classes = useStyles();\n  const theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.default)();\n  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);\n  const [accessToken, setAccessToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(localStorage.getItem(\'access_token\'));\n\n  const handleDrawerOpen = () => {\n    setOpen(true);\n  };\n\n  const handleDrawerClose = () => {\n    setOpen(false);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    checkLogIn();\n  }, []);\n\n  function checkLogIn() {\n    if (accessToken !== null) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__.default, {\n        color: "inherit",\n        href: \'/logout\',\n        style: {\n          marginRight: theme.spacing(2)\n        }\n      }, "Logout"));\n    } else {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__.default, {\n        color: "inherit",\n        href: \'/login\',\n        style: {\n          marginRight: theme.spacing(2)\n        }\n      }, "Login"));\n    }\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: classes.root\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__.default, {\n    style: {\n      display: \'flex\',\n      flexDirection: \'row\'\n    },\n    position: "fixed",\n    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)(classes.appBar, {\n      [classes.appBarShift]: open\n    })\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__.default, {\n    style: {\n      flexGrow: 1\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__.default, {\n    color: "inherit",\n    "aria-label": "open drawer",\n    onClick: handleDrawerOpen,\n    edge: "start",\n    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)(classes.menuButton, open && classes.hide)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {\n    src: \'../../../images/icon_w.svg\',\n    width: "50",\n    height: "50",\n    alt: "icon"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {\n    variant: "h7",\n    noWrap: true\n  }, "Nje shtepi per kafshet")), checkLogIn(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__.default, {\n    color: "inherit",\n    href: \'/register\'\n  }, "Regjistrohu")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_12__.default, {\n    className: classes.drawer,\n    variant: "persistent",\n    anchor: "left",\n    open: open,\n    classes: {\n      paper: classes.drawerPaper\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: classes.drawerHeader\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__.default, {\n    onClick: handleDrawerClose\n  }, theme.direction === \'ltr\' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_13__.default, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_14__.default, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_16__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_17__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {\n    src: \'../../../images/logo.svg\',\n    width: "300",\n    height: "150",\n    alt: "logo"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_17__.default, {\n    button: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_18__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__.default, {\n    color: "primary",\n    href: \'/\'\n  }, "Ballina")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_17__.default, {\n    button: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_PostAddRounded__WEBPACK_IMPORTED_MODULE_19__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__.default, {\n    color: "inherit",\n    href: \'/create-post\'\n  }, "Posto")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_17__.default, {\n    button: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_FilterListRounded__WEBPACK_IMPORTED_MODULE_20__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__.default, {\n    color: "inherit",\n    href: \'/filter\'\n  }, "Filtro")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_17__.default, {\n    button: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_DescriptionOutlined__WEBPACK_IMPORTED_MODULE_21__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__.default, {\n    color: "inherit",\n    href: \'/articles\'\n  }, "Artikuj")))));\n}\n\n//# sourceURL=webpack://frontend/./src/components/Navbar.js?')},"./src/components/Post.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/Card.js");\n/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/CardActionArea.js");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/CardContent.js");\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/CardMedia.js");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");\n;\n\n\n\n\n\n\nconst useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.default)({\n  root: {\n    maxWidth: 345\n  },\n  media: {\n    aspectRatio: \'16/9\',\n    minHeight: \'90px\',\n    height: \'12%\'\n  }\n});\n\nfunction Post(props) {\n  function showReward() {\n    if (props.reward) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {\n        className: "text"\n      }, "Shperblimi: ", props.reward, " euro");\n    } else {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {\n        className: "text"\n      }, "Pa shperblim");\n    }\n  }\n\n  const classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__.default, {\n    className: classes.root\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__.default, {\n    className: classes.media,\n    image: props.image\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__.default, {\n    gutterBottom: true,\n    variant: "h5",\n    component: "h2"\n  }, props.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__.default, {\n    variant: "body2",\n    color: "textSecondary",\n    component: "p"\n  }, props.features, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Qyteti: ", props.city, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), showReward())))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n\n//# sourceURL=webpack://frontend/./src/components/Post.js?')}}]);