// declare marker locations

var hoover = new google.maps.LatLng(47.594297,-122.335985);
var regrade = new google.maps.LatLng(47.611847,-122.341922);
var yesler = new google.maps.LatLng(47.60273,-122.338351);
var sick = new google.maps.LatLng(47.5787321,-122.299051);
var locations = [hoover, regrade, yesler, sick];


// declare grayScale style array

var blueEssence = [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}]

var shiftWorker = [{"stylers":[{"saturation":-100},{"gamma":1}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"saturation":50},{"gamma":0},{"hue":"#50a5d1"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"weight":0.5},{"color":"#333333"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"gamma":1},{"saturation":50}]}]

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
    center: new google.maps.LatLng(47.605, -122.320850),
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
}

google.maps.event.addDomListener(window, 'load', initialize);




//add event listener to highlight map category

//culture event

culture.addEventListener('click', function() {
    var cat = this.children[0].getAttribute('id');
    console.log(cat);
    document.getElementById('toHide').style.height = "0%";
    document.getElementById('googleMap').style.height = "100%";

	var mapProp = {
    center: new google.maps.LatLng(47.605, -122.320850),
    zoom: 12,
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
        document.getElementById('googleMap').style.height = "100%";
        document.getElementById('vanishLater').style.height = "0%";
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
        document.getElementById('googleMap').style.height = "100%";
        document.getElementById('vanishLater').style.height = "0%";
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
        document.getElementById('googleMap').style.height = "100%";
        document.getElementById('vanishLater').style.height = "0%";
  });

    contentString[3] = '<div id="pop-up">'+
      '<h2>Sick\'s Stadium</h2>'+ 
      '<div id="bodyContent">'+
      '<p>' +
      'In recent years, a proliferation of books and articles has documented the rise of political conservatism in the United States. However, this scholarship either ignores or downplays the continued resilience of liberalism as well as its most important institutional vehicle, the Democratic Party. The current article represents an attempt to redress this imbalance. Its focus on Orange County, California (and more specifically, the city of Irvine) between the 1970s and the 1992 Presidential election might thus seem strange, given the region’s impeccably conservative reputation. However, as this article demonstrates, a much more complicated and multi-dimensional politics existed in the region, demonstrating just how deeply imbedded liberal policy preferences continued to be in suburban areas across the country. Ultimately, these liberal undercurrents provided the Democratic Party a foundation—albeit a shaky one—on which to attempt to construct a national political majority."</p>'+
      '</div>'+
      '<img src=http://www.insidesocal.com/tomhoffarth/files/import/i-83ee32cb413b1ec6bc17735d167e940e-sicks805.jpg>'+
      '</div>';

  var sickInfo = new google.maps.InfoWindow({
      content: contentString[3]
  });

    google.maps.event.addListener(sickMarker, 'click', function() {
        sickInfo.open(map, sickMarker);
        document.getElementById('googleMap').style.height = "100%";
        document.getElementById('vanishLater').style.height = "0%";
  });

  $("#over_map").addClass('return').text("ZOOM OUT");
 },false);




//civil right event 
civilRights.addEventListener('click', function() {
    var cat = this.children[0].getAttribute('id');
    console.log(cat);
    document.getElementById('toHide').style.height = "0%";
    document.getElementById('googleMap').style.height = "100%";
    var mapProp = {
    center: new google.maps.LatLng(47.605, -122.320850),
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
        document.getElementById('googleMap').style.height = "100%";
        document.getElementById('vanishLater').style.height = "0%";
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
        document.getElementById('googleMap').style.height = "100%";
        document.getElementById('vanishLater').style.height = "0%";
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
        document.getElementById('googleMap').style.height = "100%";
        document.getElementById('vanishLater').style.height = "0%";
  });

    contentString[3] = '<div id="pop-up">'+
      '<h2>Sick\'s Stadium</h2>'+ 
      '<div id="bodyContent">'+
      '<p>' +
      'In recent years, a proliferation of books and articles has documented the rise of political conservatism in the United States. However, this scholarship either ignores or downplays the continued resilience of liberalism as well as its most important institutional vehicle, the Democratic Party. The current article represents an attempt to redress this imbalance. Its focus on Orange County, California (and more specifically, the city of Irvine) between the 1970s and the 1992 Presidential election might thus seem strange, given the region’s impeccably conservative reputation. However, as this article demonstrates, a much more complicated and multi-dimensional politics existed in the region, demonstrating just how deeply imbedded liberal policy preferences continued to be in suburban areas across the country. Ultimately, these liberal undercurrents provided the Democratic Party a foundation—albeit a shaky one—on which to attempt to construct a national political majority."</p>'+
      '</div>'+
      '<img src=http://www.insidesocal.com/tomhoffarth/files/import/i-83ee32cb413b1ec6bc17735d167e940e-sicks805.jpg>'+
      '</div>';

  var sickInfo = new google.maps.InfoWindow({
      content: contentString[3]
  });

    google.maps.event.addListener(sickMarker, 'click', function() {
        sickInfo.open(map, sickMarker);
        document.getElementById('googleMap').style.height = "100%";
        document.getElementById('vanishLater').style.height = "0%";
  });

  $("#over_map").addClass('return').text("ZOOM OUT");
 },false);




