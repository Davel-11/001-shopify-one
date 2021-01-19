module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/annotated-layout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/annotated-layout.js":
/*!***********************************!*\
  !*** ./pages/annotated-layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/davel/Desktop/Developer/000-SelfProy/001-shopify-one/pages/annotated-layout.js\";\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nclass AnnotatedLayout extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      discount: '10%'\n    });\n\n    _defineProperty(this, \"handleSubmit\", () => {\n      this.setState({\n        discount: this.state.discount\n      });\n      console.log('submission', this.state);\n    });\n\n    _defineProperty(this, \"handleChange\", field => {\n      return value => this.setState({\n        [field]: value\n      });\n    });\n\n    _defineProperty(this, \"handleToggle\", () => {\n      this.setState(({\n        enabled\n      }) => {\n        return {\n          enabled: !enabled\n        };\n      });\n    });\n  }\n\n  render() {\n    const {\n      discount,\n      enabled\n    } = this.state;\n    const contentStatus = enabled ? 'Disable' : 'Enable';\n    const textStatus = enabled ? 'enabled' : 'disabled';\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Page\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].AnnotatedSection, {\n          title: \"Default discount\",\n          description: \"Add a product to Sample App, it will automatically be discounted.\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n            sectioned: true,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Form\"], {\n              onSubmit: this.handleSubmit,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"FormLayout\"], {\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n                  value: discount,\n                  onChange: this.handleChange('discount'),\n                  label: \"Discount percentage\",\n                  type: \"discount\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 40,\n                  columnNumber: 21\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Stack\"], {\n                  distribution: \"trailing\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n                    primary: true,\n                    submit: true,\n                    children: \"Save\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 47,\n                    columnNumber: 23\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 46,\n                  columnNumber: 21\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 39,\n                columnNumber: 19\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].AnnotatedSection, {\n          title: \"Price updates\",\n          description: \"Temporarily disable all Sample App price updates\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"SettingToggle\"], {\n            action: {\n              content: contentStatus,\n              onAction: this.handleToggle\n            },\n            enabled: enabled,\n            children: [\"This setting is\", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"TextStyle\"], {\n              variation: \"strong\",\n              children: textStatus\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 21\n            }, this), \".\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnnotatedLayout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hbm5vdGF0ZWQtbGF5b3V0LmpzPzAxNzciXSwibmFtZXMiOlsiQW5ub3RhdGVkTGF5b3V0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJkaXNjb3VudCIsInNldFN0YXRlIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZmllbGQiLCJ2YWx1ZSIsImVuYWJsZWQiLCJyZW5kZXIiLCJjb250ZW50U3RhdHVzIiwidGV4dFN0YXR1cyIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImNvbnRlbnQiLCJvbkFjdGlvbiIsImhhbmRsZVRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFjRSxNQUFNQSxlQUFOLFNBQThCQyw0Q0FBSyxDQUFDQyxTQUFwQyxDQUE4QztBQUFBO0FBQUE7O0FBQUEsbUNBRXBDO0FBQ05DLGNBQVEsRUFBRTtBQURKLEtBRm9DOztBQUFBLDBDQStEN0IsTUFBTTtBQUNuQixXQUFLQyxRQUFMLENBQWM7QUFDWkQsZ0JBQVEsRUFBRSxLQUFLRSxLQUFMLENBQVdGO0FBRFQsT0FBZDtBQUdBRyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCLEtBQUtGLEtBQS9CO0FBQ0QsS0FwRTJDOztBQUFBLDBDQXNFNUJHLEtBQUQsSUFBVztBQUN4QixhQUFRQyxLQUFELElBQVcsS0FBS0wsUUFBTCxDQUFjO0FBQUUsU0FBQ0ksS0FBRCxHQUFTQztBQUFYLE9BQWQsQ0FBbEI7QUFDRCxLQXhFMkM7O0FBQUEsMENBMEU3QixNQUFNO0FBQ2pCLFdBQUtMLFFBQUwsQ0FBYyxDQUFDO0FBQUVNO0FBQUYsT0FBRCxLQUFpQjtBQUM3QixlQUFPO0FBQUVBLGlCQUFPLEVBQUUsQ0FBQ0E7QUFBWixTQUFQO0FBQ0QsT0FGRDtBQUdILEtBOUUyQztBQUFBOztBQU01Q0MsUUFBTSxHQUFHO0FBRUwsVUFBTTtBQUFFUixjQUFGO0FBQVlPO0FBQVosUUFBd0IsS0FBS0wsS0FBbkM7QUFDQSxVQUFNTyxhQUFhLEdBQUdGLE9BQU8sR0FBRyxTQUFILEdBQWUsUUFBNUM7QUFDQSxVQUFNRyxVQUFVLEdBQUdILE9BQU8sR0FBRyxTQUFILEdBQWUsVUFBekM7QUFFRix3QkFDRSxxRUFBQyxxREFBRDtBQUFBLDZCQUNFLHFFQUFDLHVEQUFEO0FBQUEsZ0NBRUUscUVBQUMsdURBQUQsQ0FBUSxnQkFBUjtBQUNFLGVBQUssRUFBQyxrQkFEUjtBQUVFLHFCQUFXLEVBQUMsbUVBRmQ7QUFBQSxpQ0FJRSxxRUFBQyxxREFBRDtBQUFNLHFCQUFTLE1BQWY7QUFBQSxtQ0FDRSxxRUFBQyxxREFBRDtBQUFNLHNCQUFRLEVBQUUsS0FBS0ksWUFBckI7QUFBQSxxQ0FDRSxxRUFBQywyREFBRDtBQUFBLHdDQUNFLHFFQUFDLDBEQUFEO0FBQ0UsdUJBQUssRUFBRVgsUUFEVDtBQUVFLDBCQUFRLEVBQUUsS0FBS1ksWUFBTCxDQUFrQixVQUFsQixDQUZaO0FBR0UsdUJBQUssRUFBQyxxQkFIUjtBQUlFLHNCQUFJLEVBQUM7QUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBT0UscUVBQUMsc0RBQUQ7QUFBTyw4QkFBWSxFQUFDLFVBQXBCO0FBQUEseUNBQ0UscUVBQUMsdURBQUQ7QUFBUSwyQkFBTyxNQUFmO0FBQWdCLDBCQUFNLE1BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUEwQkUscUVBQUMsdURBQUQsQ0FBUSxnQkFBUjtBQUNJLGVBQUssRUFBQyxlQURWO0FBRUkscUJBQVcsRUFBQyxrREFGaEI7QUFBQSxpQ0FJSSxxRUFBQyw4REFBRDtBQUVJLGtCQUFNLEVBQUU7QUFDSkMscUJBQU8sRUFBRUosYUFETDtBQUVKSyxzQkFBUSxFQUFFLEtBQUtDO0FBRlgsYUFGWjtBQU1JLG1CQUFPLEVBQUVSLE9BTmI7QUFBQSwwQ0FPb0IsR0FQcEIsZUFRSSxxRUFBQywwREFBRDtBQUFXLHVCQUFTLEVBQUMsUUFBckI7QUFBQSx3QkFBK0JHO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBaUREOztBQTdEMkM7O0FBa0YvQmIsOEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9hbm5vdGF0ZWQtbGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgICBCdXR0b24sXG4gICAgQ2FyZCxcbiAgICBGb3JtLFxuICAgIEZvcm1MYXlvdXQsXG4gICAgTGF5b3V0LFxuICAgIFBhZ2UsXG4gICAgU2V0dGluZ1RvZ2dsZSxcbiAgICBTdGFjayxcbiAgICBUZXh0RmllbGQsXG4gICAgVGV4dFN0eWxlLFxuICB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xuXG4gIFxuICBjbGFzcyBBbm5vdGF0ZWRMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICBkaXNjb3VudDogJzEwJScsXG4gICAgfTtcbiAgXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHsgZGlzY291bnQsIGVuYWJsZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRTdGF0dXMgPSBlbmFibGVkID8gJ0Rpc2FibGUnIDogJ0VuYWJsZSc7XG4gICAgICAgIGNvbnN0IHRleHRTdGF0dXMgPSBlbmFibGVkID8gJ2VuYWJsZWQnIDogJ2Rpc2FibGVkJztcbiAgXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UGFnZT5cbiAgICAgICAgICA8TGF5b3V0PlxuXG4gICAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cbiAgICAgICAgICAgICAgdGl0bGU9XCJEZWZhdWx0IGRpc2NvdW50XCJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJBZGQgYSBwcm9kdWN0IHRvIFNhbXBsZSBBcHAsIGl0IHdpbGwgYXV0b21hdGljYWxseSBiZSBkaXNjb3VudGVkLlwiID5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cbiAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGlzY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdkaXNjb3VudCcpfVxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGlzY291bnQgcGVyY2VudGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRpc2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpc3RyaWJ1dGlvbj1cInRyYWlsaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IHN1Ym1pdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dD5cbiAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cblxuICAgICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cbiAgICAgICAgICBcbiAgICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxuICAgICAgICAgICAgICAgIHRpdGxlPVwiUHJpY2UgdXBkYXRlc1wiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJUZW1wb3JhcmlseSBkaXNhYmxlIGFsbCBTYW1wbGUgQXBwIHByaWNlIHVwZGF0ZXNcIj5cblxuICAgICAgICAgICAgICAgIDxTZXR0aW5nVG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnRTdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbjogdGhpcy5oYW5kbGVUb2dnbGUsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ9e2VuYWJsZWR9PlxuICAgICAgICAgICAgICAgICAgICBUaGlzIHNldHRpbmcgaXN7JyAnfVxuICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPnt0ZXh0U3RhdHVzfTwvVGV4dFN0eWxlPi5cblxuICAgICAgICAgICAgICAgIDwvU2V0dGluZ1RvZ2dsZT5cblxuICAgICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cblxuICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8L1BhZ2U+XG4gICAgICApO1xuICAgIH1cbiAgXG4gICAgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRpc2NvdW50OiB0aGlzLnN0YXRlLmRpc2NvdW50LFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZygnc3VibWlzc2lvbicsIHRoaXMuc3RhdGUpO1xuICAgIH07XG4gIFxuICAgIGhhbmRsZUNoYW5nZSA9IChmaWVsZCkgPT4ge1xuICAgICAgcmV0dXJuICh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IFtmaWVsZF06IHZhbHVlIH0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVUb2dnbGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHsgZW5hYmxlZCB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgZW5hYmxlZDogIWVuYWJsZWQgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBBbm5vdGF0ZWRMYXlvdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/annotated-layout.js\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });