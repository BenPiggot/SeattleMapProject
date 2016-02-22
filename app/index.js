import express from 'express';
import bodyParser from 'body-parser';
import hbs from 'express-handlebars';
import React from 'react';
import { Router } from 'react-router';
import Root from './components/root';
import routes from './shared/routes';
import db from '../models';


const app = express();
const router = express.Router();


app.engine('html', hbs({ extname: 'html' }));
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}))


app.get('/', (req, res) => {
  console.log(req.headers)
  db.map.find({where: {id: 1 }}).then( (map) => {
    res.render('index', { 
      reactHtml: React.renderToString(<Root map={map} />)
    });
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started ...")
})

export default app;

