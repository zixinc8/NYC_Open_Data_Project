function get(id){
  return document.getElementById(id);
}

function showMap(lat,lon){
  let location = [lat, lon];
  if(!mapObj){
      mapObj = L.map("map");
  } 
  let map = mapObj.setView(location, 18);

  const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
  }).addTo(map);

  let marker = L.marker(location).addTo(map);// places marker on map
}

function card(info){ 
    let build = `<div class="card fitted">
                    <h3>${info.legalbusinessname}</h3>
                    <hr>
                    <p>${info.borough}</p>
                    <p>${info.businessaddress}</p>
                    <hr>
                    <p>latitude: ${info.latitude}</p>
                    <p>longitude: ${info.longitude}</p>
                    <hr>
                    <p>${info.restaurantinspectionid}</p>`;
                     if(info.latitude && info.longitude){
                       build += `<input type="button" value="Map" onclick="showMap( ${info.latitude}, ${info.longitude} )">`;
                     }
        build +=    `</div>`;
     return build;
}