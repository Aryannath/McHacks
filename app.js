let longitude;
let latitude;
let d1 = "<h6></h6><h6>best<br></h6>"
let d2 = "<h6></h6><h6>best<br></h6>"
let d3 = "<h6></h6><h6>best<br></h6>"
let d4 = "<h6></h6><h6>best<br></h6>"
let d5 = "<h6></h6><h6>best<br></h6>"
let d6 = "<h6></h6><h6>best<br></h6>"
let d7 = "<h6></h6><h6>best<br></h6>"
let d8= "<h6></h6><h6>best<br></h6>"
let d9= "<h6></h6><h6>best<br></h6>"
let d10= "<h6></h6><h6>best<br></h6>"
let d11= "<h6></h6><h6>best<br></h6>"
let d12= "<h6></h6><h6>best<br></h6>"



window.addEventListener('load', () =>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;
            console.log(latitude, longitude)
            map = L.map('mapDiv').setView([latitude, longitude], 5);
            
            var marker = L.marker([latitude, longitude]).addTo(map);
            marker.bindPopup(d1).openPopup();

            var marker2 = L.marker([latitude+0.001, longitude+0.001]).addTo(map);
            marker2.bindPopup(d2).openPopup();

            var marker3 = L.marker([latitude-0.001, longitude-0.02]).addTo(map);
            marker3.bindPopup(d3).openPopup();

            var marker4 = L.marker([latitude+0.0003, longitude+0.01]).addTo(map);
            marker4.bindPopup(d4).openPopup();

            var marker5 = L.marker([latitude-0.007, longitude+0.0002]).addTo(map);
            marker5.bindPopup(d5).openPopup();

            var marker6 = L.marker([latitude+0.001, longitude-0.01]).addTo(map);
            marker6.bindPopup(d6).openPopup();

            var marker7 = L.marker([latitude-0.005, longitude+0.0005]).addTo(map);
            marker7.bindPopup(d7).openPopup();

            var marker8 = L.marker([latitude+0.01, longitude-0.02]).addTo(map);
            marker8.bindPopup(d8).openPopup();

            var marker9 = L.marker([latitude-0.01, longitude+0.01]).addTo(map);
            marker9.bindPopup(d9).openPopup();

            var marker10 = L.marker([latitude+0.005, longitude-0.005]).addTo(map);
            marker10.bindPopup(d10).openPopup();

            var marker11 = L.marker([latitude-0.005, longitude-0.01]).addTo(map);
            marker11.bindPopup(d11).openPopup();

            var marker12 = L.marker([latitude-0.007, longitude-0.015]).addTo(map);
            marker12.bindPopup(d12).openPopup();

            initMap(latitude, longitude);
        })
    }
}) 

function callPersonOne() {
    var marker = L.marker([latitude-0.002, longitude+0.002]).addTo(map);
    marker.bindPopup(d1).openPopup();
}
function callPersonTwo() {
    var marker2 = L.marker([latitude+0.001, longitude+0.001]).addTo(map);
    marker2.bindPopup(d2).openPopup();
}

function callPersonThree() {
    var marker3 = L.marker([latitude-0.001, longitude-0.02]).addTo(map);
    marker3.bindPopup(d3).openPopup();
}
function callPersonFour() {
    var marker4 = L.marker([latitude+0.0003, longitude+0.01]).addTo(map);
    marker4.bindPopup(d4).openPopup();
}
function callPersonFive() {
    var marker5 = L.marker([latitude-0.007, longitude+0.0002]).addTo(map);
    marker5.bindPopup(d5).openPopup();
}
function callPersonSix() {
    var marker6 = L.marker([latitude+0.001, longitude-0.01]).addTo(map);
    marker6.bindPopup(d6).openPopup();
}
function callPersonSeven() {
    var marker7 = L.marker([latitude-0.005, longitude+0.0005]).addTo(map);
    marker7.bindPopup(d7).openPopup();
}
function callPersonEight() {
    var marker8 = L.marker([latitude+0.01, longitude-0.02]).addTo(map);
    marker8.bindPopup(d8).openPopup();
}
function callPersonNine() {
     var marker9 = L.marker([latitude-0.01, longitude+0.01]).addTo(map);
    marker9.bindPopup(d9).openPopup();
}
function callPersonTen() {    
    var marker10 = L.marker([latitude+0.005, longitude-0.005]).addTo(map);
    marker10.bindPopup(d10).openPopup();
}
function callPersonEleven(){
var marker11 = L.marker([latitude-0.005, longitude-0.01]).addTo(map);
    marker11.bindPopup(d11).openPopup();
}
function callPersonTwelve(){
var marker12 = L.marker([latitude-0.007, longitude-0.015]).addTo(map);
    marker12.bindPopup(d12).openPopup();
}





function initMap(mLat, mLong){
    // initialize map
    map.setView([mLat, mLong], 15);
    // set map tiles source
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
        maxZoom: 18,
    }).addTo(map);
    // add marker to the map
}
