"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/pinturas",{

/***/ "./components/ImageModal.js":
/*!**********************************!*\
  !*** ./components/ImageModal.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../AppData/Local/Yarn/Berry/cache/react-npm-18.3.1-af38f3c1ae-10c0.zip/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../AppData/Local/Yarn/Berry/cache/react-npm-18.3.1-af38f3c1ae-10c0.zip/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./.yarn/__virtual__/next-virtual-3deacf16c5/3/AppData/Local/Yarn/Berry/cache/next-npm-14.2.14-ec3d370484-10c0.zip/node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst ImageModal = (param)=>{\n    let { image, onClose, onPrev, onNext } = param;\n    const handleContentClick = (e)=>{\n        e.stopPropagation();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50\",\n        onClick: onClose,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-4xl w-full mx-4\",\n            onClick: handleContentClick,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: image.src,\n                            alt: image.title,\n                            width: 1280,\n                            height: 800,\n                            objectFit: \"contain\",\n                            style: {\n                                maxHeight: \"5120\",\n                                maxWidth: \"40%\",\n                                height: \"auto\",\n                                width: \"auto\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pedro.verani\\\\Desktop\\\\plinio\\\\components\\\\ImageModal.js\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"absolute top-4 right-4 text-white text-2xl\",\n                            onClick: onClose,\n                            children: \"\\xd7\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pedro.verani\\\\Desktop\\\\plinio\\\\components\\\\ImageModal.js\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl\",\n                            onClick: onPrev,\n                            children: \"‹\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pedro.verani\\\\Desktop\\\\plinio\\\\components\\\\ImageModal.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl\",\n                            onClick: onNext,\n                            children: \"›\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pedro.verani\\\\Desktop\\\\plinio\\\\components\\\\ImageModal.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\pedro.verani\\\\Desktop\\\\plinio\\\\components\\\\ImageModal.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white p-4 mt-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-bold\",\n                        children: image.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pedro.verani\\\\Desktop\\\\plinio\\\\components\\\\ImageModal.js\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\pedro.verani\\\\Desktop\\\\plinio\\\\components\\\\ImageModal.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\pedro.verani\\\\Desktop\\\\plinio\\\\components\\\\ImageModal.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\pedro.verani\\\\Desktop\\\\plinio\\\\components\\\\ImageModal.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ImageModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageModal);\nvar _c;\n$RefreshReg$(_c, \"ImageModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ltYWdlTW9kYWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFDSztBQUUvQixNQUFNRSxhQUFhO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFO0lBQ3BELE1BQU1DLHFCQUFxQixDQUFDQztRQUMxQkEsRUFBRUMsZUFBZTtJQUNuQjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO1FBQTZFQyxTQUFTUjtrQkFDbkcsNEVBQUNNO1lBQUlDLFdBQVU7WUFBd0JDLFNBQVNMOzs4QkFDOUMsOERBQUNHO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ1YsbURBQUtBOzRCQUNKWSxLQUFLVixNQUFNVSxHQUFHOzRCQUNkQyxLQUFLWCxNQUFNWSxLQUFLOzRCQUNoQkMsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUkMsV0FBVTs0QkFDVkMsT0FBTztnQ0FBRUMsV0FBVztnQ0FBUUMsVUFBVTtnQ0FBT0osUUFBUTtnQ0FBUUQsT0FBTzs0QkFBTzs7Ozs7O3NDQUU3RSw4REFBQ007NEJBQ0NYLFdBQVU7NEJBQ1ZDLFNBQVNSO3NDQUNWOzs7Ozs7c0NBR0QsOERBQUNrQjs0QkFDQ1gsV0FBVTs0QkFDVkMsU0FBU1A7c0NBQ1Y7Ozs7OztzQ0FHRCw4REFBQ2lCOzRCQUNDWCxXQUFVOzRCQUNWQyxTQUFTTjtzQ0FDVjs7Ozs7Ozs7Ozs7OzhCQUlILDhEQUFDSTtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ1k7d0JBQUdaLFdBQVU7a0NBQXFCUixNQUFNWSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hEO0tBMUNNYjtBQTRDTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ltYWdlTW9kYWwuanM/MWQ3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5jb25zdCBJbWFnZU1vZGFsID0gKHsgaW1hZ2UsIG9uQ2xvc2UsIG9uUHJldiwgb25OZXh0IH0pID0+IHtcclxuICBjb25zdCBoYW5kbGVDb250ZW50Q2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWJsYWNrIGJnLW9wYWNpdHktNzUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgei01MFwiIG9uQ2xpY2s9e29uQ2xvc2V9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTR4bCB3LWZ1bGwgbXgtNFwiIG9uQ2xpY2s9e2hhbmRsZUNvbnRlbnRDbGlja30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz17aW1hZ2Uuc3JjfVxyXG4gICAgICAgICAgICBhbHQ9e2ltYWdlLnRpdGxlfVxyXG4gICAgICAgICAgICB3aWR0aD17MTI4MH1cclxuICAgICAgICAgICAgaGVpZ2h0PXs4MDB9XHJcbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6ICc1MTIwJywgbWF4V2lkdGg6ICc0MCUnLCBoZWlnaHQ6ICdhdXRvJywgd2lkdGg6ICdhdXRvJyB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgcmlnaHQtNCB0ZXh0LXdoaXRlIHRleHQtMnhsXCJcclxuICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgw5dcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTQgdG9wLTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMiB0ZXh0LXdoaXRlIHRleHQtNHhsXCJcclxuICAgICAgICAgICAgb25DbGljaz17b25QcmV2fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICDigLlcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC00IHRvcC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgdGV4dC13aGl0ZSB0ZXh0LTR4bFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uTmV4dH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAg4oC6XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNCBtdC00XCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj57aW1hZ2UudGl0bGV9PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VNb2RhbDsiXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIkltYWdlTW9kYWwiLCJpbWFnZSIsIm9uQ2xvc2UiLCJvblByZXYiLCJvbk5leHQiLCJoYW5kbGVDb250ZW50Q2xpY2siLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInNyYyIsImFsdCIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJzdHlsZSIsIm1heEhlaWdodCIsIm1heFdpZHRoIiwiYnV0dG9uIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ImageModal.js\n"));

/***/ })

});