//commerce event 
commerce.addEventListener('click', function() {
    var cat = this.children[0].getAttribute('id');
    console.log(cat);
    document.getElementById('toHide').style.height = "0%";
    document.getElementById('googleMap').style.height = "100%";
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
        document.getElementById('googleMap').style.height = "100%";
        document.getElementById('vanishLater').style.height = "0%";
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
        document.getElementById('googleMap').style.height = "100%";
        document.getElementById('vanishLater').style.height = "0%";
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
        document.getElementById('googleMap').style.height = "100%";
        document.getElementById('vanishLater').style.height = "0%";
  });

    contentString[3] = '<div id="pop-up">'+
      '<h2>Sick\'s Stadium</h2>'+ 
      '<div id="bodyContent">'+
      '<p>' +
      'In recent years, a proliferation of books and articles has documented the rise of political conservatism in the United States. However, this scholarship either ignores or downplays the continued resilience of liberalism as well as its most important institutional vehicle, the Democratic Party. The current article represents an attempt to redress this imbalance. Its focus on Orange County, California (and more specifically, the city of Irvine) between the 1970s and the 1992 Presidential election might thus seem strange, given the region’s impeccably conservative reputation. However, as this article demonstrates, a much more complicated and multi-dimensional politics existed in the region, demonstrating just how deeply imbedded liberal policy preferences continued to be in suburban areas across the country. Ultimately, these liberal undercurrents provided the Democratic Party a foundation—albeit a shaky one—on which to attempt to construct a national political majority."</p>'+
      '</div>'+
      '<img src=http://www.insidesocal.com/tomhoffarth/files/import/i-83ee32cb413b1ec6bc17735d167e940e-sicks805.jpg>'+
      '</div>';

  var sickInfo = new google.maps.InfoWindow({
      content: contentString[3]
  });

    google.maps.event.addListener(sickMarker, 'click', function() {
        sickInfo.open(map, sickMarker);
        document.getElementById('googleMap').style.height = "100%";
        document.getElementById('vanishLater').style.height = "0%";
  });

  $("#over_map").addClass('return').text("ZOOM OUT");
 },false);





//environment event 
environment.addEventListener('click', function() {
    var cat = this.children[0].getAttribute('id');
    console.log(cat);
    document.getElementById('toHide').style.height = "0%";
    document.getElementById('googleMap').style.height = "100%";
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
        document.getElementById('googleMap').style.height = "100%";
        document.getElementById('vanishLater').style.height = "0%";
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
        document.getElementById('googleMap').style.height = "100%";
        document.getElementById('vanishLater').style.height = "0%";
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
        document.getElementById('googleMap').style.height = "100%";
        document.getElementById('vanishLater').style.height = "0%";
  });

    contentString[3] = '<div id="pop-up">'+
      '<h2>Sick\'s Stadium</h2>'+ 
      '<div id="bodyContent">'+
      '<p>' +
      'In recent years, a proliferation of books and articles has documented the rise of political conservatism in the United States. However, this scholarship either ignores or downplays the continued resilience of liberalism as well as its most important institutional vehicle, the Democratic Party. The current article represents an attempt to redress this imbalance. Its focus on Orange County, California (and more specifically, the city of Irvine) between the 1970s and the 1992 Presidential election might thus seem strange, given the region’s impeccably conservative reputation. However, as this article demonstrates, a much more complicated and multi-dimensional politics existed in the region, demonstrating just how deeply imbedded liberal policy preferences continued to be in suburban areas across the country. Ultimately, these liberal undercurrents provided the Democratic Party a foundation—albeit a shaky one—on which to attempt to construct a national political majority."</p>'+
      '</div>'+
      '<img src=http://www.insidesocal.com/tomhoffarth/files/import/i-83ee32cb413b1ec6bc17735d167e940e-sicks805.jpg>'+
      '</div>';

  var sickInfo = new google.maps.InfoWindow({
      content: contentString[3]
  });

    google.maps.event.addListener(sickMarker, 'click', function() {
        sickInfo.open(map, sickMarker);
        document.getElementById('googleMap').style.height = "100%";
        document.getElementById('vanishLater').style.height = "0%";
  });

  $("#over_map").addClass('return').text("ZOOM OUT");
 },false);





