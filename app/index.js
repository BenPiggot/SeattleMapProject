import express from 'express';
import bodyParser from 'body-parser';
import hbs from 'express-handlebars';
import React from 'react';
import Root from './components/root';
import browserify from 'browserify';
import db from '../models'
const app = express();
const router = express.Router();


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


app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}))


app.get('/', (req, res) => {
  db.map.find({where: {id: 1 }}).then( (map) => {
    res.render('index', {map: map})
  })
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started ...")
})

export default app;

