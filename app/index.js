import express from 'express';
import bodyParser from 'body-parser';
import hbs from 'express-handlebars';
import React from 'react';
import Root from './components/root';
const app = express();
const router = express.Router();

console.log(__dirname)

app.engine('html', hbs({ extname: 'html' }));
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}))


app.get('/', (req, res) => {
  res.render('index', { 
    reactHtml: React.renderToString(<Root />)
   });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started ...")
})

export default app;

