/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _http = __webpack_require__(1);

	var _http2 = _interopRequireDefault(_http);

	var _express = __webpack_require__(2);

	var _express2 = _interopRequireDefault(_express);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(4);

	var _reactRouter = __webpack_require__(5);

	var _routes = __webpack_require__(6);

	var _routes2 = _interopRequireDefault(_routes);

	var _api = __webpack_require__(13);

	var _api2 = _interopRequireDefault(_api);

	var _path = __webpack_require__(14);

	var _path2 = _interopRequireDefault(_path);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)();

	var PORT = process.env.PORT || 8080;

	app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
	app.use('/api/users', _api2.default);

	app.set('PORT', PORT);
	app.get('*', function (req, res) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
	    if (err) {
	      res.status(500).send(err.message);
	    } else if (redirect) {
	      res.redirect(redirect.pathname + redirect.search);
	    } else if (props) {
	      // hey we made it!
	      var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
	      res.send(renderPage(appHtml));
	    } else {
	      res.status(404).send('Not Found');
	    }
	  });
	});

	function renderPage(appHtml) {
	  return '\n    <!doctype html public="storage">\n    <html>\n    <meta charset=utf-8/>\n    <title>Akadem</title>\n    <link rel=stylesheet href=https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css>\n    <link rel=stylesheet href="/index.css">\n    <div id=app>' + appHtml + '</div>\n    <script src="/bundle.js"></script>\n   ';
	}

	var server = _http2.default.createServer(app);
	server.listen(PORT, function () {
	  console.log('Server started....');
	});
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("http");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(5);

	var _appnav = __webpack_require__(7);

	var _appnav2 = _interopRequireDefault(_appnav);

	var _home = __webpack_require__(10);

	var _home2 = _interopRequireDefault(_home);

	var _students = __webpack_require__(12);

	var _students2 = _interopRequireDefault(_students);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _appnav2.default },
	  _react2.default.createElement(_reactRouter.Route, { path: '/home', component: _home2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/student', component: _students2.default })
	);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(8);

	var _reactRouterBootstrap = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var appnav = function (_React$Component) {
		_inherits(appnav, _React$Component);

		function appnav() {
			_classCallCheck(this, appnav);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(appnav).apply(this, arguments));
		}

		_createClass(appnav, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						_reactBootstrap.Navbar,
						{ inverse: true, fixedTop: true },
						_react2.default.createElement(
							_reactBootstrap.Navbar.Header,
							null,
							_react2.default.createElement(
								_reactBootstrap.Navbar.Brand,
								null,
								_react2.default.createElement(
									'a',
									{ href: '#' },
									'Akadem'
								)
							),
							_react2.default.createElement(_reactBootstrap.Navbar.Toggle, null)
						),
						_react2.default.createElement(
							_reactBootstrap.Navbar.Collapse,
							null,
							_react2.default.createElement(
								_reactBootstrap.Nav,
								null,
								_react2.default.createElement(
									_reactRouterBootstrap.LinkContainer,
									{ to: '/home' },
									_react2.default.createElement(
										_reactBootstrap.NavItem,
										{ eventKey: 1 },
										'Home'
									)
								),
								_react2.default.createElement(
									_reactRouterBootstrap.LinkContainer,
									{ to: '/student' },
									_react2.default.createElement(
										_reactBootstrap.NavItem,
										{ eventKey: 2 },
										'Students'
									)
								)
							),
							_react2.default.createElement(
								_reactBootstrap.Nav,
								{ pullRight: true },
								_react2.default.createElement(
									_reactBootstrap.NavItem,
									{ eventKey: 1, href: '#' },
									'Link Right'
								),
								_react2.default.createElement(
									_reactBootstrap.NavItem,
									{ eventKey: 2, href: '#' },
									'Link Right'
								)
							)
						)
					),
					this.props.children
				);
			}
		}]);

		return appnav;
	}(_react2.default.Component);

	exports.default = appnav;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("react-router-bootstrap");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _superagent = __webpack_require__(11);

	var _superagent2 = _interopRequireDefault(_superagent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var home = function (_React$Component) {
		_inherits(home, _React$Component);

		function home() {
			_classCallCheck(this, home);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(home).call(this));

			_this.state = { data: [] };
			return _this;
		}

		_createClass(home, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				var _this2 = this;

				_superagent2.default.get("/api/users").end(function (error, response) {
					if (!error && response) {
						_this2.setState({ data: response.body });
						console.log(response.body);
					} else {
						console.log("Error on api");
					}
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var users = this.state.data;
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h1',
						null,
						' Home '
					)
				);
			}
		}]);

		return home;
	}(_react2.default.Component);

	exports.default = home;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("superagent");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var student = function (_React$Component) {
		_inherits(student, _React$Component);

		function student() {
			_classCallCheck(this, student);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(student).apply(this, arguments));
		}

		_createClass(student, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					' Student '
				);
			}
		}]);

		return student;
	}(_react2.default.Component);

	exports.default = student;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _express = __webpack_require__(2);

	var _express2 = _interopRequireDefault(_express);

	var _path = __webpack_require__(14);

	var _path2 = _interopRequireDefault(_path);

	var _fs = __webpack_require__(15);

	var _fs2 = _interopRequireDefault(_fs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var router = _express2.default.Router();

	var db = _path2.default.join(__dirname, "db.json");

	router.get('/', function (req, res) {
	  _fs2.default.readFile(db, function (err, data) {
	    if (err) {
	      console.error(err);
	      process.exit(1);
	    }
	    res.json(JSON.parse(data));
	  });
	});

	module.exports = router;
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ }
/******/ ]);