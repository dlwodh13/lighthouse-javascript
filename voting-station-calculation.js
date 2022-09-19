const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

//using for-loop
function chooseStations(stations){
  let numberOfStation = stations.length;
  let goodStation = [];
  for(let i = 0; i < numberOfStation; i++){
    const typeOfLoc = stations[i][2];
    let capacity = stations[i][1];
    if(capacity >= 20 && (typeOfLoc === "school" || typeOfLoc === "community centre")){   
      goodStation.push(stations[i][0]); 
    }
  }
  return goodStation;
}

console.log(chooseStations(stations));

//using forOf loop
function chooseStation(stations){
  let goodStation = [];
  for(const station of stations){
    //console.log(station[0]);
    const capacity = station[1];
    //console.log(capacity);
    const location = station[2];
    //console.log(location);
    if(capacity >= 20 && (location === "school" || location === "community centre")){
      goodStation.push(station[0]);
    }
  }
  return goodStation;
}

console.log(chooseStation(stations));