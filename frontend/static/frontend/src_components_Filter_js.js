/*! For license information please see src_components_Filter_js.js.LICENSE.txt */
(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([["src_components_Filter_js"],{"./src/components/Filter.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./src/components/Navbar.js");\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Post */ "./src/components/Post.js");\n;\n\n\n\n\n\n\n\nconst useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.default)(theme => ({\n  root: {\n    flexGrow: 1,\n    \'& .MuiTextField-root\': {\n      margin: theme.spacing(1),\n      width: \'25ch\'\n    }\n  }\n}));\n\nfunction Filter() {\n  const [filter_, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\'\');\n  const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\'\');\n  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\'\');\n\n  function categoryInputHandler(e) {\n    setCategory(e.target.value);\n  }\n\n  function titleInputHandler(e) {\n    setTitle(e.target.value);\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    console.log("work");\n    fetch(\'/api/posts/\').then(response => {\n      return response.json();\n    }).then(json => {\n      setData(json);\n    });\n  }, []);\n  const classes = useStyles();\n\n  function filter() {\n    if (data != \'\') {\n      if (filter_ == true) {\n        const filteredData = data.filter(item => item.category == category);\n        console.log(filteredData);\n        filteredData.map((posts, index) => {\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Please work");\n        });\n      }\n    }\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    style: {\n      display: \'flex\',\n      flexDirection: \'row\'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {\n    className: classes.root,\n    style: {\n      margin: \'4%\'\n    },\n    method: "post"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.default, {\n    variant: "h2",\n    component: "h2"\n  }, "Filtro"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__.default, {\n    style: {\n      width: \'52ch\'\n    },\n    id: "outlined-basic",\n    onChange: categoryInputHandler,\n    label: "Kategoria",\n    variant: "outlined"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__.default, {\n    style: {\n      width: \'52ch\'\n    },\n    id: "outlined-basic",\n    onChange: titleInputHandler,\n    label: "Titulli",\n    type: "password",\n    variant: "outlined"\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__.default, {\n    style: {\n      margin: \'1ch\',\n      width: \'55ch\'\n    },\n    variant: "contained",\n    color: "primary",\n    onClick: () => setFilter(true)\n  }, "Filtro")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)), filter());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filter);\n\n//# sourceURL=webpack://frontend/./src/components/Filter.js?')},"./src/components/Navbar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => /* binding */ Navbar\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/Drawer.js");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/AppBar.js");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js");\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/List.js");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");\n/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/Divider.js");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");\n/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js");\n/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "./node_modules/@material-ui/icons/ChevronRight.js");\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js");\n/* harmony import */ var _material_ui_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/HomeOutlined */ "./node_modules/@material-ui/icons/HomeOutlined.js");\n/* harmony import */ var _material_ui_icons_PostAddRounded__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/PostAddRounded */ "./node_modules/@material-ui/icons/PostAddRounded.js");\n/* harmony import */ var _material_ui_icons_FilterListRounded__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/FilterListRounded */ "./node_modules/@material-ui/icons/FilterListRounded.js");\n/* harmony import */ var _material_ui_icons_DescriptionOutlined__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/DescriptionOutlined */ "./node_modules/@material-ui/icons/DescriptionOutlined.js");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");\n;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst drawerWidth = 240;\nconst useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.default)(theme => ({\n  root: {\n    display: \'flex\',\n    marginBottom: \'60px\'\n  },\n  appBar: {\n    transition: theme.transitions.create([\'margin\', \'width\'], {\n      easing: theme.transitions.easing.sharp,\n      duration: theme.transitions.duration.leavingScreen\n    })\n  },\n  appBarShift: {\n    width: `calc(100% - ${drawerWidth}px)`,\n    marginLeft: drawerWidth,\n    transition: theme.transitions.create([\'margin\', \'width\'], {\n      easing: theme.transitions.easing.easeOut,\n      duration: theme.transitions.duration.enteringScreen\n    })\n  },\n  menuButton: {\n    marginRight: theme.spacing(2)\n  },\n  hide: {\n    display: \'none\'\n  },\n  drawer: {\n    width: drawerWidth,\n    flexShrink: 0\n  },\n  drawerPaper: {\n    width: drawerWidth\n  },\n  drawerHeader: {\n    display: \'flex\',\n    alignItems: \'center\',\n    padding: theme.spacing(0, 1),\n    // necessary for content to be below app bar\n    ...theme.mixins.toolbar,\n    justifyContent: \'flex-end\'\n  },\n  content: {\n    flexGrow: 1,\n    padding: theme.spacing(3),\n    transition: theme.transitions.create(\'margin\', {\n      easing: theme.transitions.easing.sharp,\n      duration: theme.transitions.duration.leavingScreen\n    }),\n    marginLeft: -drawerWidth\n  },\n  contentShift: {\n    transition: theme.transitions.create(\'margin\', {\n      easing: theme.transitions.easing.easeOut,\n      duration: theme.transitions.duration.enteringScreen\n    }),\n    marginLeft: 0\n  }\n}));\nconst axiosInstance = axios__WEBPACK_IMPORTED_MODULE_1___default().create({\n  timeout: 1000,\n  headers: {\n    Authorization: localStorage.getItem(\'access_token\') ? \'JWT\' + localStorage.getItem(\'access_token\') : null,\n    \'Content-Type\': \'application/json\',\n    accept: \'application/json\'\n  }\n});\nfunction Navbar() {\n  const classes = useStyles();\n  const theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.default)();\n  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);\n  const [accessToken, setAccessToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(localStorage.getItem(\'access_token\'));\n\n  const handleDrawerOpen = () => {\n    setOpen(true);\n  };\n\n  const handleDrawerClose = () => {\n    setOpen(false);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    checkLogIn();\n  }, []);\n\n  function checkLogIn() {\n    if (accessToken !== null) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__.default, {\n        color: "inherit",\n        href: \'/logout\',\n        style: {\n          marginRight: theme.spacing(2)\n        }\n      }, "Logout"));\n    } else {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__.default, {\n        color: "inherit",\n        href: \'/login\',\n        style: {\n          marginRight: theme.spacing(2)\n        }\n      }, "Login"));\n    }\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: classes.root\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__.default, {\n    style: {\n      display: \'flex\',\n      flexDirection: \'row\'\n    },\n    position: "fixed",\n    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)(classes.appBar, {\n      [classes.appBarShift]: open\n    })\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__.default, {\n    style: {\n      flexGrow: 1\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__.default, {\n    color: "inherit",\n    "aria-label": "open drawer",\n    onClick: handleDrawerOpen,\n    edge: "start",\n    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)(classes.menuButton, open && classes.hide)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {\n    src: \'../../../images/icon_w.svg\',\n    width: "50",\n    height: "50",\n    alt: "icon"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {\n    variant: "h7",\n    noWrap: true\n  }, "Nje shtepi per kafshet")), checkLogIn(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__.default, {\n    color: "inherit",\n    href: \'/register\'\n  }, "Regjistrohu")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_12__.default, {\n    className: classes.drawer,\n    variant: "persistent",\n    anchor: "left",\n    open: open,\n    classes: {\n      paper: classes.drawerPaper\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: classes.drawerHeader\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__.default, {\n    onClick: handleDrawerClose\n  }, theme.direction === \'ltr\' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_13__.default, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_14__.default, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_16__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_17__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {\n    src: \'../../../images/logo.svg\',\n    width: "300",\n    height: "150",\n    alt: "logo"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_15__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_17__.default, {\n    button: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_18__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__.default, {\n    color: "primary",\n    href: \'/\'\n  }, "Ballina")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_17__.default, {\n    button: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_PostAddRounded__WEBPACK_IMPORTED_MODULE_19__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__.default, {\n    color: "inherit",\n    href: \'/create-post\'\n  }, "Posto")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_17__.default, {\n    button: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_FilterListRounded__WEBPACK_IMPORTED_MODULE_20__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__.default, {\n    color: "inherit",\n    href: \'/filter\'\n  }, "Filtro")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_17__.default, {\n    button: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_DescriptionOutlined__WEBPACK_IMPORTED_MODULE_21__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__.default, {\n    color: "inherit",\n    href: \'/articles\'\n  }, "Artikuj")))));\n}\n\n//# sourceURL=webpack://frontend/./src/components/Navbar.js?')},"./src/components/Post.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/Card.js");\n/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/CardActionArea.js");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/CardContent.js");\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/CardMedia.js");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");\n;\n\n\n\n\n\n\nconst useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.default)({\n  root: {\n    maxWidth: 345\n  },\n  media: {\n    aspectRatio: \'16/9\',\n    minHeight: \'90px\',\n    height: \'12%\'\n  }\n});\n\nfunction Post(props) {\n  function showReward() {\n    if (props.reward) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {\n        className: "text"\n      }, "Shperblimi: ", props.reward, " euro");\n    } else {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {\n        className: "text"\n      }, "Pa shperblim");\n    }\n  }\n\n  const classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__.default, {\n    className: classes.root\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__.default, {\n    className: classes.media,\n    image: props.image\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__.default, {\n    gutterBottom: true,\n    variant: "h5",\n    component: "h2"\n  }, props.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__.default, {\n    variant: "body2",\n    color: "textSecondary",\n    component: "p"\n  }, props.features, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Qyteti: ", props.city, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), showReward())))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n\n//# sourceURL=webpack://frontend/./src/components/Post.js?')}}]);