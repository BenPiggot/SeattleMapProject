// declare marker locations

var hoover = new google.maps.LatLng(47.594297,-122.335985);
var regrade = new google.maps.LatLng(47.611847,-122.341922);
var yesler = new google.maps.LatLng(47.60273,-122.338351);
var sick = new google.maps.LatLng(47.5787321,-122.299051);
var chicken = new google.maps.LatLng(47.691218,-122.3068837);
var higo = new google.maps.LatLng(47.599365,-122.326155);
var microsoft = new google.maps.LatLng(47.617689,-122.195762);
var locations = [hoover, regrade, yesler, sick, chicken, higo, microsoft];


// declare google map style arrays

var blueEssence = [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}]

var shiftWorker = [{"stylers":[{"saturation":-100},{"gamma":0.6}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"saturation":50},{"gamma":0},{"hue":"#50a5d1"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"weight":0.5},{"color":"#333333"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"gamma":1},{"saturation":50}]}]

var shadowAgent = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-23"},{"lightness":"27"},{"visibility":"on"},{"gamma":"1"},{"hue":"#ff1800"},{"weight":"0.75"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e74c3c"},{"saturation":"-59"},{"lightness":"30"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"on"},{"hue":"#ff1800"},{"saturation":"2"},{"lightness":"2"},{"weight":"0.75"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"on"},{"saturation":"-51"},{"color":"#cbcbcb"}]},{"featureType":"transit.station","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#2c3e50"},{"visibility":"on"}]}] 

