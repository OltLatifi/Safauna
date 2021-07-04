/*! For license information please see src_components_PostDetail_js.js.LICENSE.txt */
(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([["src_components_PostDetail_js"],{"./src/components/PostDetail.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/Card.js");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/CardContent.js");\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/CardMedia.js");\n/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/CardHeader.js");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");\n/* harmony import */ var _material_ui_icons_CategoryTwoTone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/CategoryTwoTone */ "./node_modules/@material-ui/icons/CategoryTwoTone.js");\n/* harmony import */ var _material_ui_icons_DescriptionTwoTone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/DescriptionTwoTone */ "./node_modules/@material-ui/icons/DescriptionTwoTone.js");\n/* harmony import */ var _material_ui_icons_BookTwoTone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/BookTwoTone */ "./node_modules/@material-ui/icons/BookTwoTone.js");\n/* harmony import */ var _material_ui_icons_CallTwoTone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/CallTwoTone */ "./node_modules/@material-ui/icons/CallTwoTone.js");\n/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");\n/* harmony import */ var _material_ui_icons_InsertComment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/InsertComment */ "./node_modules/@material-ui/icons/InsertComment.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst Navbar = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_components_Navbar_js-_db4b1").then(__webpack_require__.bind(__webpack_require__, /*! ./Navbar */ "./src/components/Navbar.js")));\n\nconst renderLoader = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Loading");\n\nfunction PostDetail(props) {\n  const [delete_, setDelete] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const id = props.match.params.id;\n  const [details, setDetails] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\'\');\n  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\'\');\n  const [userID, setUserID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\'\');\n\n  function commentInputHandler(e) {\n    setComment(e.target.value);\n  } // note to self: useEffect is used to tell react that it needs to do something after render\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    getData();\n  }, []);\n\n  function handleScroll() {\n    window.scroll({\n      top: 0,\n      left: 0,\n      behavior: \'smooth\'\n    });\n  }\n\n  async function getData() {\n    // post data\n    fetch(`/api/posts/${id}/`).then(response => {\n      return response.json();\n    }).then(json => setDetails(json)).catch(error => console.log(error)); // comment get data\n\n    fetch(\'/api/comments/\').then(response => {\n      return response.json();\n    }).then(json => setComments(json)).catch(error => console.log(error)); // user data\n\n    const requestOptions = {\n      method: \'GET\',\n      headers: {\n        Authorization: `Bearer ${localStorage.getItem(\'access_token\')}`\n      }\n    };\n    fetch(\'http://127.0.0.1:8000/api/loged-in/\', requestOptions).then(response => {\n      return response.json();\n    }).then(json => {\n      setUser(json.username);\n      setUserID(json.user);\n    });\n  }\n\n  function submitButton() {\n    let formData = new FormData();\n    formData.append("comment", comment);\n    formData.append("post", details.id);\n    formData.append("user", userID);\n    axios__WEBPACK_IMPORTED_MODULE_1___default().post("http://127.0.0.1:8000/api/create-comment/", formData);\n    window.location.reload(false);\n  }\n\n  function deleteData() {\n    const requestOptions = {\n      method: "DELETE",\n      headers: {\n        "Content-Type": "multipart/form-data"\n      }\n    };\n    fetch(`/api/posts/${id}/delete/`, requestOptions).then(response => props.history.push(\'/\'));\n  }\n\n  function deleteComment(id_) {\n    const requestOptions = {\n      method: "DELETE",\n      headers: {\n        "Content-Type": "multipart/form-data"\n      }\n    };\n    fetch(`/api/comments/${id_}/delete/`, requestOptions);\n    window.location.reload(false);\n  }\n\n  function confirmDelete() {\n    if (delete_ == true) {\n      {\n        handleScroll();\n      }\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.default, {\n        variant: "h4",\n        component: "h4"\n      }, "A jeni te sigurte qe doni te fshihni kete postim?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__.default, {\n        variant: "contained",\n        color: "secondary",\n        onClick: () => deleteData()\n      }, "Fshij"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__.default, {\n        variant: "contained",\n        color: "default",\n        onClick: () => setDelete(false)\n      }, "Anulo")));\n    }\n  }\n\n  function renderDeleteButton() {\n    if (user === details.user) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__.default, {\n        variant: "contained",\n        color: "default",\n        onClick: () => setDelete(true)\n      }, "Fshij"));\n    }\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n    fallback: renderLoader()\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Navbar, null)), confirmDelete(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__.default, {\n    style: {\n      width: \'50%\',\n      margin: \'2% 25%\'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n    fallback: renderLoader()\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__.default, {\n    style: {\n      aspectRatio: \'16/9\',\n      width: \'100%\',\n      objectFit: \'cover\'\n    },\n    image: details.photo\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.default, {\n    gutterBottom: true,\n    variant: "h2",\n    component: "h2"\n  }, details.name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.default, {\n    variant: "body1",\n    color: "textSecondary"\n  }, details.data)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.default, {\n    variant: "body1",\n    color: "textSecondary"\n  }, "\\uD83D\\uDCB5Shperblimi: ", details.reward, " euro"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.default, {\n    variant: "body2",\n    color: "textSecondary"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_CallTwoTone__WEBPACK_IMPORTED_MODULE_7__.default, null), "Telefoni: ", details.phone), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.default, {\n    variant: "body2",\n    color: "textSecondary"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_CategoryTwoTone__WEBPACK_IMPORTED_MODULE_8__.default, null), "Kategoria: ", details.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.default, {\n    variant: "h6",\n    component: "p"\n  }, "\\uD83C\\uDF06Qyteti: ", details.city), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.default, {\n    variant: "h6",\n    component: "p"\n  }, "\\uD83D\\uDC36Raca: ", details.breed), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.default, {\n    variant: "h5",\n    component: "p"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_BookTwoTone__WEBPACK_IMPORTED_MODULE_9__.default, null), " Tiparet dalluese: ", details.features), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.default, {\n    variant: "h5",\n    component: "p"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_DescriptionTwoTone__WEBPACK_IMPORTED_MODULE_10__.default, null), "Pershkrimi: ", details.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), renderDeleteButton(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.default, {\n    variant: "h4",\n    component: "p",\n    style: {\n      marginTop: \'2%\'\n    }\n  }, "Komentet:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), comments.map((comments, index) => {\n    // if it\'s the right post\n    // not the way to do it, because there can be an overwhelming amount of comments\n    // should be an api call with a filter\n    if (comments.post == details.id) {\n      if (userID == comments.user) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_11__.default, {\n          title: comments.comment,\n          subheader: `${comments.id}. User#${comments.user} - ${comments.date}`,\n          avatar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__.default, {\n            onClick: deleteComment.bind(this, comments.id)\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_12__.default, null))\n        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null));\n      } else {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_11__.default, {\n          title: comments.comment,\n          subheader: `${comments.id}. User#${comments.user} - ${comments.date}`,\n          avatar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_InsertComment__WEBPACK_IMPORTED_MODULE_13__.default, null)\n        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null));\n      }\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {\n    noValidate: true,\n    autoComplete: "off",\n    style: {\n      display: \'flex\',\n      flexDirection: \'row\'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__.default, {\n    id: "standard-basic",\n    label: "Shtoni nje koment",\n    style: {\n      width: \'80%\'\n    },\n    onChange: commentInputHandler\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__.default, {\n    variant: "contained",\n    color: "primary",\n    onClick: submitButton,\n    style: {\n      width: \'15%\',\n      marginLeft: \'5%\'\n    }\n  }, "Komento")))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(PostDetail));\n\n//# sourceURL=webpack://frontend/./src/components/PostDetail.js?')}}]);