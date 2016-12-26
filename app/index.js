import express from 'express';
import bodyParser from 'body-parser';
import hbs from 'express-handlebars';
import React from 'react';
import { Router } from 'react-router';
import Root from './components/Root';
import routes from './shared/routes';
import db from '../models';


const app = express();
const router = express.Router();


app.engine('html', hbs({ extname: 'html' }));
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));


app.get('/', (req, res) => {
  db.map.find({where: {id: 1 }}).then( (map) => {
    res.render('index', { 
      reactHtml: React.renderToString(<Root map={map} />)
    });
  });
});

app.get('/data', (req, res) => {
  db.location.findAll().then( (map) => {
    res.send({result: map})
  })
})

app.get('/data/culture', (req, res) => {
  db.location.findAll({
    include: [{
      model: db.map,
      where: { topic: 'Culture' }
    }]
  }).then( (map) => {
    res.send({result: map})
  })
})

app.get('/data/civil-rights', (req, res) => {
  db.location.findAll({
    include: [{
      model: db.map,
      where: { topic: 'Civil Rights' }
    }]
  }).then( (map) => {
    res.send({result: map})
  })
})

app.get('/data/commerce', (req, res) => {
  db.location.findAll({
    include: [{
      model: db.map,
      where: { topic: 'Commerce' }
    }]
  }).then( (map) => {
    res.send({result: map})
  })
})

app.get('/data/environment', (req, res) => {
  db.location.findAll({
    include: [{
      model: db.map,
      where: { topic: 'Environment' }
    }]
  }).then( (map) => {
    res.send({result: map})
  })
})

app.get('/data/social-policy', (req, res) => {
  db.location.findAll({
    include: [{
      model: db.map,
      where: { topic: 'Social Policy' }
    }]
  }).then( (map) => {
    res.send({result: map})
  })
})

app.get('/data/technology', (req, res) => {
  db.location.findAll({
    include: [{
      model: db.map,
      where: { topic: 'Technology' }
    }]
  }).then( (map) => {
    res.send({result: map})
  })
})



// POST routes
app.post('/new/environment', (req, res) => {
  console.log('success', req.body)
  res.send(true)
})

app.post('/new/social-policy', (req, res) => {
  console.log('success', req.body)
  res.send(true)
})

app.post('/new/technology', (req, res) => {
  console.log('success', req.body)
  res.send(true)
})

app.post('/new/culture', (req, res) => {
  console.log('success', req.body)
  res.send(true)
})

app.post('/new/civil-rights', (req, res) => {
  console.log('success', req.body)
  res.send(true)
})

app.post('/new/commerce', (req, res) => {
  console.log('success', req.body)
  res.send(true)
})



app.listen(process.env.PORT || 3000, () => {
  console.log("Server started ...")
})

export default app;

