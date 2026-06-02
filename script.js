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

function complaintsByBorough(){
  let q = 0, bk = 0, bx = 0, m = 0;
  
  for(let i = 0; i < data.length; i++){
    let complaint = data[i];
    if(complaint.borough == "Queens"){
      q++;
    }else if(complaint.borough == "Manhattan"){
      m++;
    }else if(complaint.borough == "Brooklyn"){
      bk++;
    }else if(complaint.borough == "Bronx"){
      bx++;
    }
  }

  let chartData = [
    ["Queens", q],
    ["Manhattan", m],
    ["Brooklyn", bk],
    ["Bronx", bx],
  ];
  
  let chartType = document.getElementById("chartType").value;
  
  displayChart(chartData, "output", chartType);
}

function displayChart( data, chart_id, chart_type ){
  let chart = c3.generate({
    bindto: `#${chart_id}`,
    data: {
      columns: data,
      type: chart_type
    }
  });
}