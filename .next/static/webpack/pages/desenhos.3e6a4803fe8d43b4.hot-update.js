"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/desenhos",{

/***/ "./pages/desenhos.js":
/*!***************************!*\
  !*** ./pages/desenhos.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../AppData/Local/Yarn/Berry/cache/react-npm-18.3.1-af38f3c1ae-10c0.zip/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../AppData/Local/Yarn/Berry/cache/react-npm-18.3.1-af38f3c1ae-10c0.zip/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_ImageGallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ImageGallery */ \"./components/ImageGallery.js\");\n/* harmony import */ var _components_ImageModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ImageModal */ \"./components/ImageModal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst drawings = [\n    {\n        id: 1,\n        src: \"/images/drawings/me.png\",\n        title: \"Drawing 1\"\n    },\n    {\n        id: 2,\n        src: \"/images/drawings/partidas.png\",\n        title: \"Drawing 2\"\n    }\n];\nconst DrawingsPage = ()=>{\n    _s();\n    const [selectedImage, setSelectedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const openModal = (image)=>{\n        setSelectedImage(image);\n    };\n    const closeModal = ()=>{\n        setSelectedImage(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto px-4 py-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-4xl font-bold mb-8\",\n                    children: \"Your Artist Drawing Gallery\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\pedro.verani\\\\Desktop\\\\plinio\\\\pages\\\\desenhos.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ImageGallery__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    images: drawings,\n                    onImageClick: openModal\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\pedro.verani\\\\Desktop\\\\plinio\\\\pages\\\\desenhos.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined),\n                selectedImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ImageModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    image: selectedImage,\n                    onClose: closeModal,\n                    onPrev: ()=>{},\n                    onNext: ()=>{}\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\pedro.verani\\\\Desktop\\\\plinio\\\\pages\\\\desenhos.js\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\pedro.verani\\\\Desktop\\\\plinio\\\\pages\\\\desenhos.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\pedro.verani\\\\Desktop\\\\plinio\\\\pages\\\\desenhos.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DrawingsPage, \"gNHFCSJ3h3sH8HFrpxN7hUqoxHs=\");\n_c = DrawingsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DrawingsPage);\nvar _c;\n$RefreshReg$(_c, \"DrawingsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZXNlbmhvcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXdDO0FBQ0U7QUFDWTtBQUNKO0FBRWxELE1BQU1LLFdBQVc7SUFDZjtRQUFFQyxJQUFJO1FBQUdDLEtBQUs7UUFBMkJDLE9BQU87SUFBWTtJQUM1RDtRQUFFRixJQUFJO1FBQUdDLEtBQUs7UUFBaUNDLE9BQU87SUFBWTtDQUVuRTtBQUVELE1BQU1DLGVBQWU7O0lBQ25CLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdWLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU1XLFlBQVksQ0FBQ0M7UUFDakJGLGlCQUFpQkU7SUFDbkI7SUFFQSxNQUFNQyxhQUFhO1FBQ2pCSCxpQkFBaUI7SUFDbkI7SUFFQSxxQkFDRSw4REFBQ1QsMERBQU1BO2tCQUNMLDRFQUFDYTtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQTBCOzs7Ozs7OEJBQ3hDLDhEQUFDYixnRUFBWUE7b0JBQUNlLFFBQVFiO29CQUFVYyxjQUFjUDs7Ozs7O2dCQUM3Q0YsK0JBQ0MsOERBQUNOLDhEQUFVQTtvQkFDVFMsT0FBT0g7b0JBQ1BVLFNBQVNOO29CQUNUTyxRQUFRLEtBQTJDO29CQUNuREMsUUFBUSxLQUF1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNM0Q7R0EzQk1iO0tBQUFBO0FBNkJOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Rlc2VuaG9zLmpzPzVlYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IEltYWdlR2FsbGVyeSBmcm9tICcuLi9jb21wb25lbnRzL0ltYWdlR2FsbGVyeSc7XHJcbmltcG9ydCBJbWFnZU1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvSW1hZ2VNb2RhbCc7XHJcblxyXG5jb25zdCBkcmF3aW5ncyA9IFtcclxuICB7IGlkOiAxLCBzcmM6ICcvaW1hZ2VzL2RyYXdpbmdzL21lLnBuZycsIHRpdGxlOiAnRHJhd2luZyAxJyB9LFxyXG4gIHsgaWQ6IDIsIHNyYzogJy9pbWFnZXMvZHJhd2luZ3MvcGFydGlkYXMucG5nJywgdGl0bGU6ICdEcmF3aW5nIDInIH0sXHJcbiAgLy8gQWRkIG1vcmUgZHJhd2luZ3MgaGVyZVxyXG5dO1xyXG5cclxuY29uc3QgRHJhd2luZ3NQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZEltYWdlLCBzZXRTZWxlY3RlZEltYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBvcGVuTW9kYWwgPSAoaW1hZ2UpID0+IHtcclxuICAgIHNldFNlbGVjdGVkSW1hZ2UoaW1hZ2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZEltYWdlKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHktOFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItOFwiPllvdXIgQXJ0aXN0IERyYXdpbmcgR2FsbGVyeTwvaDE+XHJcbiAgICAgICAgPEltYWdlR2FsbGVyeSBpbWFnZXM9e2RyYXdpbmdzfSBvbkltYWdlQ2xpY2s9e29wZW5Nb2RhbH0gLz5cclxuICAgICAgICB7c2VsZWN0ZWRJbWFnZSAmJiAoXHJcbiAgICAgICAgICA8SW1hZ2VNb2RhbFxyXG4gICAgICAgICAgICBpbWFnZT17c2VsZWN0ZWRJbWFnZX1cclxuICAgICAgICAgICAgb25DbG9zZT17Y2xvc2VNb2RhbH1cclxuICAgICAgICAgICAgb25QcmV2PXsoKSA9PiB7LyogSW1wbGVtZW50IHByZXZpb3VzIGltYWdlIGxvZ2ljICovfX1cclxuICAgICAgICAgICAgb25OZXh0PXsoKSA9PiB7LyogSW1wbGVtZW50IG5leHQgaW1hZ2UgbG9naWMgKi99fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcmF3aW5nc1BhZ2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMYXlvdXQiLCJJbWFnZUdhbGxlcnkiLCJJbWFnZU1vZGFsIiwiZHJhd2luZ3MiLCJpZCIsInNyYyIsInRpdGxlIiwiRHJhd2luZ3NQYWdlIiwic2VsZWN0ZWRJbWFnZSIsInNldFNlbGVjdGVkSW1hZ2UiLCJvcGVuTW9kYWwiLCJpbWFnZSIsImNsb3NlTW9kYWwiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImltYWdlcyIsIm9uSW1hZ2VDbGljayIsIm9uQ2xvc2UiLCJvblByZXYiLCJvbk5leHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/desenhos.js\n"));

/***/ })

});