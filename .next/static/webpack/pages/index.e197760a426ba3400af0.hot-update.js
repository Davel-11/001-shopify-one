webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"./node_modules/@shopify/app-bridge-react/index.js\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/davel/Desktop/Developer/000-SelfProy/001-shopify-one/pages/index.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';\n\nvar Index = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Index, _React$Component);\n\n  var _super = _createSuper(Index);\n\n  function Index() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Index);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"state\", {\n      open: false\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Index, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__[\"Page\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__[\"TitleBar\"], {\n          title: \"Sample App\",\n          primaryAction: {\n            content: 'Select products'\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__[\"ResourcePicker\"], {\n          resourceType: \"Product\",\n          showVariants: false,\n          open: this.state.open,\n          onSelection: function onSelection(resources) {\n            return _this2.handleSelection(resources);\n          },\n          onCancel: function onCancel() {\n            return _this2.setState({\n              open: false\n            });\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__[\"Layout\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__[\"TextStyle\"], {\n            variation: \"positive\",\n            children: \"Hello Mango Chagno - this app using React and Next.js\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__[\"EmptyState\"], {\n            heading: \"Discount your products temporarily\",\n            action: {\n              content: 'Seleccione Productos',\n              onAction: function onAction() {\n                return _this2.setState({\n                  open: true\n                });\n              }\n            },\n            image: img,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: \" Select products to change their price temporarily. \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 7\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 5\n      }, this);\n    }\n  }]);\n\n  return Index;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJpbWciLCJJbmRleCIsIm9wZW4iLCJjb250ZW50Iiwic3RhdGUiLCJyZXNvdXJjZXMiLCJoYW5kbGVTZWxlY3Rpb24iLCJzZXRTdGF0ZSIsIm9uQWN0aW9uIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLEdBQUcsbUVBQVo7O0lBR01DLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BRUk7QUFBRUMsVUFBSSxFQUFFO0FBQVIsSzs7Ozs7Ozs2QkFFQztBQUFBOztBQUVULDBCQUVFLHFFQUFDLHFEQUFEO0FBQUEsZ0NBRUUscUVBQUMsa0VBQUQ7QUFDSSxlQUFLLEVBQUMsWUFEVjtBQUVJLHVCQUFhLEVBQUU7QUFDYkMsbUJBQU8sRUFBRTtBQURJO0FBRm5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFTSSxxRUFBQyx3RUFBRDtBQUNFLHNCQUFZLEVBQUMsU0FEZjtBQUVFLHNCQUFZLEVBQUUsS0FGaEI7QUFHRSxjQUFJLEVBQUUsS0FBS0MsS0FBTCxDQUFXRixJQUhuQjtBQUlFLHFCQUFXLEVBQUUscUJBQUNHLFNBQUQ7QUFBQSxtQkFBZSxNQUFJLENBQUNDLGVBQUwsQ0FBcUJELFNBQXJCLENBQWY7QUFBQSxXQUpmO0FBS0Usa0JBQVEsRUFBRTtBQUFBLG1CQUFNLE1BQUksQ0FBQ0UsUUFBTCxDQUFjO0FBQUVMLGtCQUFJLEVBQUU7QUFBUixhQUFkLENBQU47QUFBQTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEosZUFpQkUscUVBQUMsdURBQUQ7QUFBQSxrQ0FDTSxxRUFBQywwREFBRDtBQUFXLHFCQUFTLEVBQUMsVUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRE4sZUFLTSxxRUFBQywyREFBRDtBQUNJLG1CQUFPLEVBQUMsb0NBRFo7QUFHSSxrQkFBTSxFQUFFO0FBQ05DLHFCQUFPLEVBQUUsc0JBREg7QUFFTkssc0JBQVEsRUFBRTtBQUFBLHVCQUFNLE1BQUksQ0FBQ0QsUUFBTCxDQUFjO0FBQUVMLHNCQUFJLEVBQUU7QUFBUixpQkFBZCxDQUFOO0FBQUE7QUFGSixhQUhaO0FBUUksaUJBQUssRUFBRUYsR0FSWDtBQUFBLG1DQVVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVko7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBNENDOzs7O0VBbERpQlMsS0FBSyxDQUFDQyxTOztBQXFEWFQsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2UsIFRleHRTdHlsZSwgTGF5b3V0LCBFbXB0eVN0YXRlIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XG5pbXBvcnQgeyBSZXNvdXJjZVBpY2tlciwgVGl0bGVCYXIgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcblxuY29uc3QgaW1nID0gJ2h0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wNzU3Lzk5NTUvZmlsZXMvZW1wdHktc3RhdGUuc3ZnJztcblxuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIFxuICBzdGF0ZSA9IHsgb3BlbjogZmFsc2UgfTtcblxuICByZW5kZXIoKSB7XG5cbiAgcmV0dXJuIChcblxuICAgIDxQYWdlPlxuXG4gICAgICA8VGl0bGVCYXJcbiAgICAgICAgICB0aXRsZT1cIlNhbXBsZSBBcHBcIlxuICAgICAgICAgIHByaW1hcnlBY3Rpb249e3tcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdTZWxlY3QgcHJvZHVjdHMnLFxuICAgICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgICAgIDxSZXNvdXJjZVBpY2tlclxuICAgICAgICAgIHJlc291cmNlVHlwZT1cIlByb2R1Y3RcIlxuICAgICAgICAgIHNob3dWYXJpYW50cz17ZmFsc2V9XG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgIG9uU2VsZWN0aW9uPXsocmVzb3VyY2VzKSA9PiB0aGlzLmhhbmRsZVNlbGVjdGlvbihyZXNvdXJjZXMpfVxuICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSl9XG4gICAgICAgIC8+ICBcblxuICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwicG9zaXRpdmVcIj5cbiAgICAgICAgICAgICAgSGVsbG8gTWFuZ28gQ2hhZ25vIC0gdGhpcyBhcHAgdXNpbmcgUmVhY3QgYW5kIE5leHQuanNcbiAgICAgICAgICAgIDwvVGV4dFN0eWxlPlxuXG4gICAgICAgICAgICA8RW1wdHlTdGF0ZVxuICAgICAgICAgICAgICAgIGhlYWRpbmc9XCJEaXNjb3VudCB5b3VyIHByb2R1Y3RzIHRlbXBvcmFyaWx5XCJcblxuICAgICAgICAgICAgICAgIGFjdGlvbj17e1xuICAgICAgICAgICAgICAgICAgY29udGVudDogJ1NlbGVjY2lvbmUgUHJvZHVjdG9zJyxcbiAgICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KSxcbiAgICAgICAgICAgICAgICB9fVxuXG4gICAgICAgICAgICAgICAgaW1hZ2U9e2ltZ30+XG5cbiAgICAgICAgICAgICAgICA8cD4gU2VsZWN0IHByb2R1Y3RzIHRvIGNoYW5nZSB0aGVpciBwcmljZSB0ZW1wb3JhcmlseS4gPC9wPlxuXG4gICAgICAgICAgICA8L0VtcHR5U3RhdGU+XG5cbiAgICAgIDwvTGF5b3V0PlxuXG4gICAgPC9QYWdlPlxuICAgIFxuICApO1xuXG4gIH1cbn1cbiAgXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})