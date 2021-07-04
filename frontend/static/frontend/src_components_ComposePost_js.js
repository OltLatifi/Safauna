/*! For license information please see src_components_ComposePost_js.js.LICENSE.txt */
(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([["src_components_ComposePost_js"],{"./src/components/ComposePost.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");\n/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/PhotoCamera */ "./node_modules/@material-ui/icons/PhotoCamera.js");\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./src/components/Navbar.js");\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Post */ "./src/components/Post.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n;\n\n\n\n\n\n\n\n\n\n\n // change this later with data from the api\n\nconst Kategori = [{\n  value: \'Humbje\'\n}, {\n  value: \'Gjetje\'\n}, {\n  value: \'Adoptim\'\n}];\nconst Raca = [{\n  value: \'Belgian Malinois\'\n}, {\n  value: \'German Shephard\'\n}];\nconst Qyteti = [{\n  value: \'Gjilan\'\n}, {\n  value: \'Prishtine\'\n}, {\n  value: \'Prizren\'\n}, {\n  value: \'Peje\'\n}, {\n  value: \'Ferizaj\'\n}, {\n  value: \'Mitrovice\'\n}, {\n  value: \'Gjakove\'\n}];\nconst useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.default)(theme => ({\n  root: {\n    flexGrow: 1,\n    \'& .MuiTextField-root\': {\n      margin: theme.spacing(1),\n      width: \'25ch\'\n    }\n  }\n}));\n\nfunction ComposePost(props) {\n  const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\'Humbje\');\n  const [animalName, setAnimalName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\'\');\n  const [features, setFeatures] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\'\');\n  const [reward, setReward] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\'\');\n  const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\'\');\n  const [breed, setBreed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\'\');\n  const [city, setCity] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\'\');\n  const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\'\');\n  const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    getUser();\n  }, []);\n  const requestOptions = {\n    method: \'GET\',\n    headers: {\n      Authorization: `Bearer ${localStorage.getItem(\'access_token\')}`\n    }\n  };\n\n  function getUser() {\n    fetch(\'http://127.0.0.1:8000/api/loged-in/\', requestOptions).then(response => {\n      return response.json();\n    }).then(json => {\n      setUser(json.user);\n      console.log(json.user);\n    });\n  }\n\n  function categoryInputHandler(e) {\n    setCategory(e.target.value);\n  }\n\n  function nameInputHandler(e) {\n    setAnimalName(e.target.value);\n  }\n\n  function featuresInputHandler(e) {\n    setFeatures(e.target.value);\n  }\n\n  function rewardInputHandler(e) {\n    setReward(e.target.value);\n  }\n\n  function breedInputHandler(e) {\n    setBreed(e.target.value);\n  }\n\n  function descriptionInputHandler(e) {\n    setDescription(e.target.value);\n  }\n\n  function cityInputHandler(e) {\n    setCity(e.target.value);\n  }\n\n  function phoneInputHandler(e) {\n    setPhone(e.target.value);\n  }\n\n  function imageInputHandler(e) {\n    setImage(e.target.files);\n  }\n\n  function buttonPressed() {\n    let formData = new FormData();\n    formData.append(\'category\', category);\n    formData.append(\'name\', animalName);\n    formData.append(\'description\', description);\n    formData.append(\'features\', features);\n    formData.append(\'breed\', breed);\n    formData.append(\'city\', city);\n    formData.append(\'reward\', reward);\n    formData.append(\'user\', parseInt(user));\n    formData.append(\'phone\', phone);\n    formData.append(\'photo\', image[0]);\n    console.log(formData);\n    axios__WEBPACK_IMPORTED_MODULE_3___default().post("/api/create-post/", formData).then(response => console.log(response)).then(response => props.history.push(\'/\'));\n  }\n\n  const classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    style: {\n      display: \'flex\',\n      flexDirection: \'row\'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {\n    className: classes.root,\n    style: {\n      margin: \'4%\'\n    },\n    method: "post"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {\n    variant: "h2",\n    component: "h2"\n  }, "Krijo nje postim"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__.default, {\n    style: {\n      width: \'52ch\'\n    },\n    id: "outlined-basic",\n    onChange: nameInputHandler,\n    label: "Emri",\n    variant: "outlined"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__.default, {\n    style: {\n      width: \'52ch\'\n    },\n    id: "outlined-basic",\n    onChange: featuresInputHandler,\n    label: "Tiparet dalluese",\n    variant: "outlined"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__.default, {\n    select: true,\n    id: "outlined-basic",\n    onChange: categoryInputHandler,\n    label: "Kategori",\n    variant: "outlined"\n  }, Kategori.map(option => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__.default, {\n    key: option.value,\n    value: option.value\n  }, option.value))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__.default, {\n    select: true,\n    id: "outlined-basic",\n    onChange: breedInputHandler,\n    label: "Raca",\n    variant: "outlined"\n  }, Raca.map(option => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__.default, {\n    key: option.value,\n    value: option.value\n  }, option.value)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    style: {\n      display: \'flex\',\n      flexDirection: \'row\'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    style: {\n      display: \'flex\',\n      flexDirection: \'column\'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__.default, {\n    select: true,\n    id: "outlined-basic",\n    onChange: cityInputHandler,\n    label: "Qyteti",\n    variant: "outlined"\n  }, Qyteti.map(option => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__.default, {\n    key: option.value,\n    value: option.value\n  }, option.value))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__.default, {\n    id: "outlined-basic",\n    onChange: rewardInputHandler,\n    type: "number",\n    label: "Shperblimi",\n    variant: "outlined"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__.default, {\n    id: "outlined-basic",\n    onChange: descriptionInputHandler,\n    label: "Pershkrimi",\n    variant: "outlined",\n    multiline: true,\n    rows: 5\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    style: {\n      display: \'flex\',\n      flexDirection: \'row\'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__.default, {\n    id: "outlined-basic",\n    onChange: phoneInputHandler,\n    type: "number",\n    label: "Numri i telefonit",\n    variant: "outlined"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    style: {\n      margin: \'2%\'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {\n    accept: "image/*",\n    id: "contained-button-file",\n    multiple: true,\n    type: "file",\n    onChange: imageInputHandler,\n    style: {\n      display: \'none\'\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {\n    htmlFor: "contained-button-file"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__.default, {\n    variant: "contained",\n    color: "default",\n    component: "span"\n  }, "Shto Foto")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {\n    accept: "image/*",\n    id: "icon-button-file",\n    type: "file",\n    style: {\n      display: \'none\'\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {\n    htmlFor: "icon-button-file"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__.default, {\n    color: "default",\n    "aria-label": "upload picture",\n    component: "span"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_10__.default, null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__.default, {\n    style: {\n      margin: \'1ch\',\n      width: \'55ch\'\n    },\n    variant: "contained",\n    color: "primary",\n    onClick: buttonPressed\n  }, "Posto")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    style: {\n      width: \'50%\',\n      marginTop: \'4%\'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {\n    variant: "h2",\n    component: "h3"\n  }, "Pamje paraprake"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Post__WEBPACK_IMPORTED_MODULE_2__.default, {\n    name: animalName,\n    description: description,\n    features: features,\n    city: city,\n    reward: reward\n  }))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComposePost);\n\n//# sourceURL=webpack://frontend/./src/components/ComposePost.js?')},"./src/components/Navbar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => /* binding */ Navbar\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/AppBar.js");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n;\n\n\n\n\n\n\n\n\nconst axiosInstance = axios__WEBPACK_IMPORTED_MODULE_1___default().create({\n  timeout: 1000,\n  headers: {\n    Authorization: localStorage.getItem(\'access_token\') ? \'JWT\' + localStorage.getItem(\'access_token\') : null,\n    \'Content-Type\': \'application/json\',\n    accept: \'application/json\'\n  }\n});\nconst useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.default)(theme => ({\n  root: {\n    flexGrow: 1\n  },\n  menuButton: {\n    marginRight: theme.spacing(2)\n  },\n  title: {\n    flexGrow: 1\n  }\n}));\nfunction Navbar() {\n  const classes = useStyles();\n  const [accessToken, setAccessToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(localStorage.getItem(\'access_token\'));\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    checkLogIn();\n  }, []);\n\n  function checkLogIn() {\n    if (accessToken !== null) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__.default, {\n        color: "inherit",\n        href: \'/logout\'\n      }, "Logout"));\n    } else {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__.default, {\n        color: "inherit",\n        href: \'/login\'\n      }, "Login"));\n    }\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: classes.root\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__.default, {\n    position: "static"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__.default, {\n    variant: "h6",\n    className: classes.menuButton\n  }, "Safauna"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__.default, {\n    variant: "h6",\n    className: classes.title\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__.default, {\n    color: "inherit",\n    href: \'/\'\n  }, "Ballina"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__.default, {\n    color: "inherit",\n    href: \'/create-post\'\n  }, "Posto"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__.default, {\n    color: "inherit",\n    href: \'/filter\'\n  }, "Filtro"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__.default, {\n    color: "inherit",\n    href: \'/articles\'\n  }, "Artikuj")), checkLogIn(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__.default, {\n    color: "inherit",\n    href: \'/register\'\n  }, "Regjistrohu"))));\n}\n\n//# sourceURL=webpack://frontend/./src/components/Navbar.js?')},"./src/components/Post.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/Card.js");\n/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/CardActionArea.js");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/CardContent.js");\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/CardMedia.js");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");\n;\n\n\n\n\n\n\nconst useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.default)({\n  root: {\n    maxWidth: 345\n  },\n  media: {\n    aspectRatio: \'16/9\',\n    minHeight: \'90px\',\n    height: \'12%\'\n  }\n});\n\nfunction Post(props) {\n  function showReward() {\n    if (props.reward) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {\n        className: "text"\n      }, "Shperblimi: ", props.reward, " euro");\n    } else {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {\n        className: "text"\n      }, "Pa shperblim");\n    }\n  }\n\n  const classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__.default, {\n    className: classes.root\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__.default, {\n    className: classes.media,\n    image: props.image\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__.default, {\n    gutterBottom: true,\n    variant: "h5",\n    component: "h2"\n  }, props.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__.default, {\n    variant: "body2",\n    color: "textSecondary",\n    component: "p"\n  }, props.features, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Qyteti: ", props.city, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), showReward())))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n\n//# sourceURL=webpack://frontend/./src/components/Post.js?')}}]);