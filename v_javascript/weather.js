const Coords = "coords";

function saveCoords(coordsObj) {
  localStorage.setItem(Coords, JSON.stringify(coordsObj)); //로컬스토리지에 저장되면 더이상 위치권한 묻지 않음.
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude, // same latitude:latitude
    longitude
  };
  saveCoords(coordsObj);
}

function handleGeoError() {
  console.log("Cannot access Geo location");
}

function askForCoord() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(Coords);
  if (loadedCoords === null) {
    askForCoord();
  } else {
    //getWeather
  }
}

function init() {
  loadCoords();
}

init();
