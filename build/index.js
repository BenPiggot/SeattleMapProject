'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressHandlebars = require('express-handlebars');

var _expressHandlebars2 = _interopRequireDefault(_expressHandlebars);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _root = require('./components/root');

var _root2 = _interopRequireDefault(_root);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var router = _express2.default.Router();

// db.map.create({topic: 'Commerce', theme: 'mostlyGray', latitude: 47.6130284, longitude: -122.3420645}).then ( (map) => {
//   console.log('success')
// })

// db.map.find({ where: {id: 1}}).then ( (map) => {
//   map.topic = 'Civil Rights'
//   map.save().then( () => {
//     console.log('success')
//   })
// })

// db.map.find({ where: {id: 1}}).then( (map) => {
//   map.createLocation({name: 'Higo Variety Store', description: 'In 1909, Japanese immigrants Sanzo and Matsuyo Murakami opened the Higo 10 Cent Store. The store was located on Weller Street in Nihonmichi, or “Japantown,” a bustling neighborhood of 8,500 that served as the hub of Japanese immigrant life in Seattle. The Higo 10 Cent Store provided a range of Japanese household goods for the Japanese immigrant community, but also attracted an increasingly white customer base intrigued by the store’s “exoticism.” The store proved so popular that it moved to the two-story Jackson Building, where it eventually occupied nine storefronts between 602 and 608 South Jackson Street. Like other Japanese-Americans, the Murakamis were forcibly relocated to an internment camp in 1942 as a result of Executive Order 9066. However, unlike many other Japanese-American business owners, the Murakamis were able to re-open their business when World War II ended. The (now) Higo Variety Store would remain open until 2003, when Masa Murakami (Sanzo and Matsuyo’s daughter) chose to close the business. However, the Higo storefront remains and the location today houses Kobo, a Japanese-inspired art gallery and craft store. Above is a photograph the store as it appeared in 1943, boarded up after the Murkakamis had been interned.',
//     latitude: 47.599365, longitude: -122.326155, asset: 'http://www.historylink.org/db_images/Seattle_InternationalDistrict-HigoTenCentStoreboardedUp-1942.jpg' }).then ( (location) => {
//       console.log('success')
//     })
//   })

app.engine('html', (0, _expressHandlebars2.default)({ extname: 'html' }));
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(_express2.default.static(__dirname + "/public"));
app.use(_bodyParser2.default.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  _models2.default.map.find({ where: { id: 1 } }).then(function (map) {
    res.render('index', { map: map });
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started ...");
});

exports.default = app;