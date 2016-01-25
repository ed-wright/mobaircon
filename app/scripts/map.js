// 'use strict';
// var citymap = {};
// citymap.belper = {
// center: new google.maps.LatLng(53.0476367,-1.4983462),
// radius: 50000
// };
// citymap.manchester = {
// center: new google.maps.LatLng(53.4310903,-2.1696828),
// radius: 14000
// };
// var cityCircle;
//
// function googleMapsLoad() {
// var mapCanvas = document.getElementById('map-canvas');
// var mapOptions = {
// center: new google.maps.LatLng(53.070000, -2.0335088),
// zoom: 9,
// mapTypeId: google.maps.MapTypeId.ROADMAP,
// minZoom: 9
// };
// var map = new google.maps.Map(mapCanvas, mapOptions)
//
// for (var city in citymap) {
// var populationOptions = {
// strokeColor: '#FF0000',
// strokeOpacity: 0.8,
// strokeWeight: 0,
// fillColor: '#FF0000',
// fillOpacity: 0.30,
// map: map,
// center: citymap[city].center,
// radius: citymap[city].radius
// };
// var cityCircle = new google.maps.Circle(populationOptions);
// };
// };
// //run Functions
// $(document).on('pageshow', '#wrapper', function(e, data){
//                 googleMapsLoad();
//             });
// $(document).ready(function(){
//
// });
