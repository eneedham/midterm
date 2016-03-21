var map = L.map('map', {
center: [40.000, -75.1090],
zoom: 11
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
subdomains: 'abcd',
minZoom: 0,
maxZoom: 20,
ext: 'png'
}).addTo(map);

//Default state and newState
var state = 0;
var newState = [0];

//Default sidebar text
$("#text-title").text(array[0].title);
$("#text-block").hide();

//Next button function
nextFunc = function(j){
$("#text-block").show().text(array[j].text);
getDataFunction("neighborhoods_philadelphia", array[j].sqlStatement);
$("#text-title").text(array[j].title);
$("#text-subtitle").text(array[j].subTitle);
};

//Previous button function
prevFunc = function(j){
map.removeLayer(theLayer);
$("#text-block").show().text(array[j].text);
getDataFunction("neighborhoods_philadelphia", array[j].sqlStatement);
$("#text-title").text(array[j].title);
$("#text-subtitle").text(array[j].subTitle);
};

//NEXT BUTTON
$("#button-next").click(function(){
  map.setView([40.000, -75.1090], 11);
  state++;
  newState.push(state);
  if (state == array.length-1){
    $("#button-next").hide();
  }
  $("#button-prev").show().text("Previous");
  $("#text-subtitle").show();
        if (state == 1){
          nextFunc(state);
        }
        else if  (state == _.max(newState)){
          map.removeLayer(theLayer);
          nextFunc(state);
        }
});

//PREVIOUS BUTTON
$("#button-prev").click(function(){
  map.setView([40.000, -75.1090], 11);
  state=state-1;
  if(state > 0){
    newState.pop(state);
  }
  $("#button-next").show();
if (state == _.max(newState)){
  prevFunc(state);
}
else if (state === 0){
  $("#text-block").hide();
  $("#text-title").text(array[state].title);
  $("#text-subtitle").hide();
  map.removeLayer(theLayer);
  $("#button-prev").hide();
}
});
