// $('#category').children().click(switchCat);

// function switchCat() {
//     var color = $(this).attr('id');
//     console.log(color);
//     $('googleMap').categories[0];
// }
var hoover = new google.maps.LatLng(47.594297,-122.335985);
var regrade = new google.maps.LatLng(47.611847,-122.341922);
var yesler = new google.maps.LatLng(47.60273,-122.338351);
var sick = new google.maps.LatLng(47.5787321,-122.299051);
var locations = [hoover, regrade, yesler, sick];

var mapProp
var map
var hooverMarker 
var regradeMarker 
var yeslerMarker 
var sickMarker 
var contentString = [];
var hooverInfo
var regradeInfo
var yeslerInfo
var sickInfo

var culture = [];
var civilRights
create one big object containing the 6 categories, each of which
are also represented by an ojbect

var categories =  [
    
    culture = {

        properties: 

            mapProp = {
            center: new google.maps.LatLng(47.605, -122.320850),
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: shiftWorker
            }, 
            
        map: map = new google.maps.Map(document.getElementById("googleMap"), mapProp),

        markers: [

            hooverMarker = new google.maps.Marker({
            position: hoover,
            map: map,
            icon: 'greypin.png'
            }),

            regradeMarker = new google.maps.Marker({
            position: regrade,
            map: map,
            icon: 'greypin.png'
            }),

            yeslerMarker = new google.maps.Marker({
            position: yesler,
            map: map,
            icon: 'greypin.png'
            }),

            sickMarker = new google.maps.Marker({
            position: sick,
            map: map,
            icon: 'greypin.png'
            })
        ],
        
        content: [

        '<div id="pop-up">'+
          '<h2>Hooverville</h2>'+ 
          '<div id="bodyContent">'+
          '<p>' +
          'In recent years, a proliferation of books and articles has documented the rise of political conservatism in the United States. However, this scholarship either ignores or downplays the continued resilience of liberalism as well as its most important institutional vehicle, the Democratic Party. The current article represents an attempt to redress this imbalance. Its focus on Orange County, California (and more specifically, the city of Irvine) between the 1970s and the 1992 Presidential election might thus seem strange, given the region’s impeccably conservative reputation. However, as this article demonstrates, a much more complicated and multi-dimensional politics existed in the region, demonstrating just how deeply imbedded liberal policy preferences continued to be in suburban areas across the country. Ultimately, these liberal undercurrents provided the Democratic Party a foundation—albeit a shaky one—on which to attempt to construct a national political majority."</p>'+
          '</div>'+
          '<img id="big-img" src=http://www.portseattle100.org/images/properties/t46/Hooverville_2.jpg>'+
          '</div>',


        '<div id="pop-up">'+
          '<h2>Regrading in Seattle</h2>'+ 
          '<div id="bodyContent">'+
          '<p>' +
          'In recent years, a proliferation of books and articles has documented the rise of political conservatism in the United States. However, this scholarship either ignores or downplays the continued resilience of liberalism as well as its most important institutional vehicle, the Democratic Party. The current article represents an attempt to redress this imbalance. Its focus on Orange County, California (and more specifically, the city of Irvine) between the 1970s and the 1992 Presidential election might thus seem strange, given the region’s impeccably conservative reputation. However, as this article demonstrates, a much more complicated and multi-dimensional politics existed in the region, demonstrating just how deeply imbedded liberal policy preferences continued to be in suburban areas across the country. Ultimately, these liberal undercurrents provided the Democratic Party a foundation—albeit a shaky one—on which to attempt to construct a national political majority."</p>'+
          '</div>'+
          '<img id="big-img" src=http://upload.wikimedia.org/wikipedia/commons/6/66/Leveling_the_Hills_of_Seattle.jpg>'+
          '</div>',

        '<div id="pop-up">'+
          '<h2>Yesler\'s Mill</h2>'+ 
          '<div id="bodyContent">'+
          '<p>' +
          'In recent years, a proliferation of books and articles has documented the rise of political conservatism in the United States. However, this scholarship either ignores or downplays the continued resilience of liberalism as well as its most important institutional vehicle, the Democratic Party. The current article represents an attempt to redress this imbalance. Its focus on Orange County, California (and more specifically, the city of Irvine) between the 1970s and the 1992 Presidential election might thus seem strange, given the region’s impeccably conservative reputation. However, as this article demonstrates, a much more complicated and multi-dimensional politics existed in the region, demonstrating just how deeply imbedded liberal policy preferences continued to be in suburban areas across the country. Ultimately, these liberal undercurrents provided the Democratic Party a foundation—albeit a shaky one—on which to attempt to construct a national political majority."</p>'+
          '</div>'+
          '<img src=http://ww3.hdnux.com/photos/02/72/54/764726/3/628x471.jpg>'+
          '</div>',

        '<div id="pop-up">'+
          '<h2>Sick\'s Stadium</h2>'+ 
          '<div id="bodyContent">'+
          '<p>' +
          'In recent years, a proliferation of books and articles has documented the rise of political conservatism in the United States. However, this scholarship either ignores or downplays the continued resilience of liberalism as well as its most important institutional vehicle, the Democratic Party. The current article represents an attempt to redress this imbalance. Its focus on Orange County, California (and more specifically, the city of Irvine) between the 1970s and the 1992 Presidential election might thus seem strange, given the region’s impeccably conservative reputation. However, as this article demonstrates, a much more complicated and multi-dimensional politics existed in the region, demonstrating just how deeply imbedded liberal policy preferences continued to be in suburban areas across the country. Ultimately, these liberal undercurrents provided the Democratic Party a foundation—albeit a shaky one—on which to attempt to construct a national political majority."</p>'+
          '</div>'+
          '<img src=http://www.insidesocal.com/tomhoffarth/files/import/i-83ee32cb413b1ec6bc17735d167e940e-sicks805.jpg>'+
          '</div>'
          ]

          },

    civilRights = {

        properties: 
            mapProp = {
            center: new google.maps.LatLng(47.605, -122.320850),
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: shiftWorker
            }, 
        
        map: map = new google.maps.Map(document.getElementById("googleMap"), mapProp),


        markers: [

            hooverMarker = new google.maps.Marker({
            position: hoover,
            map: map,
            icon: 'greypin.png'
            }),

            regradeMarker = new google.maps.Marker({
            position: regrade,
            map: map,
            icon: 'greypin.png'
            }),

            yeslerMarker = new google.maps.Marker({
            position: yesler,
            map: map,
            icon: 'greypin.png'
            }),

            sickMarker = new google.maps.Marker({
            position: sick,
            map: map,
            icon: 'greypin.png'
            })

        ],

        content: [

        '<div id="pop-up">'+
          '<h2>Hooverville</h2>'+ 
          '<div id="bodyContent">'+
          '<p>' +
          'In recent years, a proliferation of books and articles has documented the rise of political conservatism in the United States. However, this scholarship either ignores or downplays the continued resilience of liberalism as well as its most important institutional vehicle, the Democratic Party. The current article represents an attempt to redress this imbalance. Its focus on Orange County, California (and more specifically, the city of Irvine) between the 1970s and the 1992 Presidential election might thus seem strange, given the region’s impeccably conservative reputation. However, as this article demonstrates, a much more complicated and multi-dimensional politics existed in the region, demonstrating just how deeply imbedded liberal policy preferences continued to be in suburban areas across the country. Ultimately, these liberal undercurrents provided the Democratic Party a foundation—albeit a shaky one—on which to attempt to construct a national political majority."</p>'+
          '</div>'+
          '<img id="big-img" src=http://www.portseattle100.org/images/properties/t46/Hooverville_2.jpg>'+
          '</div>',


        '<div id="pop-up">'+
          '<h2>Regrading in Seattle</h2>'+ 
          '<div id="bodyContent">'+
          '<p>' +
          'In recent years, a proliferation of books and articles has documented the rise of political conservatism in the United States. However, this scholarship either ignores or downplays the continued resilience of liberalism as well as its most important institutional vehicle, the Democratic Party. The current article represents an attempt to redress this imbalance. Its focus on Orange County, California (and more specifically, the city of Irvine) between the 1970s and the 1992 Presidential election might thus seem strange, given the region’s impeccably conservative reputation. However, as this article demonstrates, a much more complicated and multi-dimensional politics existed in the region, demonstrating just how deeply imbedded liberal policy preferences continued to be in suburban areas across the country. Ultimately, these liberal undercurrents provided the Democratic Party a foundation—albeit a shaky one—on which to attempt to construct a national political majority."</p>'+
          '</div>'+
          '<img id="big-img" src=http://upload.wikimedia.org/wikipedia/commons/6/66/Leveling_the_Hills_of_Seattle.jpg>'+
          '</div>',

        '<div id="pop-up">'+
          '<h2>Yesler\'s Mill</h2>'+ 
          '<div id="bodyContent">'+
          '<p>' +
          'In recent years, a proliferation of books and articles has documented the rise of political conservatism in the United States. However, this scholarship either ignores or downplays the continued resilience of liberalism as well as its most important institutional vehicle, the Democratic Party. The current article represents an attempt to redress this imbalance. Its focus on Orange County, California (and more specifically, the city of Irvine) between the 1970s and the 1992 Presidential election might thus seem strange, given the region’s impeccably conservative reputation. However, as this article demonstrates, a much more complicated and multi-dimensional politics existed in the region, demonstrating just how deeply imbedded liberal policy preferences continued to be in suburban areas across the country. Ultimately, these liberal undercurrents provided the Democratic Party a foundation—albeit a shaky one—on which to attempt to construct a national political majority."</p>'+
          '</div>'+
          '<img src=http://ww3.hdnux.com/photos/02/72/54/764726/3/628x471.jpg>'+
          '</div>',

        '<div id="pop-up">'+
          '<h2>Sick\'s Stadium</h2>'+ 
          '<div id="bodyContent">'+
          '<p>' +
          'In recent years, a proliferation of books and articles has documented the rise of political conservatism in the United States. However, this scholarship either ignores or downplays the continued resilience of liberalism as well as its most important institutional vehicle, the Democratic Party. The current article represents an attempt to redress this imbalance. Its focus on Orange County, California (and more specifically, the city of Irvine) between the 1970s and the 1992 Presidential election might thus seem strange, given the region’s impeccably conservative reputation. However, as this article demonstrates, a much more complicated and multi-dimensional politics existed in the region, demonstrating just how deeply imbedded liberal policy preferences continued to be in suburban areas across the country. Ultimately, these liberal undercurrents provided the Democratic Party a foundation—albeit a shaky one—on which to attempt to construct a national political majority."</p>'+
          '</div>'+
          '<img src=http://www.insidesocal.com/tomhoffarth/files/import/i-83ee32cb413b1ec6bc17735d167e940e-sicks805.jpg>'+
          '</div>'

          ]

     }

];