var Nature = [{"featureType":"landscape","stylers":[{"hue":"#FFA800"},{"saturation":0},{"lightness":0},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#53FF00"},{"saturation":-73},{"lightness":40},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FBFF00"},{"saturation":0},{"lightness":0},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#00FFFD"},{"saturation":0},{"lightness":30},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#00BFFF"},{"saturation":6},{"lightness":8},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#679714"},{"saturation":33.4},{"lightness":-25.4},{"gamma":1}]}]

var paleDawn = [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]

var mostlyGray = [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"administrative","elementType":"labels","stylers":[{"saturation":"-100"}]},{"featureType":"administrative","elementType":"labels.text","stylers":[{"gamma":"0.75"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"lightness":"-37"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"saturation":"-100"},{"lightness":"100"}]},{"featureType":"landscape.natural","elementType":"labels.text.fill","stylers":[{"saturation":"-100"},{"lightness":"-37"}]},{"featureType":"landscape.natural","elementType":"labels.text.stroke","stylers":[{"saturation":"-100"},{"lightness":"100"},{"weight":"2"}]},{"featureType":"landscape.natural","elementType":"labels.icon","stylers":[{"saturation":"-100"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"saturation":"-100"},{"lightness":"80"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"saturation":"-100"},{"lightness":"15"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"saturation":"-100"}]},{"featureType":"poi.attraction","elementType":"geometry","stylers":[{"lightness":"40"},{"visibility":"off"}]},{"featureType":"poi.attraction","elementType":"labels.text","stylers":[{"saturation":"7"},{"gamma":"0.50"}]},{"featureType":"poi.attraction","elementType":"labels.icon","stylers":[{"saturation":"0"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"},{"visibility":"on"},{"saturation":"-95"},{"lightness":"62"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road","elementType":"labels","stylers":[{"saturation":"-100"},{"gamma":"1.00"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"gamma":"0.50"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"saturation":"-100"},{"gamma":"0.50"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"},{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"lightness":"-13"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"lightness":"0"},{"gamma":"1.09"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"},{"saturation":"-100"},{"lightness":"47"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"lightness":"-12"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"saturation":"-100"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"},{"lightness":"77"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"lightness":"-5"},{"saturation":"-100"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"saturation":"-100"},{"lightness":"-15"}]},{"featureType":"transit.station.airport","elementType":"geometry","stylers":[{"saturation":"-100"},{"lightness":"47"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]},{"featureType":"water","elementType":"geometry","stylers":[{"saturation":"53"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"lightness":"100"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#009cff"},{"saturation":"-40"},{"lightness":"8"},{"weight":"3"}]}]

var grayScale = [{"featureType":"all","elementType":"all","stylers":[{"saturation":-100},{"gamma":0.5}]}]

var mint = [{"stylers":[{"hue":"#16a085"},{"saturation":0}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]}]


//define cateogry variables, which will be used as event handlers

var culture = document.getElementById("culture");
var civilRights = document.getElementById("civil-rights");
var commerce = document.getElementById("commerce");
var environment = document.getElementById("environment");
var politics = document.getElementById("politics");
var technology = document.getElementById("technology");



//initialize Google map 

function initialize() {
  var home = new google.maps.LatLng(47.5645742,-122.2980807);
  var mapProp = {
    center: new google.maps.LatLng(47.615, -122.320850),
    zoom: 11,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: shiftWorker 
    };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  var hooverMarker = new google.maps.Marker({
    position: locations[0],
    map: map,
    icon: 'greypin.png',
    });

  var regradeMarker = new google.maps.Marker({
    position: regrade,
    map: map,
    icon: 'greypin.png'
    });

  var yeslerMarker = new google.maps.Marker({
    position: yesler,
    map: map,
    icon: 'greypin.png'
    });

  var sickMarker = new google.maps.Marker({
    position: sick,
    map: map,
    icon: 'greypin.png'
    });

  var chickenMarker = new google.maps.Marker({
    position: locations[4],
    map: map,
    icon: 'greypin.png'
    });

    var chickenMarker = new google.maps.Marker({
    position: higo,
    map: map,
    icon: 'greypin.png'
    });

    var microsoftMarker = new google.maps.Marker({
    position: microsoft,
    map: map,
    icon: 'greypin.png'
    });

    //  adviseString = '<div id="pop-up">'+
    // '<h2>Please click on a category below to find out more !</h2>'+ 
    // '<div>'

    // var regradeInfo = new google.maps.InfoWindow({
    //     content: adviseString
    // });

    // google.maps.event.addListener(regradeMarker, 'click', function() {
    //     regradeInfo.open(map, regradeMarker);
  // });
}

google.maps.event.addDomListener(window, 'load', initialize);




//add event listener to highlight map category

//culture event

culture.addEventListener('click', function() {
    var cat = this.children[0].getAttribute('id');
    console.log(cat);
    // document.getElementById('toHide').style.height = "0%";
    // document.getElementById('googleMap').style.height = "100%";

	var mapProp = {
    center: new google.maps.LatLng(47.605, -122.320850),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: shadowAgent
  	};
  	var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  var hooverMarker = new google.maps.Marker({
    position: locations[0],
    map: map,
    icon: 'greypin.png',
    });

  var regradeMarker = new google.maps.Marker({
    position: regrade,
    map: map,
    icon: 'greypin.png'
    });

  var yeslerMarker = new google.maps.Marker({
    position: yesler,
    map: map,
    icon: 'greypin.png'
    });

  var sickMarker = new google.maps.Marker({
    position: sick,
    map: map,
    icon: 'greypin.png'
    });

  var contentString = [];

   contentString[0] = '<div id="pop-up">'+
      '<h2>Hooverville</h2>'+ 
      '<div id="bodyContent">'+
      '<p>' +
      'In recent years, a proliferation of books and articles has documented the rise of political conservatism in the United States. However, this scholarship either ignores or downplays the continued resilience of liberalism as well as its most important institutional vehicle, the Democratic Party. The current article represents an attempt to redress this imbalance. Its focus on Orange County, California (and more specifically, the city of Irvine) between the 1970s and the 1992 Presidential election might thus seem strange, given the region’s impeccably conservative reputation. However, as this article demonstrates, a much more complicated and multi-dimensional politics existed in the region, demonstrating just how deeply imbedded liberal policy preferences continued to be in suburban areas across the country. Ultimately, these liberal undercurrents provided the Democratic Party a foundation—albeit a shaky one—on which to attempt to construct a national political majority."</p>'+
      '</div>'+
      '<img id="big-img" src=http://www.portseattle100.org/images/properties/t46/Hooverville_2.jpg>'+
      '</div>';

  var hooverInfo = new google.maps.InfoWindow({
      content: contentString[0]
  });

    google.maps.event.addListener(hooverMarker, 'click', function() {
        hooverInfo.open(map, hooverMarker);
  });


    contentString[1] = '<div id="pop-up">'+
      '<h2>Regrading in Seattle</h2>'+ 
      '<div id="bodyContent">'+
      '<p>' +
      'In recent years, a proliferation of books and articles has documented the rise of political conservatism in the United States. However, this scholarship either ignores or downplays the continued resilience of liberalism as well as its most important institutional vehicle, the Democratic Party. The current article represents an attempt to redress this imbalance. Its focus on Orange County, California (and more specifically, the city of Irvine) between the 1970s and the 1992 Presidential election might thus seem strange, given the region’s impeccably conservative reputation. However, as this article demonstrates, a much more complicated and multi-dimensional politics existed in the region, demonstrating just how deeply imbedded liberal policy preferences continued to be in suburban areas across the country. Ultimately, these liberal undercurrents provided the Democratic Party a foundation—albeit a shaky one—on which to attempt to construct a national political majority."</p>'+
      '</div>'+
      '<img id="big-img" src=http://upload.wikimedia.org/wikipedia/commons/6/66/Leveling_the_Hills_of_Seattle.jpg>'+
      '</div>';

  var regradeInfo = new google.maps.InfoWindow({
      content: contentString[1]
  });

    google.maps.event.addListener(regradeMarker, 'click', function() {
        regradeInfo.open(map, regradeMarker);
  });

    contentString[2] = '<div id="pop-up">'+
      '<h2>Yesler\'s Mill</h2>'+ 
      '<div id="bodyContent">'+
      '<p>' +
      'In recent years, a proliferation of books and articles has documented the rise of political conservatism in the United States. However, this scholarship either ignores or downplays the continued resilience of liberalism as well as its most important institutional vehicle, the Democratic Party. The current article represents an attempt to redress this imbalance. Its focus on Orange County, California (and more specifically, the city of Irvine) between the 1970s and the 1992 Presidential election might thus seem strange, given the region’s impeccably conservative reputation. However, as this article demonstrates, a much more complicated and multi-dimensional politics existed in the region, demonstrating just how deeply imbedded liberal policy preferences continued to be in suburban areas across the country. Ultimately, these liberal undercurrents provided the Democratic Party a foundation—albeit a shaky one—on which to attempt to construct a national political majority."</p>'+
      '</div>'+
      '<img src=http://ww3.hdnux.com/photos/02/72/54/764726/3/628x471.jpg>'+
      '</div>';

  var yeslerInfo = new google.maps.InfoWindow({
      content: contentString[2]
  });

    google.maps.event.addListener(yeslerMarker, 'click', function() {
        yeslerInfo.open(map, yeslerMarker);
  });

    contentString[3] = '<div id="pop-up">'+
      '<h2>Sick\'s Stadium</h2>'+ 
      '<div id="bodyContent">'+
      '<p>' +
      'Located in the Mount Baker neighborhood at the corner McClellan Street and Rainier Avenue, Sick\'s Stadium first opened in 1938. The stadium was named after Emil Sick, who was the owner of the nearby Rainier Brewing Company as well as the minor league Seattle Rainiers. The Rainiers would play at the site until 1968. In 1969, Seattle\'s first Major League franchise, the Pilots, would locate at the stadium. The Pilots stay in Seattle would be remarkably brief, as they would relocate to Milwaukee as the Brewers prior to the 1970 season. In relative disrepair, the stadium would once again serve as the home for the minor league Rainiers from 1972 to 1976. Sick\'s Stadium was finally demolished in 1976. Today, the site serves as a location for a Lowe\'s home improvement store. Below is a photograph of the stadium as it looked just prior to its demolition in 1976:</p>' +
      '</div>'+
      '<img src=http://www.insidesocal.com/tomhoffarth/files/import/i-83ee32cb413b1ec6bc17735d167e940e-sicks805.jpg>'+
      '</div>';

  var sickInfo = new google.maps.InfoWindow({
      content: contentString[3]
  });

    google.maps.event.addListener(sickMarker, 'click', function() {
        sickInfo.open(map, sickMarker);
  });

  $("h1").text("");
  $("p subhead").text("");
  $("div").removeClass("innerHeader");
  $("footer").hide('nav');
  $("#over_map").addClass('return').text("MAIN MENU");
 
 },false);




//civil right event 
civilRights.addEventListener('click', function() {
    var cat = this.children[0].getAttribute('id');
    console.log(cat);
    // document.getElementById('toHide').style.height = "0%";
    // document.getElementById('googleMap').style.height = "100%";
    var mapProp = {
    center: new google.maps.LatLng(47.63, -122.320850),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: paleDawn
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  var hooverMarker = new google.maps.Marker({
    position: locations[0],
    map: map,
    icon: 'greypin.png',
    });

  var chickenMarker = new google.maps.Marker({
    position: locations[4],
    map: map,
    icon: 'greypin.png'
    });

  var yeslerMarker = new google.maps.Marker({
    position: yesler,
    map: map,
    icon: 'greypin.png'
    });

  var higoMarker = new google.maps.Marker({
    position: higo,
    map: map,
    icon: 'greypin.png'
    });

  var contentString = [];

   contentString[0] = '<div id="pop-up">'+
      '<h2>Hooverville</h2>'+ 
      '<div id="bodyContent">'+
      '<p>' +
      'In recent years, a proliferation of books and articles has documented the rise of political conservatism in the United States. However, this scholarship either ignores or downplays the continued resilience of liberalism as well as its most important institutional vehicle, the Democratic Party. The current article represents an attempt to redress this imbalance. Its focus on Orange County, California (and more specifically, the city of Irvine) between the 1970s and the 1992 Presidential election might thus seem strange, given the region’s impeccably conservative reputation. However, as this article demonstrates, a much more complicated and multi-dimensional politics existed in the region, demonstrating just how deeply imbedded liberal policy preferences continued to be in suburban areas across the country. Ultimately, these liberal undercurrents provided the Democratic Party a foundation—albeit a shaky one—on which to attempt to construct a national political majority."</p>'+
      '</div>'+
      '<img id="big-img" src=http://www.portseattle100.org/images/properties/t46/Hooverville_2.jpg>'+
      '</div>';

  var hooverInfo = new google.maps.InfoWindow({
      content: contentString[0]
  });

    google.maps.event.addListener(hooverMarker, 'click', function() {
        hooverInfo.open(map, hooverMarker);
  });

    contentString[1] = '<div id="pop-up">'+
      '<h2>Coon\'s Chicken</h2>'+ 
      '<div id="bodyContent">'+
      '<p>' +
      'Coon Chicken Inn was opened by restraunteur Maxon Lester Graham in 1930 at the intersection of Lake City Way and 85th Avenue NE. The restaurant used racist imagery as a means of evoking "southern authenticity", a cultural trope largely tolerated by white American at the time . However, the restaurant also served as a lightning rod for Seattle\'s growing African American community. Bolstered rthe community\'s rapid expansion  during World War II, the Seattle NAACP and the Northwest Enterpirse (Seattle\'s African American  newspaper) maintained a sustained campaign agains Coon Chicken Inn\'s racist imagery. Graham ultimately removed the "coon" imagery in 1949, rebranding his restaurant as G.I. Joe\'s Country Chicken Store. Nevertheless, Coon Chicken Inn\'s twenty year existence demonstrate just how embeeded white supremacy was in the United State during the middle of the 20th century. The restaurant is pictured below; patrons would enter thorugh the mounth of the "coon head."</p>'+
      '</div>'+
      '<img src=http://depts.washington.edu/civilr/images/Coon%20Chicken%20images/entranceandvehicle_large.jpg>'+
      '</div>';

  var chickenInfo = new google.maps.InfoWindow({
      content: contentString[1]
  });

    google.maps.event.addListener(chickenMarker, 'click', function() {
        chickenInfo.open(map, chickenMarker);
  });

    contentString[2] = '<div id="pop-up">'+
      '<h2>Yesler\'s Mill</h2>'+ 
      '<div id="bodyContent">'+
      '<p>' +
      'In recent years, a proliferation of books and articles has documented the rise of political conservatism in the United States. However, this scholarship either ignores or downplays the continued resilience of liberalism as well as its most important institutional vehicle, the Democratic Party. The current article represents an attempt to redress this imbalance. Its focus on Orange County, California (and more specifically, the city of Irvine) between the 1970s and the 1992 Presidential election might thus seem strange, given the region’s impeccably conservative reputation. However, as this article demonstrates, a much more complicated and multi-dimensional politics existed in the region, demonstrating just how deeply imbedded liberal policy preferences continued to be in suburban areas across the country. Ultimately, these liberal undercurrents provided the Democratic Party a foundation—albeit a shaky one—on which to attempt to construct a national political majority."</p>'+
      '</div>'+
      '<img src=http://ww3.hdnux.com/photos/02/72/54/764726/3/628x471.jpg>'+
      '</div>';

  var yeslerInfo = new google.maps.InfoWindow({
      content: contentString[2]
  });

    google.maps.event.addListener(yeslerMarker, 'click', function() {
        yeslerInfo.open(map, yeslerMarker);
  });

    contentString[3] = '<div id="pop-up">'+
      '<h2>Higo\'s Store</h2>'+ 
      '<div id="bodyContent">'+
      '<p>' +
      'In recent years, a proliferation of books and articles has documented the rise of political conservatism in the United States. However, this scholarship either ignores or downplays the continued resilience of liberalism as well as its most important institutional vehicle, the Democratic Party. The current article represents an attempt to redress this imbalance. Its focus on Orange County, California (and more specifically, the city of Irvine) between the 1970s and the 1992 Presidential election might thus seem strange, given the region’s impeccably conservative reputation. However, as this article demonstrates, a much more complicated and multi-dimensional politics existed in the region, demonstrating just how deeply imbedded liberal policy preferences continued to be in suburban areas across the country. Ultimately, these liberal undercurrents provided the Democratic Party a foundation—albeit a shaky one—on which to attempt to construct a national political majority."</p>'+
      '</div>'+
      '<img src=http://www.historylink.org/db_images/Seattle_InternationalDistrict-HigoTenCentStoreboardedUp-1942.jpg>'+
      '</div>';

  var higoInfo = new google.maps.InfoWindow({
      content: contentString[3]
  });

    google.maps.event.addListener(higoMarker, 'click', function() {
        higoInfo.open(map, higoMarker);
  });

  $("h1").text("");
  $("p subhead").text("");
  $("div").removeClass("innerHeader");
  $("footer").hide('nav');
  $("#over_map").addClass('return').text("MAIN MENU");

 },false);




//commerce event 
commerce.addEventListener('click', function() {
    var cat = this.children[0].getAttribute('id');
    console.log(cat);
    // document.getElementById('toHide').style.height = "0%";
    // document.getElementById('googleMap').style.height = "100%";
    var mapProp = {
    center: new google.maps.LatLng(47.605, -122.320850),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: mostlyGray
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  var hooverMarker = new google.maps.Marker({
    position: locations[0],
    map: map,
    icon: 'greypin.png',
    });

  var regradeMarker = new google.maps.Marker({
    position: regrade,
    map: map,
    icon: 'greypin.png'
    });

  var yeslerMarker = new google.maps.Marker({
    position: yesler,
    map: map,
    icon: 'greypin.png'
    });

  var sickMarker = new google.maps.Marker({
    position: sick,
    map: map,
    icon: 'greypin.png'
    });

  var contentString = [];

   contentString[0] = '<div id="pop-up">'+
      '<h2>Hooverville</h2>'+ 
      '<div id="bodyContent">'+
      '<p>' +
      'In recent years, a proliferation of books and articles has documented the rise of political conservatism in the United States. However, this scholarship either ignores or downplays the continued resilience of liberalism as well as its most important institutional vehicle, the Democratic Party. The current article represents an attempt to redress this imbalance. Its focus on Orange County, California (and more specifically, the city of Irvine) between the 1970s and the 1992 Presidential election might thus seem strange, given the region’s impeccably conservative reputation. However, as this article demonstrates, a much more complicated and multi-dimensional politics existed in the region, demonstrating just how deeply imbedded liberal policy preferences continued to be in suburban areas across the country. Ultimately, these liberal undercurrents provided the Democratic Party a foundation—albeit a shaky one—on which to attempt to construct a national political majority."</p>'+
      '</div>'+
      '<img id="big-img" src=http://www.portseattle100.org/images/properties/t46/Hooverville_2.jpg>'+
      '</div>';

  var hooverInfo = new google.maps.InfoWindow({
      content: contentString[0]
  });

    google.maps.event.addListener(hooverMarker, 'click', function() {
        hooverInfo.open(map, hooverMarker);
  });

    contentString[1] = '<div id="pop-up">'+
      '<h2>Regrading in Seattle</h2>'+ 
      '<div id="bodyContent">'+
      '<p>' +
      'In recent years, a proliferation of books and articles has documented the rise of political conservatism in the United States. However, this scholarship either ignores or downplays the continued resilience of liberalism as well as its most important institutional vehicle, the Democratic Party. The current article represents an attempt to redress this imbalance. Its focus on Orange County, California (and more specifically, the city of Irvine) between the 1970s and the 1992 Presidential election might thus seem strange, given the region’s impeccably conservative reputation. However, as this article demonstrates, a much more complicated and multi-dimensional politics existed in the region, demonstrating just how deeply imbedded liberal policy preferences continued to be in suburban areas across the country. Ultimately, these liberal undercurrents provided the Democratic Party a foundation—albeit a shaky one—on which to attempt to construct a national political majority."</p>'+
      '</div>'+
      '<img id="big-img" src=http://upload.wikimedia.org/wikipedia/commons/6/66/Leveling_the_Hills_of_Seattle.jpg>'+
      '</div>';

  var regradeInfo = new google.maps.InfoWindow({
      content: contentString[1]
  });

    google.maps.event.addListener(regradeMarker, 'click', function() {
        regradeInfo.open(map, regradeMarker);
  });

    contentString[2] = '<div id="pop-up">'+
      '<h2>Yesler\'s Mill</h2>'+ 
      '<div id="bodyContent">'+
      '<p>' +
      'In recent years, a proliferation of books and articles has documented the rise of political conservatism in the United States. However, this scholarship either ignores or downplays the continued resilience of liberalism as well as its most important institutional vehicle, the Democratic Party. The current article represents an attempt to redress this imbalance. Its focus on Orange County, California (and more specifically, the city of Irvine) between the 1970s and the 1992 Presidential election might thus seem strange, given the region’s impeccably conservative reputation. However, as this article demonstrates, a much more complicated and multi-dimensional politics existed in the region, demonstrating just how deeply imbedded liberal policy preferences continued to be in suburban areas across the country. Ultimately, these liberal undercurrents provided the Democratic Party a foundation—albeit a shaky one—on which to attempt to construct a national political majority."</p>'+
      '</div>'+
      '<img src=http://ww3.hdnux.com/photos/02/72/54/764726/3/628x471.jpg>'+
      '</div>';

  var yeslerInfo = new google.maps.InfoWindow({
      content: contentString[2]
  });

    google.maps.event.addListener(yeslerMarker, 'click', function() {
        yeslerInfo.open(map, yeslerMarker);
  });

    contentString[3] = '<div id="pop-up">'+
      '<h2>Sick\'s Stadium</h2>'+ 
      '<div id="bodyContent">'+
      '<p>' +
      'Located in the Mount Baker neighborhood at the corner McClellan Street and Rainier Avenue, Sick\'s Stadium first opened in 1938. The stadium was named after Emil Sick, who was the owner of the nearby Rainier Brewing Company as well as the minor league Seattle Rainiers. The Rainiers would play at the site until 1968. In 1969, Seattle\'s first Major League franchise, the Pilots, would locate at the stadium. The Pilots stay in Seattle would be remarkably brief, as they would relocate to Milwaukee as the Brewers prior to the 1970 season. In relative disrepair, the stadium would once again serve as the home for the minor league Rainiers from 1972 to 1976. Sick\'s Stadium was finally demolished in 1976. Today, the site serves as a location for a Lowe\'s home improvement store. Below is a photograph of the stadium as it looked just prior to its demolition in 1976:</p>' +
      '</div>'+
      '<img src=http://www.insidesocal.com/tomhoffarth/files/import/i-83ee32cb413b1ec6bc17735d167e940e-sicks805.jpg>'+
      '</div>';

  var sickInfo = new google.maps.InfoWindow({
      content: contentString[3]
  });

    google.maps.event.addListener(sickMarker, 'click', function() {
        sickInfo.open(map, sickMarker);
  });
    
  $("h1").text("");
  $("p subhead").text("");
  $("div").removeClass("innerHeader");
  $("footer").hide('nav');
  $("#over_map").addClass('return').text("MAIN MENU");

 },false);





//environment event 
environment.addEventListener('click', function() {
    var cat = this.children[0].getAttribute('id');
    console.log(cat);
    // document.getElementById('toHide').style.height = "0%";
    // document.getElementById('googleMap').style.height = "100%";
    var mapProp = {
    center: new google.maps.LatLng(47.605, -122.320850),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: Nature
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  var hooverMarker = new google.maps.Marker({
    position: locations[0],
    map: map,
    icon: 'greypin.png',
    });

  var regradeMarker = new google.maps.Marker({
    position: regrade,
    map: map,
    icon: 'greypin.png'
    });

  var yeslerMarker = new google.maps.Marker({
    position: yesler,
    map: map,
    icon: 'greypin.png'
    });

  var sickMarker = new google.maps.Marker({
    position: sick,
    map: map,
    icon: 'greypin.png'
    });

  var contentString = [];

   contentString[0] = '<div id="pop-up">'+
      '<h2>Hooverville</h2>'+ 
      '<div id="bodyContent">'+
      '<p>' +
      'In recent years, a proliferation of books and articles has documented the rise of political conservatism in the United States. However, this scholarship either ignores or downplays the continued resilience of liberalism as well as its most important institutional vehicle, the Democratic Party. The current article represents an attempt to redress this imbalance. Its focus on Orange County, California (and more specifically, the city of Irvine) between the 1970s and the 1992 Presidential election might thus seem strange, given the region’s impeccably conservative reputation. However, as this article demonstrates, a much more complicated and multi-dimensional politics existed in the region, demonstrating just how deeply imbedded liberal policy preferences continued to be in suburban areas across the country. Ultimately, these liberal undercurrents provided the Democratic Party a foundation—albeit a shaky one—on which to attempt to construct a national political majority."</p>'+
      '</div>'+
      '<img id="big-img" src=http://www.portseattle100.org/images/properties/t46/Hooverville_2.jpg>'+
      '</div>';

  var hooverInfo = new google.maps.InfoWindow({
      content: contentString[0]
  });

    google.maps.event.addListener(hooverMarker, 'click', function() {
        hooverInfo.open(map, hooverMarker);
  });

    contentString[1] = '<div id="pop-up">'+
      '<h2>Regrading in Seattle</h2>'+ 
      '<div id="bodyContent">'+
      '<p>' +
      'In recent years, a proliferation of books and articles has documented the rise of political conservatism in the United States. However, this scholarship either ignores or downplays the continued resilience of liberalism as well as its most important institutional vehicle, the Democratic Party. The current article represents an attempt to redress this imbalance. Its focus on Orange County, California (and more specifically, the city of Irvine) between the 1970s and the 1992 Presidential election might thus seem strange, given the region’s impeccably conservative reputation. However, as this article demonstrates, a much more complicated and multi-dimensional politics existed in the region, demonstrating just how deeply imbedded liberal policy preferences continued to be in suburban areas across the country. Ultimately, these liberal undercurrents provided the Democratic Party a foundation—albeit a shaky one—on which to attempt to construct a national political majority."</p>'+
      '</div>'+
      '<img id="big-img" src=http://upload.wikimedia.org/wikipedia/commons/6/66/Leveling_the_Hills_of_Seattle.jpg>'+
      '</div>';

  var regradeInfo = new google.maps.InfoWindow({
      content: contentString[1]
  });

    google.maps.event.addListener(regradeMarker, 'click', function() {
        regradeInfo.open(map, regradeMarker);
  });

    contentString[2] = '<div id="pop-up">'+
      '<h2>Yesler\'s Mill</h2>'+ 
      '<div id="bodyContent">'+
      '<p>' +
      'In recent years, a proliferation of books and articles has documented the rise of political conservatism in the United States. However, this scholarship either ignores or downplays the continued resilience of liberalism as well as its most important institutional vehicle, the Democratic Party. The current article represents an attempt to redress this imbalance. Its focus on Orange County, California (and more specifically, the city of Irvine) between the 1970s and the 1992 Presidential election might thus seem strange, given the region’s impeccably conservative reputation. However, as this article demonstrates, a much more complicated and multi-dimensional politics existed in the region, demonstrating just how deeply imbedded liberal policy preferences continued to be in suburban areas across the country. Ultimately, these liberal undercurrents provided the Democratic Party a foundation—albeit a shaky one—on which to attempt to construct a national political majority."</p>'+
      '</div>'+
      '<img src=http://ww3.hdnux.com/photos/02/72/54/764726/3/628x471.jpg>'+
      '</div>';

  var yeslerInfo = new google.maps.InfoWindow({
      content: contentString[2]
  });

    google.maps.event.addListener(yeslerMarker, 'click', function() {
        yeslerInfo.open(map, yeslerMarker);
  });

    contentString[3] = '<div id="pop-up">'+
      '<h2>Sick\'s Stadium</h2>'+ 
      '<div id="bodyContent">'+
      '<p>' +
      'Located in the Mount Baker neighborhood at the corner McClellan Street and Rainier Avenue, Sick\'s Stadium first opened in 1938. The stadium was named after Emil Sick, who was the owner of the nearby Rainier Brewing Company as well as the minor league Seattle Rainiers. The Rainiers would play at the site until 1968. In 1969, Seattle\'s first Major League franchise, the Pilots, would locate at the stadium. The Pilots stay in Seattle would be remarkably brief, as they would relocate to Milwaukee as the Brewers prior to the 1970 season. In relative disrepair, the stadium would once again serve as the home for the minor league Rainiers from 1972 to 1976. Sick\'s Stadium was finally demolished in 1976. Today, the site serves as a location for a Lowe\'s home improvement store. Below is a photograph of the stadium as it looked just prior to its demolition in 1976:</p>' +
      '</div>'+
      '<img src=http://www.insidesocal.com/tomhoffarth/files/import/i-83ee32cb413b1ec6bc17735d167e940e-sicks805.jpg>'+
      '</div>';

  var sickInfo = new google.maps.InfoWindow({
      content: contentString[3]
  });

    google.maps.event.addListener(sickMarker, 'click', function() {
        sickInfo.open(map, sickMarker);
  });

  $("h1").text("");
  $("p subhead").text("");
  $("div").removeClass("innerHeader");
  $("footer").hide('nav');
  $("#over_map").addClass('return').text("MAIN MENU");

 },false);





//politics event 
politics.addEventListener('click', function() {
    var cat = this.children[0].getAttribute('id');
    console.log(cat);
    // document.getElementById('toHide').style.height = "0%";
    // document.getElementById('googleMap').style.height = "100%";
    var mapProp = {
    center: new google.maps.LatLng(47.605, -122.320850),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: grayScale
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  var hooverMarker = new google.maps.Marker({
    position: locations[0],
    map: map,
    icon: 'greypin.png',
    });

  var regradeMarker = new google.maps.Marker({
    position: regrade,
    map: map,
    icon: 'greypin.png'
    });

  var yeslerMarker = new google.maps.Marker({
    position: yesler,
    map: map,
    icon: 'greypin.png'
    });

  var sickMarker = new google.maps.Marker({
    position: sick,
    map: map,
    icon: 'greypin.png'
    });

  var contentString = [];

   contentString[0] = '<div id="pop-up">'+
      '<h2>Hooverville</h2>'+ 
      '<div id="bodyContent">'+
      '<p>' +
      'In recent years, a proliferation of books and articles has documented the rise of political conservatism in the United States. However, this scholarship either ignores or downplays the continued resilience of liberalism as well as its most important institutional vehicle, the Democratic Party. The current article represents an attempt to redress this imbalance. Its focus on Orange County, California (and more specifically, the city of Irvine) between the 1970s and the 1992 Presidential election might thus seem strange, given the region’s impeccably conservative reputation. However, as this article demonstrates, a much more complicated and multi-dimensional politics existed in the region, demonstrating just how deeply imbedded liberal policy preferences continued to be in suburban areas across the country. Ultimately, these liberal undercurrents provided the Democratic Party a foundation—albeit a shaky one—on which to attempt to construct a national political majority."</p>'+
      '</div>'+
      '<img id="big-img" src=http://www.portseattle100.org/images/properties/t46/Hooverville_2.jpg>'+
      '</div>';

  var hooverInfo = new google.maps.InfoWindow({
      content: contentString[0]
  });

    google.maps.event.addListener(hooverMarker, 'click', function() {
        hooverInfo.open(map, hooverMarker);
  });

    contentString[1] = '<div id="pop-up">'+
      '<h2>Regrading in Seattle</h2>'+ 
      '<div id="bodyContent">'+
      '<p>' +
      'In recent years, a proliferation of books and articles has documented the rise of political conservatism in the United States. However, this scholarship either ignores or downplays the continued resilience of liberalism as well as its most important institutional vehicle, the Democratic Party. The current article represents an attempt to redress this imbalance. Its focus on Orange County, California (and more specifically, the city of Irvine) between the 1970s and the 1992 Presidential election might thus seem strange, given the region’s impeccably conservative reputation. However, as this article demonstrates, a much more complicated and multi-dimensional politics existed in the region, demonstrating just how deeply imbedded liberal policy preferences continued to be in suburban areas across the country. Ultimately, these liberal undercurrents provided the Democratic Party a foundation—albeit a shaky one—on which to attempt to construct a national political majority."</p>'+
      '</div>'+
      '<img id="big-img" src=http://upload.wikimedia.org/wikipedia/commons/6/66/Leveling_the_Hills_of_Seattle.jpg>'+
      '</div>';

  var regradeInfo = new google.maps.InfoWindow({
      content: contentString[1]
  });

    google.maps.event.addListener(regradeMarker, 'click', function() {
        regradeInfo.open(map, regradeMarker);
  });

    contentString[2] = '<div id="pop-up">'+
      '<h2>Yesler\'s Mill</h2>'+ 
      '<div id="bodyContent">'+
      '<p>' +
      'In recent years, a proliferation of books and articles has documented the rise of political conservatism in the United States. However, this scholarship either ignores or downplays the continued resilience of liberalism as well as its most important institutional vehicle, the Democratic Party. The current article represents an attempt to redress this imbalance. Its focus on Orange County, California (and more specifically, the city of Irvine) between the 1970s and the 1992 Presidential election might thus seem strange, given the region’s impeccably conservative reputation. However, as this article demonstrates, a much more complicated and multi-dimensional politics existed in the region, demonstrating just how deeply imbedded liberal policy preferences continued to be in suburban areas across the country. Ultimately, these liberal undercurrents provided the Democratic Party a foundation—albeit a shaky one—on which to attempt to construct a national political majority."</p>'+
      '</div>'+
      '<img src=http://ww3.hdnux.com/photos/02/72/54/764726/3/628x471.jpg>'+
      '</div>';

  var yeslerInfo = new google.maps.InfoWindow({
      content: contentString[2]
  });

    google.maps.event.addListener(yeslerMarker, 'click', function() {
        yeslerInfo.open(map, yeslerMarker);
  });

    contentString[3] = '<div id="pop-up">'+
      '<h2>Sick\'s Stadium</h2>'+ 
      '<div id="bodyContent">'+
      '<p>' +
      'Located in the Mount Baker neighborhood at the corner McClellan Street and Rainier Avenue, Sick\'s Stadium first opened in 1938. The stadium was named after Emil Sick, who was the owner of the nearby Rainier Brewing Company as well as the minor league Seattle Rainiers. The Rainiers would play at the site until 1968. In 1969, Seattle\'s first Major League franchise, the Pilots, would locate at the stadium. The Pilots stay in Seattle would be remarkably brief, as they would relocate to Milwaukee as the Brewers prior to the 1970 season. In relative disrepair, the stadium would once again serve as the home for the minor league Rainiers from 1972 to 1976. Sick\'s Stadium was finally demolished in 1976. Today, the site serves as a location for a Lowe\'s home improvement store. Below is a photograph of the stadium as it looked just prior to its demolition in 1976:</p>' +
      '</div>'+
      '<img src=http://www.insidesocal.com/tomhoffarth/files/import/i-83ee32cb413b1ec6bc17735d167e940e-sicks805.jpg>'+
      '</div>';

  var sickInfo = new google.maps.InfoWindow({
      content: contentString[3]
  });

    google.maps.event.addListener(sickMarker, 'click', function() {
        sickInfo.open(map, sickMarker);
  });

  $("h1").text("");
  $("p subhead").text("");
  $("div").removeClass("innerHeader");
  $("footer").hide('nav');
  $("#over_map").addClass('return').text("MAIN MENU");

 },false);





//technology event 
technology.addEventListener('click', function() {
    var cat = this.children[0].getAttribute('id');
    console.log(cat);
    // document.getElementById('toHide').style.height = "0%";
    // document.getElementById('googleMap').style.height = "100%";
    var mapProp = {
    center: new google.maps.LatLng(47.605, -122.320850),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: mint
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  var hooverMarker = new google.maps.Marker({
    position: locations[0],
    map: map,
    icon: 'greypin.png',
    });

  var microsoftMarker = new google.maps.Marker({
    position: microsoft,
    map: map,
    icon: 'greypin.png'
    });

  var yeslerMarker = new google.maps.Marker({
    position: yesler,
    map: map,
    icon: 'greypin.png'
    });

  var sickMarker = new google.maps.Marker({
    position: sick,
    map: map,
    icon: 'greypin.png'
    });

  var contentString = [];

   contentString[0] = '<div id="pop-up">'+
      '<h2>Hooverville</h2>'+ 
      '<div id="bodyContent">'+
      '<p>' +
      'In recent years, a proliferation of books and articles has documented the rise of political conservatism in the United States. However, this scholarship either ignores or downplays the continued resilience of liberalism as well as its most important institutional vehicle, the Democratic Party. The current article represents an attempt to redress this imbalance. Its focus on Orange County, California (and more specifically, the city of Irvine) between the 1970s and the 1992 Presidential election might thus seem strange, given the region’s impeccably conservative reputation. However, as this article demonstrates, a much more complicated and multi-dimensional politics existed in the region, demonstrating just how deeply imbedded liberal policy preferences continued to be in suburban areas across the country. Ultimately, these liberal undercurrents provided the Democratic Party a foundation—albeit a shaky one—on which to attempt to construct a national political majority."</p>'+
      '</div>'+
      '<img id="big-img" src=http://www.portseattle100.org/images/properties/t46/Hooverville_2.jpg>'+
      '</div>';

  var hooverInfo = new google.maps.InfoWindow({
      content: contentString[0]
  });

    google.maps.event.addListener(hooverMarker, 'click', function() {
        hooverInfo.open(map, hooverMarker);
  });

    contentString[1] = '<div id="pop-up">'+
      '<h2>Microsoft</h2>'+ 
      '<div id="bodyContent">'+
      '<p>' +
      'Today, Microsoft is one of the most recognized and important corporations in the world. With a market capitalization of just over $360 billion, it is arguably the most important reason why the Seattle area is one of the most important information technology centers in the world. The image below depicts Microsoft\'s full staff as it existed in 1979, after Bill Gates and Paul Allen had relocated the company from Albuquerque to Bellevue. At the time, the company was located in a non-descript one story office building adjacent to a Burger Master restaurant on Bellevue\'s 8th Avenue. Today--largely as a result of the information technology boom Microsoft inspired--the location is surrounded by office towers, high rise condos, and high-end retail chains. While Micrsoft has lost some of the creative impetus that drove is dizzingy rise during the 1980s and 1990s, it remains an important driver of the region\'s economy. </p>'+
      '</div>'+
      '<img id="big-img" src=http://cdn.arstechnica.net/wp-content/uploads/2009/07/microsoft_1979.png>'+
      '</div>';

  var microsoftInfo = new google.maps.InfoWindow({
      content: contentString[1]
  });

    google.maps.event.addListener(microsoftMarker, 'click', function() {
        microsoftInfo.open(map, microsoftMarker);
  });

    contentString[2] = '<div id="pop-up">'+
      '<h2>Yesler\'s Mill</h2>'+ 
      '<div id="bodyContent">'+
      '<p>' +
      'In recent years, a proliferation of books and articles has documented the rise of political conservatism in the United States. However, this scholarship either ignores or downplays the continued resilience of liberalism as well as its most important institutional vehicle, the Democratic Party. The current article represents an attempt to redress this imbalance. Its focus on Orange County, California (and more specifically, the city of Irvine) between the 1970s and the 1992 Presidential election might thus seem strange, given the region’s impeccably conservative reputation. However, as this article demonstrates, a much more complicated and multi-dimensional politics existed in the region, demonstrating just how deeply imbedded liberal policy preferences continued to be in suburban areas across the country. Ultimately, these liberal undercurrents provided the Democratic Party a foundation—albeit a shaky one—on which to attempt to construct a national political majority."</p>'+
      '</div>'+
      '<img src=http://ww3.hdnux.com/photos/02/72/54/764726/3/628x471.jpg>'+
      '</div>';

  var yeslerInfo = new google.maps.InfoWindow({
      content: contentString[2]
  });

    google.maps.event.addListener(yeslerMarker, 'click', function() {
        yeslerInfo.open(map, yeslerMarker);
  });

    contentString[3] = '<div id="pop-up">'+
      '<h2>Sick\'s Stadium</h2>'+ 
      '<div id="bodyContent">'+
      '<p>' +
     'Located in the Mount Baker neighborhood at the corner McClellan Street and Rainier Avenue, Sick\'s Stadium first opened in 1938. The stadium was named after Emil Sick, who was the owner of the nearby Rainier Brewing Company as well as the minor league Seattle Rainiers. The Rainiers would play at the site until 1968. In 1969, Seattle\'s first Major League franchise, the Pilots, would locate at the stadium. The Pilots stay in Seattle would be remarkably brief, as they would relocate to Milwaukee as the Brewers prior to the 1970 season. In relative disrepair, the stadium would once again serve as the home for the minor league Rainiers from 1972 to 1976. Sick\'s Stadium was finally demolished in 1976. Today, the site serves as a location for a Lowe\'s home improvement store. Below is a photograph of the stadium as it looked just prior to its demolition in 1976:</p>' +
      '</div>'+
      '<img src=http://www.insidesocal.com/tomhoffarth/files/import/i-83ee32cb413b1ec6bc17735d167e940e-sicks805.jpg>'+
      '</div>';

  var sickInfo = new google.maps.InfoWindow({
      content: contentString[3]
  });

    google.maps.event.addListener(sickMarker, 'click', function() {
        sickInfo.open(map, sickMarker);
  });

  $("h1").text("");
  $("p subhead").text("");
  $("div").removeClass("innerHeader");
  $("footer").hide('nav');
  $("#over_map").addClass('return').text("MAIN MENU");

 },false);





//remove highlighted map category, return to original layout

var overmap = document.getElementById("over_map");
overmap.addEventListener('click', function(){
;
    var mapProp = {
    center: new google.maps.LatLng(47.615, -122.320850),
    zoom: 11,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: shiftWorker
  	};
  	var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  var hooverMarker = new google.maps.Marker({
    position: locations[0],
    map: map,
    icon: 'greypin.png',
    });

  var regradeMarker = new google.maps.Marker({
    position: regrade,
    map: map,
    icon: 'greypin.png'
    });

  var yeslerMarker = new google.maps.Marker({
    position: yesler,
    map: map,
    icon: 'greypin.png'
    });

  var sickMarker = new google.maps.Marker({
    position: sick,
    map: map,
    icon: 'greypin.png'
    });

  var chickenMarker = new google.maps.Marker({
    position: locations[4],
    map: map,
    icon: 'greypin.png'
    });

  var chickenMarker = new google.maps.Marker({
    position: higo,
    map: map,
    icon: 'greypin.png'
    });

  var microsoftMarker = new google.maps.Marker({
    position: microsoft,
    map: map,
    icon: 'greypin.png'
    });
  $("#target").addClass("innerHeader");
  $("h1").text("Seattle Backstory");
  $("p").add('subhead').text("All the History that is fit to Map");
  $("footer").show('nav');
  $("#over_map").removeClass('return').text("");
 },false);


// Google Maps API Key: AIzaSyBew_5PeJg2HpZxXL0j7CX0LCG4rzdFUpA

