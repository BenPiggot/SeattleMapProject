import express from 'express';
import bodyParser from 'body-parser';
import hbs from 'express-handlebars';
import React from 'react';
// import ReactDOMServer from 'react-dom/server';
import { Router } from 'react-router';
import Root from './components/Root';
import routes from './shared/routes';
import db from '../models';


const app = express();
const router = express.Router();


app.engine('html', hbs({ extname: 'html' }));
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
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
  db.map.find({ where: {topic: 'Environment'}}).then((map) => {
    map.createLocation({
      name: req.body.location,
      asset: req.body.image,
      address: req.body.address,
      description: req.body.description
    }).then((location) => {
      res.send({result: map})
    });
  })
})

app.post('/new/social-policy', (req, res) => {
  db.map.find({ where: {topic: 'Social Policy'}}).then((map) => {
    map.createLocation({
      name: req.body.location,
      asset: req.body.image,
      address: req.body.address,
      description: req.body.description
    }).then((location) => {
      res.send({result: map})
    });
  })
})

app.post('/new/technology', (req, res) => {
  db.map.find({ where: {topic: 'Technology'}}).then((map) => {
    map.createLocation({
      name: req.body.location,
      asset: req.body.image,
      address: req.body.address,
      description: req.body.description
    }).then((location) => {
      res.send({result: map})
    });
  })
})

app.post('/new/culture', (req, res) => {
  db.map.find({ where: {topic: 'Culture'}}).then((map) => {
    map.createLocation({
      name: req.body.location,
      asset: req.body.image,
      address: req.body.address,
      description: req.body.description
    }).then((location) => {
      res.send({result: map})
    });
  })
})

app.post('/new/civil-rights', (req, res) => {
  db.map.find({ where: {topic: 'Civil Rights'}}).then((map) => {
    map.createLocation({
      name: req.body.location,
      asset: req.body.image,
      address: req.body.address,
      description: req.body.description
    }).then((location) => {
      res.send({result: map})
    });
  })
})

app.post('/new/commerce', (req, res) => {
  db.map.find({ where: {topic: 'Commerce'}}).then((map) => {
    map.createLocation({
      name: req.body.location,
      asset: req.body.image,
      address: req.body.address,
      description: req.body.description
    }).then((location) => {
      res.send({result: map})
    });
  })
})



app.listen(process.env.PORT || 3000, () => {
  console.log("Server started ...")
})

export default app;

