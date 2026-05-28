let data, info, leftPanel, mapObj;

async function init(){
     let link = "data.json";
    info = await fetch(link);
     data = await info.json();

    let leftPanel = get("leftPanel");
    let build = "";

    for(let i = 0; i < data.length; i++){
    let crash = data[i];
    build += card(crash);
    }

    leftPanel.innerHTML = build;  
}

function filterByBoro(){
  leftPanel = get("leftPanel");
  let boro = get("borough").value;
  let build = "";
  
  for(let i = 0; i < data.length; i++){
      let complaint = data[i];
      if (complaint.borough == boro){		
        build += card(complaint);
      }
  }
  leftPanel.innerHTML = build;
}

function displayMap(){
  //Retrieve the latitude & longitude from the user via text inputs and pass it to the showMap() function to generate the map and display it.
  let lat = get("lat").value;
  let lon = get("lon").value;

  showMap(lat,lon);
  
}