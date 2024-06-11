"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[lng]/(mainLayout)/auth/login/page",{

/***/ "(app-pages-browser)/./src/Utils/Hooks/Auth/useLogin.jsx":
/*!*******************************************!*\
  !*** ./src/Utils/Hooks/Auth/useLogin.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LogInSchema: function() { return /* binding */ LogInSchema; }\n/* harmony export */ });\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/lib/useMutation.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _Validation_ValidationSchemas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Validation/ValidationSchemas */ \"(app-pages-browser)/./src/Utils/Validation/ValidationSchemas.js\");\n/* harmony import */ var _Config_Constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Config/Constant */ \"(app-pages-browser)/./src/Config/Constant.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Helper_I18NextContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Helper/I18NextContext */ \"(app-pages-browser)/./src/Helper/I18NextContext/index.jsx\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _Helper_AccountContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Helper/AccountContext */ \"(app-pages-browser)/./src/Helper/AccountContext/index.jsx\");\n/* harmony import */ var _Helper_CompareContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Helper/CompareContext */ \"(app-pages-browser)/./src/Helper/CompareContext/index.jsx\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst LogInSchema = (0,_Validation_ValidationSchemas__WEBPACK_IMPORTED_MODULE_0__.YupObject)({\n    email: _Validation_ValidationSchemas__WEBPACK_IMPORTED_MODULE_0__.emailSchema,\n    password: _Validation_ValidationSchemas__WEBPACK_IMPORTED_MODULE_0__.passwordSchema\n});\nconst LoginHandle = (responseData, router, i18Lang, refetch, compareRefetch)=>{\n    if (responseData.status === 200 || responseData.status === 201) {\n        var _responseData_data;\n        const token = (_responseData_data = responseData.data) === null || _responseData_data === void 0 ? void 0 : _responseData_data.access_token; // Ensure the token is correctly retrieved\n        js_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].set(\"uat\", token, {\n            path: \"/\",\n            expires: new Date(Date.now() + 24 * 60 * 6000)\n        });\n        if (true) {\n            js_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].set(\"account\", JSON.stringify(responseData.data));\n            localStorage.setItem(\"account\", JSON.stringify(responseData.data));\n        }\n        refetch();\n        compareRefetch();\n        router.push(\"/\".concat(i18Lang, \"/account/dashboard\"));\n        react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success(\"Login successful. Token: \".concat(token)); // Display the token in the toast\n    }\n};\n_c = LoginHandle;\nconst useHandleLogin = ()=>{\n    _s();\n    const { i18Lang } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_Helper_I18NextContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    const { refetch } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_Helper_AccountContext__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n    const { refetch: compareRefetch } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_Helper_CompareContext__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__.useMutation)((data)=>axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].post(_Config_Constant__WEBPACK_IMPORTED_MODULE_1__.LOGIN_API, data), {\n        onSuccess: (responseData)=>LoginHandle(responseData, router, i18Lang, refetch, compareRefetch),\n        onError: (error)=>{\n            var _error_response_data, _error_response;\n            react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error(((_error_response = error.response) === null || _error_response === void 0 ? void 0 : (_error_response_data = _error_response.data) === null || _error_response_data === void 0 ? void 0 : _error_response_data.message) || \"An error occurred\");\n        }\n    });\n};\n_s(useHandleLogin, \"FWePS58jHrTw0hlo5+mV+2o3Q5I=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__.useMutation\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useHandleLogin);\nvar _c;\n$RefreshReg$(_c, \"LoginHandle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9VdGlscy9Ib29rcy9BdXRoL3VzZUxvZ2luLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFvRDtBQUMxQjtBQUNrRTtBQUM5QztBQUNGO0FBQ1Q7QUFDa0I7QUFDckI7QUFDcUI7QUFDQTtBQUNkO0FBRWhDLE1BQU1hLGNBQWNULHdFQUFTQSxDQUFDO0lBQ25DVSxPQUFPWixzRUFBV0E7SUFDbEJhLFVBQVVaLHlFQUFjQTtBQUMxQixHQUFHO0FBRUgsTUFBTWEsY0FBYyxDQUFDQyxjQUFjQyxRQUFRQyxTQUFTQyxTQUFTQztJQUMzRCxJQUFJSixhQUFhSyxNQUFNLEtBQUssT0FBT0wsYUFBYUssTUFBTSxLQUFLLEtBQUs7WUFDaERMO1FBQWQsTUFBTU0sU0FBUU4scUJBQUFBLGFBQWFPLElBQUksY0FBakJQLHlDQUFBQSxtQkFBbUJRLFlBQVksRUFBRywwQ0FBMEM7UUFDMUZoQixpREFBT0EsQ0FBQ2lCLEdBQUcsQ0FBQyxPQUFPSCxPQUFPO1lBQUVJLE1BQU07WUFBS0MsU0FBUyxJQUFJQyxLQUFLQSxLQUFLQyxHQUFHLEtBQUssS0FBSyxLQUFLO1FBQU07UUFDdEYsSUFBSSxJQUFrQixFQUFhO1lBQ2pDckIsaURBQU9BLENBQUNpQixHQUFHLENBQUMsV0FBV0ssS0FBS0MsU0FBUyxDQUFDZixhQUFhTyxJQUFJO1lBQ3ZEUyxhQUFhQyxPQUFPLENBQUMsV0FBV0gsS0FBS0MsU0FBUyxDQUFDZixhQUFhTyxJQUFJO1FBQ2xFO1FBQ0FKO1FBQ0FDO1FBQ0FILE9BQU9pQixJQUFJLENBQUMsSUFBWSxPQUFSaEIsU0FBUTtRQUN4QlAsaURBQUtBLENBQUN3QixPQUFPLENBQUMsNEJBQWtDLE9BQU5iLFNBQVcsaUNBQWlDO0lBQ3hGO0FBQ0Y7S0FiTVA7QUFlTixNQUFNcUIsaUJBQWlCOztJQUNyQixNQUFNLEVBQUVsQixPQUFPLEVBQUUsR0FBR1osaURBQVVBLENBQUNDLDhEQUFjQTtJQUM3QyxNQUFNLEVBQUVZLE9BQU8sRUFBRSxHQUFHYixpREFBVUEsQ0FBQ0csOERBQWNBO0lBQzdDLE1BQU0sRUFBRVUsU0FBU0MsY0FBYyxFQUFFLEdBQUdkLGlEQUFVQSxDQUFDSSw4REFBY0E7SUFDN0QsTUFBTU8sU0FBU1osMERBQVNBO0lBRXhCLE9BQU9OLGtFQUFXQSxDQUNoQixDQUFDd0IsT0FBU3ZCLDhDQUFLQSxDQUFDcUMsSUFBSSxDQUFDakMsdURBQVNBLEVBQUVtQixPQUNoQztRQUNFZSxXQUFXLENBQUN0QixlQUFpQkQsWUFBWUMsY0FBY0MsUUFBUUMsU0FBU0MsU0FBU0M7UUFDakZtQixTQUFTLENBQUNDO2dCQUNJQSxzQkFBQUE7WUFBWjdCLGlEQUFLQSxDQUFDNkIsS0FBSyxDQUFDQSxFQUFBQSxrQkFBQUEsTUFBTUMsUUFBUSxjQUFkRCx1Q0FBQUEsdUJBQUFBLGdCQUFnQmpCLElBQUksY0FBcEJpQiwyQ0FBQUEscUJBQXNCRSxPQUFPLEtBQUk7UUFDL0M7SUFDRjtBQUVKO0dBZk1OOztRQUlXL0Isc0RBQVNBO1FBRWpCTiw4REFBV0E7OztBQVdwQiwrREFBZXFDLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1V0aWxzL0hvb2tzL0F1dGgvdXNlTG9naW4uanN4PzZiMTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IGVtYWlsU2NoZW1hLCBwYXNzd29yZFNjaGVtYSwgWXVwT2JqZWN0IH0gZnJvbSAnLi4vLi4vVmFsaWRhdGlvbi9WYWxpZGF0aW9uU2NoZW1hcyc7XG5pbXBvcnQgeyBMT0dJTl9BUEkgfSBmcm9tICdAL0NvbmZpZy9Db25zdGFudCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJMThOZXh0Q29udGV4dCBmcm9tICdAL0hlbHBlci9JMThOZXh0Q29udGV4dCc7XG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IEFjY291bnRDb250ZXh0IGZyb20gJ0AvSGVscGVyL0FjY291bnRDb250ZXh0JztcbmltcG9ydCBDb21wYXJlQ29udGV4dCBmcm9tICdAL0hlbHBlci9Db21wYXJlQ29udGV4dCc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcblxuZXhwb3J0IGNvbnN0IExvZ0luU2NoZW1hID0gWXVwT2JqZWN0KHtcbiAgZW1haWw6IGVtYWlsU2NoZW1hLFxuICBwYXNzd29yZDogcGFzc3dvcmRTY2hlbWEsXG59KTtcblxuY29uc3QgTG9naW5IYW5kbGUgPSAocmVzcG9uc2VEYXRhLCByb3V0ZXIsIGkxOExhbmcsIHJlZmV0Y2gsIGNvbXBhcmVSZWZldGNoKSA9PiB7XG4gIGlmIChyZXNwb25zZURhdGEuc3RhdHVzID09PSAyMDAgfHwgcmVzcG9uc2VEYXRhLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgY29uc3QgdG9rZW4gPSByZXNwb25zZURhdGEuZGF0YT8uYWNjZXNzX3Rva2VuOyAgLy8gRW5zdXJlIHRoZSB0b2tlbiBpcyBjb3JyZWN0bHkgcmV0cmlldmVkXG4gICAgQ29va2llcy5zZXQoJ3VhdCcsIHRva2VuLCB7IHBhdGg6ICcvJywgZXhwaXJlczogbmV3IERhdGUoRGF0ZS5ub3coKSArIDI0ICogNjAgKiA2MDAwKSB9KTtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIENvb2tpZXMuc2V0KCdhY2NvdW50JywgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2VEYXRhLmRhdGEpKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY2NvdW50JywgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2VEYXRhLmRhdGEpKTtcbiAgICB9XG4gICAgcmVmZXRjaCgpO1xuICAgIGNvbXBhcmVSZWZldGNoKCk7XG4gICAgcm91dGVyLnB1c2goYC8ke2kxOExhbmd9L2FjY291bnQvZGFzaGJvYXJkYCk7XG4gICAgdG9hc3Quc3VjY2VzcyhgTG9naW4gc3VjY2Vzc2Z1bC4gVG9rZW46ICR7dG9rZW59YCk7ICAvLyBEaXNwbGF5IHRoZSB0b2tlbiBpbiB0aGUgdG9hc3RcbiAgfVxufTtcblxuY29uc3QgdXNlSGFuZGxlTG9naW4gPSAoKSA9PiB7XG4gIGNvbnN0IHsgaTE4TGFuZyB9ID0gdXNlQ29udGV4dChJMThOZXh0Q29udGV4dCk7XG4gIGNvbnN0IHsgcmVmZXRjaCB9ID0gdXNlQ29udGV4dChBY2NvdW50Q29udGV4dCk7XG4gIGNvbnN0IHsgcmVmZXRjaDogY29tcGFyZVJlZmV0Y2ggfSA9IHVzZUNvbnRleHQoQ29tcGFyZUNvbnRleHQpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICByZXR1cm4gdXNlTXV0YXRpb24oXG4gICAgKGRhdGEpID0+IGF4aW9zLnBvc3QoTE9HSU5fQVBJLCBkYXRhKSxcbiAgICB7XG4gICAgICBvblN1Y2Nlc3M6IChyZXNwb25zZURhdGEpID0+IExvZ2luSGFuZGxlKHJlc3BvbnNlRGF0YSwgcm91dGVyLCBpMThMYW5nLCByZWZldGNoLCBjb21wYXJlUmVmZXRjaCksXG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgdG9hc3QuZXJyb3IoZXJyb3IucmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2UgfHwgJ0FuIGVycm9yIG9jY3VycmVkJyk7XG4gICAgICB9LFxuICAgIH0sXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VIYW5kbGVMb2dpbjtcbiJdLCJuYW1lcyI6WyJ1c2VNdXRhdGlvbiIsImF4aW9zIiwiZW1haWxTY2hlbWEiLCJwYXNzd29yZFNjaGVtYSIsIll1cE9iamVjdCIsIkxPR0lOX0FQSSIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJJMThOZXh0Q29udGV4dCIsIkNvb2tpZXMiLCJBY2NvdW50Q29udGV4dCIsIkNvbXBhcmVDb250ZXh0IiwidG9hc3QiLCJMb2dJblNjaGVtYSIsImVtYWlsIiwicGFzc3dvcmQiLCJMb2dpbkhhbmRsZSIsInJlc3BvbnNlRGF0YSIsInJvdXRlciIsImkxOExhbmciLCJyZWZldGNoIiwiY29tcGFyZVJlZmV0Y2giLCJzdGF0dXMiLCJ0b2tlbiIsImRhdGEiLCJhY2Nlc3NfdG9rZW4iLCJzZXQiLCJwYXRoIiwiZXhwaXJlcyIsIkRhdGUiLCJub3ciLCJKU09OIiwic3RyaW5naWZ5IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInB1c2giLCJzdWNjZXNzIiwidXNlSGFuZGxlTG9naW4iLCJwb3N0Iiwib25TdWNjZXNzIiwib25FcnJvciIsImVycm9yIiwicmVzcG9uc2UiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Utils/Hooks/Auth/useLogin.jsx\n"));

/***/ })

});