/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core.ts":
/*!*********************!*\
  !*** ./src/core.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _taskManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskManager */ \"./src/taskManager.ts\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction registerServices() {\n  const services = [new _taskManager__WEBPACK_IMPORTED_MODULE_0__.default()];\n  return services.forEach(service => service.register(electron__WEBPACK_IMPORTED_MODULE_1__.ipcMain));\n}\n\nfunction createWindow() {\n  registerServices();\n  const win = new electron__WEBPACK_IMPORTED_MODULE_1__.BrowserWindow({\n    width: 400,\n    height: 600,\n    webPreferences: {\n      nodeIntegration: true\n    }\n  });\n  win.setResizable(false);\n  win.loadFile(\"index.html\");\n}\n\nelectron__WEBPACK_IMPORTED_MODULE_1__.app.whenReady().then(createWindow);\nelectron__WEBPACK_IMPORTED_MODULE_1__.app.on(\"window-all-closed\", () => {\n  if (process.platform !== \"darwin\") {\n    electron__WEBPACK_IMPORTED_MODULE_1__.app.quit();\n  }\n});\nelectron__WEBPACK_IMPORTED_MODULE_1__.app.on(\"activate\", () => {\n  if (electron__WEBPACK_IMPORTED_MODULE_1__.BrowserWindow.getAllWindows().length === 0) {\n    createWindow();\n  }\n});\n\n//# sourceURL=webpack://work-tracker/./src/core.ts?");

/***/ }),

/***/ "./src/taskManager.ts":
/*!****************************!*\
  !*** ./src/taskManager.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoManager)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types_appActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/appActions */ \"./src/types/appActions.ts\");\n\n\nconst TasksFilePath = \"./data/tasks.txt\";\nconst TaskArgsSeparator = \"|\";\nconst RequiredCountOfTaskArgs = 3;\nconst NEW_LINE_SEPARATOR = \"\\r\\n\";\nclass TodoManager {\n  loadTasksItems() {\n    const tasks = [];\n\n    try {\n      this.readTasksDataFromFile().map(this.getTaskFromString).filter(todo => todo !== undefined).forEach(todo => tasks.push(todo));\n    } catch (fileSystemError) {\n      console.error(fileSystemError);\n    }\n\n    return tasks;\n  }\n\n  readTasksDataFromFile() {\n    return fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(TasksFilePath, \"utf-8\").split(NEW_LINE_SEPARATOR);\n  }\n\n  saveTasksItems(todoItems) {\n    if (!todoItems) {\n      return;\n    }\n\n    const data = todoItems.map(this.getStringFromTask).join(NEW_LINE_SEPARATOR);\n    console.log(data);\n\n    try {\n      fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(TasksFilePath, data);\n    } catch (fileSystemError) {\n      console.log(fileSystemError);\n    }\n  }\n\n  register(ipcMain) {\n    ipcMain.handle(_types_appActions__WEBPACK_IMPORTED_MODULE_1__.default.LoadTasks, () => this.loadTasksItems());\n    ipcMain.handle(_types_appActions__WEBPACK_IMPORTED_MODULE_1__.default.SaveTasks, (_, args) => this.saveTasksItems(args));\n  }\n\n  getTaskFromString(data) {\n    const taskArgs = data.split(TaskArgsSeparator);\n\n    if (taskArgs.length !== RequiredCountOfTaskArgs) {\n      return undefined;\n    }\n\n    return {\n      id: Number.parseInt(taskArgs[0]),\n      label: taskArgs[1],\n      isDone: taskArgs[2] === \"true\"\n    };\n  }\n\n  getStringFromTask(task) {\n    const data = [task.id, TaskArgsSeparator, task.label, TaskArgsSeparator, task.isDone ? \"true\" : false];\n    return data.join(\"\");\n  }\n\n}\n\n//# sourceURL=webpack://work-tracker/./src/taskManager.ts?");

/***/ }),

/***/ "./src/types/appActions.ts":
/*!*********************************!*\
  !*** ./src/types/appActions.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar AppActions;\n\n(function (AppActions) {\n  AppActions[\"LoadTasks\"] = \"load-tasks\";\n  AppActions[\"SaveTasks\"] = \"save-tasks\";\n})(AppActions || (AppActions = {}));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppActions);\n\n//# sourceURL=webpack://work-tracker/./src/types/appActions.ts?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/core.ts");
/******/ 	
/******/ })()
;