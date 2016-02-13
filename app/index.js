import express from 'express';
import bodyParser from 'body-parser';
import hbs from 'express-handlebars';
import React from 'react';
import Root from './components/root';
import db from '../models'
const app = express();
const router = express.Router();

db.map.findOrCreate({where: {id: 1}}).spread( (map, created) => {
  map.createLocation({name: 'Sick\'s Stadium', de: "Located in the Mount Baker neighborhood at the corner McClellan Street and Rainier Avenue, Sick\'s Stadium first opened in 1938. The stadium was named after Emil Sick, owner of the nearby Rainier Brewing Company as well as the minor league baseball franchise, the Seattle Rainiers. Sick constructed the stadium for the Rainiers, who would play at the site until 1968. In 1969, Seattle\'s first Major League franchise, the Pilots, would locate at the stadium. However, the stadium proved inadequate as a venue for professional baseball. Partly as a result of the staidum\'s inadequacy, the Pilots stay in Seattle would be remarkably brief. The franchise would relocate to Milwaukee as the Brewers prior to the 1970 season. In relative disrepair, the stadium would once again serve as the home for the minor league Rainiers from 1972 to 1976. Sick\'s Stadium was finally demolished in 1976. Today, the site serves as a location for a Lowe\'s home improvement store. Above is a photograph of the stadium as it looked just prior to its demolition in 1976.",
  }).then( (location) => {
    console.log('success')
  })
})


db.location.upsert({id: 1, description: "Located in the Mount Baker neighborhood at the corner McClellan Street and Rainier Avenue, Sick\'s Stadium first opened in 1938. The stadium was named after Emil Sick, owner of the nearby Rainier Brewing Company as well as the minor league baseball franchise, the Seattle Rainiers. Sick constructed the stadium for the Rainiers, who would play at the site until 1968. In 1969, Seattle\'s first Major League franchise, the Pilots, would locate at the stadium. However, the stadium proved inadequate as a venue for professional baseball. Partly as a result of the staidum\'s inadequacy, the Pilots stay in Seattle would be remarkably brief. The franchise would relocate to Milwaukee as the Brewers prior to the 1970 season. In relative disrepair, the stadium would once again serve as the home for the minor league Rainiers from 1972 to 1976. Sick\'s Stadium was finally demolished in 1976. Today, the site serves as a location for a Lowe\'s home improvement store. Above is a photograph of the stadium as it looked just prior to its demolition in 1976."})
  .then( (location) => {
    console.log('success')
  })


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

