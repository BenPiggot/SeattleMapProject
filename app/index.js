import express from 'express';
import bodyParser from 'body-parser';
import hbs from 'express-handlebars';
import React from 'react';
import Root from './components/root';
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



app.engine('html', hbs({ extname: 'html' }));
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}))


app.get('/', (req, res) => {
  db.map.find({where: {id: 1 }}).then( (map) => {
  res.render('index', { 
    reactHtml: React.renderToString(<Root map={map} />)
    });
  })
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started ...")
})

export default app;

