"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[lng]/(mainLayout)/auth/otp-verification/page",{

/***/ "(app-pages-browser)/./src/Utils/Hooks/Auth/useOtpVerification.jsx":
/*!*****************************************************!*\
  !*** ./src/Utils/Hooks/Auth/useOtpVerification.jsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/lib/useMutation.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _Config_Constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Config/Constant */ \"(app-pages-browser)/./src/Config/Constant.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n// import Cookies from \"js-cookie\";\n// import { useRouter } from \"next/navigation\";\n// import { useMutation } from \"@tanstack/react-query\";\n// import request from \"../../AxiosUtils\";\n// import { VerifyTokenAPI } from \"../../AxiosUtils/API\";\n// import { ToastNotification } from \"../../CustomFunctions/ToastNotification\";\n// const useOtpVerification = () => {\n//   const router = useRouter();\n//   return useMutation((data) => request({ url: VerifyTokenAPI, method: \"post\", data }), {\n//     onSuccess: (responseData, requestData) => {\n//       if (responseData.status === 200) {\n//         Cookies.set('uo', requestData?.token)\n//         router.push(\"/auth/update-password\");\n//         ToastNotification(\"success\", responseData.data.message);\n//       }\n//     },\n//   });\n// };\n// export default useOtpVerification;\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst useOtpVerification = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)((data)=>axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(_Config_Constant__WEBPACK_IMPORTED_MODULE_2__.LOGIN_API, data), {\n        onSuccess: (responseData, requestData)=>{\n            if (responseData.status === 200 || responseData.status === 201) {\n                js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(\"uo\", requestData === null || requestData === void 0 ? void 0 : requestData.token);\n                react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(responseData.data.message);\n                router.push(\"/auth/update-password\");\n            }\n        },\n        onError: (error)=>{\n            var _error_response_data, _error_response;\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(((_error_response = error.response) === null || _error_response === void 0 ? void 0 : (_error_response_data = _error_response.data) === null || _error_response_data === void 0 ? void 0 : _error_response_data.message) || \"An error occurred\");\n        }\n    });\n};\n_s(useOtpVerification, \"lHfbI+rOT8+gOePqabn4rxRzacM=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useOtpVerification);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9VdGlscy9Ib29rcy9BdXRoL3VzZU90cFZlcmlmaWNhdGlvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLG1DQUFtQztBQUNuQywrQ0FBK0M7QUFDL0MsdURBQXVEO0FBQ3ZELDBDQUEwQztBQUMxQyx5REFBeUQ7QUFDekQsK0VBQStFO0FBRS9FLHFDQUFxQztBQUNyQyxnQ0FBZ0M7QUFDaEMsMkZBQTJGO0FBQzNGLGtEQUFrRDtBQUNsRCwyQ0FBMkM7QUFDM0MsZ0RBQWdEO0FBQ2hELGdEQUFnRDtBQUNoRCxtRUFBbUU7QUFDbkUsVUFBVTtBQUNWLFNBQVM7QUFDVCxRQUFRO0FBQ1IsS0FBSztBQUNMLHFDQUFxQzs7QUFHTDtBQUNZO0FBQ1E7QUFDMUI7QUFDb0I7QUFDUDtBQUV2QyxNQUFNTSxxQkFBcUI7O0lBQ3pCLE1BQU1DLFNBQVNOLDBEQUFTQTtJQUV4QixPQUFPQyxrRUFBV0EsQ0FDaEIsQ0FBQ00sT0FBU0wsNkNBQUtBLENBQUNNLElBQUksQ0FBQ0wsdURBQVNBLEVBQUVJLE9BQ2hDO1FBQ0VFLFdBQVcsQ0FBQ0MsY0FBY0M7WUFDeEIsSUFBSUQsYUFBYUUsTUFBTSxLQUFLLE9BQU9GLGFBQWFFLE1BQU0sS0FBSyxLQUFLO2dCQUM5RGIsaURBQU9BLENBQUNjLEdBQUcsQ0FBQyxNQUFNRix3QkFBQUEsa0NBQUFBLFlBQWFHLEtBQUs7Z0JBQ3BDVixpREFBS0EsQ0FBQ1csT0FBTyxDQUFDTCxhQUFhSCxJQUFJLENBQUNTLE9BQU87Z0JBQ3ZDVixPQUFPVyxJQUFJLENBQUM7WUFDZDtRQUNGO1FBQ0FDLFNBQVMsQ0FBQ0M7Z0JBQ0lBLHNCQUFBQTtZQUFaZixpREFBS0EsQ0FBQ2UsS0FBSyxDQUFDQSxFQUFBQSxrQkFBQUEsTUFBTUMsUUFBUSxjQUFkRCx1Q0FBQUEsdUJBQUFBLGdCQUFnQlosSUFBSSxjQUFwQlksMkNBQUFBLHFCQUFzQkgsT0FBTyxLQUFJO1FBQy9DO0lBQ0Y7QUFFSjtHQWxCTVg7O1FBQ1dMLHNEQUFTQTtRQUVqQkMsOERBQVdBOzs7QUFpQnBCLCtEQUFlSSxrQkFBa0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1V0aWxzL0hvb2tzL0F1dGgvdXNlT3RwVmVyaWZpY2F0aW9uLmpzeD8yNzhjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcbi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbi8vIGltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xuLy8gaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4uLy4uL0F4aW9zVXRpbHNcIjtcbi8vIGltcG9ydCB7IFZlcmlmeVRva2VuQVBJIH0gZnJvbSBcIi4uLy4uL0F4aW9zVXRpbHMvQVBJXCI7XG4vLyBpbXBvcnQgeyBUb2FzdE5vdGlmaWNhdGlvbiB9IGZyb20gXCIuLi8uLi9DdXN0b21GdW5jdGlvbnMvVG9hc3ROb3RpZmljYXRpb25cIjtcblxuLy8gY29uc3QgdXNlT3RwVmVyaWZpY2F0aW9uID0gKCkgPT4ge1xuLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbi8vICAgcmV0dXJuIHVzZU11dGF0aW9uKChkYXRhKSA9PiByZXF1ZXN0KHsgdXJsOiBWZXJpZnlUb2tlbkFQSSwgbWV0aG9kOiBcInBvc3RcIiwgZGF0YSB9KSwge1xuLy8gICAgIG9uU3VjY2VzczogKHJlc3BvbnNlRGF0YSwgcmVxdWVzdERhdGEpID0+IHtcbi8vICAgICAgIGlmIChyZXNwb25zZURhdGEuc3RhdHVzID09PSAyMDApIHtcbi8vICAgICAgICAgQ29va2llcy5zZXQoJ3VvJywgcmVxdWVzdERhdGE/LnRva2VuKVxuLy8gICAgICAgICByb3V0ZXIucHVzaChcIi9hdXRoL3VwZGF0ZS1wYXNzd29yZFwiKTtcbi8vICAgICAgICAgVG9hc3ROb3RpZmljYXRpb24oXCJzdWNjZXNzXCIsIHJlc3BvbnNlRGF0YS5kYXRhLm1lc3NhZ2UpO1xuLy8gICAgICAgfVxuLy8gICAgIH0sXG4vLyAgIH0pO1xuLy8gfTtcbi8vIGV4cG9ydCBkZWZhdWx0IHVzZU90cFZlcmlmaWNhdGlvbjtcblxuXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IExPR0lOX0FQSSB9IGZyb20gJ0AvQ29uZmlnL0NvbnN0YW50JztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuXG5jb25zdCB1c2VPdHBWZXJpZmljYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiB1c2VNdXRhdGlvbihcbiAgICAoZGF0YSkgPT4gYXhpb3MucG9zdChMT0dJTl9BUEksIGRhdGEpLCAvLyBVc2UgTE9HSU5fQVBJIGZvciBPVFAgdmVyaWZpY2F0aW9uXG4gICAge1xuICAgICAgb25TdWNjZXNzOiAocmVzcG9uc2VEYXRhLCByZXF1ZXN0RGF0YSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2VEYXRhLnN0YXR1cyA9PT0gMjAwIHx8IHJlc3BvbnNlRGF0YS5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICAgIENvb2tpZXMuc2V0KCd1bycsIHJlcXVlc3REYXRhPy50b2tlbik7XG4gICAgICAgICAgdG9hc3Quc3VjY2VzcyhyZXNwb25zZURhdGEuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICByb3V0ZXIucHVzaChcIi9hdXRoL3VwZGF0ZS1wYXNzd29yZFwiKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICB0b2FzdC5lcnJvcihlcnJvci5yZXNwb25zZT8uZGF0YT8ubWVzc2FnZSB8fCAnQW4gZXJyb3Igb2NjdXJyZWQnKTtcbiAgICAgIH0sXG4gICAgfVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlT3RwVmVyaWZpY2F0aW9uO1xuIl0sIm5hbWVzIjpbIkNvb2tpZXMiLCJ1c2VSb3V0ZXIiLCJ1c2VNdXRhdGlvbiIsImF4aW9zIiwiTE9HSU5fQVBJIiwidG9hc3QiLCJ1c2VPdHBWZXJpZmljYXRpb24iLCJyb3V0ZXIiLCJkYXRhIiwicG9zdCIsIm9uU3VjY2VzcyIsInJlc3BvbnNlRGF0YSIsInJlcXVlc3REYXRhIiwic3RhdHVzIiwic2V0IiwidG9rZW4iLCJzdWNjZXNzIiwibWVzc2FnZSIsInB1c2giLCJvbkVycm9yIiwiZXJyb3IiLCJyZXNwb25zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Utils/Hooks/Auth/useOtpVerification.jsx\n"));

/***/ })

});