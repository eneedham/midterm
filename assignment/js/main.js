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



$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});


$("#text-title").text("Philadelphia Neighborhoods!");
$("#flip").hide();
var state = 1;



//NEXT BUTTON
$("#button-next").click(function(){
    map.setView([40.000, -75.1090], 11);
  if (state == 1){
    $("#flip").show().text("Hear more about " + array[0].title);
    getDataFunction("neighborhoods_philadelphia", array[0].sqlStatement);
    $("#text-title").text(array[0].title);
    $("#text-subtitle").text(array[0].subTitle);
    $("#panel").text(array[0].text);
    state = state + 1;
    $("#button-prev").show().text("Previous");
  }
  else if  (state == 2){
    $("#panel").hide();
    map.removeLayer(theLayer);
    $("#flip").show().text("Hear more about " + array[1].title);
    getDataFunction("neighborhoods_philadelphia", array[1].sqlStatement);
    $("#text-title").text(array[1].title);
    $("#text-subtitle").text(array[1].subTitle);
    $("#panel").text(array[1].text);
    state = state + 1;
  }
  else if  (state == 3){
    $("#panel").hide();
    map.removeLayer(theLayer);
    $("#flip").show().text("Hear more about " + array[2].title);
    getDataFunction("neighborhoods_philadelphia", array[2].sqlStatement);
    $("#text-title").text(array[2].title);
    $("#text-subtitle").text(array[2].subTitle);
    $("#panel").text(array[2].text);
    state = state + 1;
  }
  else if  (state == 4){
    $("#panel").hide();
    map.removeLayer(theLayer);
    $("#flip").show().text("Hear more about " + array[3].title);
    getDataFunction("neighborhoods_philadelphia", array[3].sqlStatement);
    $("#text-title").text(array[3].title);
    $("#text-subtitle").text(array[3].subTitle);
    $("#panel").text(array[3].text);
    state = state + 1;
  }
  else if (state == 5){
    $("#panel").hide();
    map.removeLayer(theLayer);
    $("#flip").show().text("Hear more about " + array[4].title);
    getDataFunction("neighborhoods_philadelphia", array[4].sqlStatement);
    $("#text-title").text(array[4].title);
    $("#text-subtitle").text(array[4].subTitle);
    $("#panel").text(array[4].text);
    state = state + 1;
    $("#button-next").hide();
  }
});

//PREVIOUS BUTTON
$("#button-prev").click(function(){
    map.setView([40.000, -75.1090], 11);
  if (state == 6){
    $("#panel").hide();
    map.removeLayer(theLayer);
    $("#flip").show().text("Hear more about " + array[3].title);
    getDataFunction("neighborhoods_philadelphia", array[3].sqlStatement);
    $("#text-title").text(array[3].title);
    $("#text-subtitle").text(array[3].subTitle);
    $("#panel").text(array[3].text);
    state = state - 1;
    $("#button-next").show();
  }
  else if (state == 5){
    $("#panel").hide();
    map.removeLayer(theLayer);
    $("#flip").show().text("Hear more about " + array[2].title);
    getDataFunction("neighborhoods_philadelphia", array[2].sqlStatement);
    $("#text-title").text(array[2].title);
    $("#text-subtitle").text(array[2].subTitle);
    $("#panel").text(array[2].text);
    state = state - 1;
  }
  else if (state == 4){
    $("#panel").hide();
    map.removeLayer(theLayer);
    $("#flip").show().text("Hear more about " + array[1].title);
    getDataFunction("neighborhoods_philadelphia", array[1].sqlStatement);
    $("#text-title").text(array[1].title);
    $("#text-subtitle").text(array[1].subTitle);
    $("#panel").text(array[1].text);
    state = state - 1;
  }
  else if (state == 3){
    $("#panel").hide();
    map.removeLayer(theLayer);
    $("#flip").show().text("Hear more about " + array[0].title);
    getDataFunction("neighborhoods_philadelphia", array[0].sqlStatement);
    $("#text-title").text(array[0].title);
    $("#text-subtitle").text(array[0].subTitle);
    $("#panel").text(array[0].text);
    state = state - 1;
  }
  else if (state == 2){
    $("#flip").hide();
    $("#panel").hide();
    $("#text-title").text("Philadelphia Neighborhoods!");
    $("#text-subtitle").hide();
    map.removeLayer(theLayer);
    state = state - 1;
    $("#button-prev").hide();
  }
});