//politics event 
politics.addEventListener('click', function() {
    var cat = this.children[0].getAttribute('id');
    console.log(cat);
    document.getElementById('toHide').style.height = "0%";
    document.getElementById('googleMap').style.height = "100%";
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
        document.getElementById('googleMap').style.height = "100%";
        document.getElementById('vanishLater').style.height = "0%";
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
        document.getElementById('googleMap').style.height = "100%";
        document.getElementById('vanishLater').style.height = "0%";
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
        document.getElementById('googleMap').style.height = "100%";
        document.getElementById('vanishLater').style.height = "0%";
  });

    contentString[3] = '<div id="pop-up">'+
      '<h2>Sick\'s Stadium</h2>'+ 
      '<div id="bodyContent">'+
      '<p>' +
      'In recent years, a proliferation of books and articles has documented the rise of political conservatism in the United States. However, this scholarship either ignores or downplays the continued resilience of liberalism as well as its most important institutional vehicle, the Democratic Party. The current article represents an attempt to redress this imbalance. Its focus on Orange County, California (and more specifically, the city of Irvine) between the 1970s and the 1992 Presidential election might thus seem strange, given the region’s impeccably conservative reputation. However, as this article demonstrates, a much more complicated and multi-dimensional politics existed in the region, demonstrating just how deeply imbedded liberal policy preferences continued to be in suburban areas across the country. Ultimately, these liberal undercurrents provided the Democratic Party a foundation—albeit a shaky one—on which to attempt to construct a national political majority."</p>'+
      '</div>'+
      '<img src=http://www.insidesocal.com/tomhoffarth/files/import/i-83ee32cb413b1ec6bc17735d167e940e-sicks805.jpg>'+
      '</div>';

  var sickInfo = new google.maps.InfoWindow({
      content: contentString[3]
  });

    google.maps.event.addListener(sickMarker, 'click', function() {
        sickInfo.open(map, sickMarker);
        document.getElementById('googleMap').style.height = "100%";
        document.getElementById('vanishLater').style.height = "0%";
  });

  $("#over_map").addClass('return').text("ZOOM OUT");
 },false);





//technology event 
technology.addEventListener('click', function() {
    var cat = this.children[0].getAttribute('id');
    console.log(cat);
    document.getElementById('toHide').style.height = "0%";
    document.getElementById('googleMap').style.height = "100%";
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
        document.getElementById('googleMap').style.height = "100%";
        document.getElementById('vanishLater').style.height = "0%";
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
        document.getElementById('googleMap').style.height = "100%";
        document.getElementById('vanishLater').style.height = "0%";
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
        document.getElementById('googleMap').style.height = "100%";
        document.getElementById('vanishLater').style.height = "0%";
  });

    contentString[3] = '<div id="pop-up">'+
      '<h2>Sick\'s Stadium</h2>'+ 
      '<div id="bodyContent">'+
      '<p>' +
      'In recent years, a proliferation of books and articles has documented the rise of political conservatism in the United States. However, this scholarship either ignores or downplays the continued resilience of liberalism as well as its most important institutional vehicle, the Democratic Party. The current article represents an attempt to redress this imbalance. Its focus on Orange County, California (and more specifically, the city of Irvine) between the 1970s and the 1992 Presidential election might thus seem strange, given the region’s impeccably conservative reputation. However, as this article demonstrates, a much more complicated and multi-dimensional politics existed in the region, demonstrating just how deeply imbedded liberal policy preferences continued to be in suburban areas across the country. Ultimately, these liberal undercurrents provided the Democratic Party a foundation—albeit a shaky one—on which to attempt to construct a national political majority."</p>'+
      '</div>'+
      '<img src=http://www.insidesocal.com/tomhoffarth/files/import/i-83ee32cb413b1ec6bc17735d167e940e-sicks805.jpg>'+
      '</div>';

  var sickInfo = new google.maps.InfoWindow({
      content: contentString[3]
  });

    google.maps.event.addListener(sickMarker, 'click', function() {
        sickInfo.open(map, sickMarker);
        document.getElementById('googleMap').style.height = "100%";
        document.getElementById('vanishLater').style.height = "0%";
  });

  $("#over_map").addClass('return').text("ZOOM OUT");
 },false);



//remove highlighted map category, return to original layout

var overmap = document.getElementById("over_map");
overmap.addEventListener('click', function(){
    document.getElementById('toHide').style.height = "25%";
    document.getElementById('googleMap').style.height = "62.5%";
    var mapProp = {
    center: new google.maps.LatLng(47.605, -122.320850),
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

  $("#over_map").removeClass('return').text("");
 },false);


// Google Maps API Key: AIzaSyBew_5PeJg2HpZxXL0j7CX0LCG4rzdFUpA

