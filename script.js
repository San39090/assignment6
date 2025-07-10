var city = document.querySelector(".city").textContent;
const temperature = document.querySelector(".temp").textContent;
const wind = document.querySelector(".wind").textContent;
const humid = document.querySelector(".humid").textContent;
var front = "https://api.openweathermap.org/data/2.5/weather?q=";
var back = "&appid=5c7ce1f04a77c09801a918f5142ab3cc";
// const cities = [
//   "Delhi",
//   "Bangalore",
//   "Chennai",
//   "Jaipur",
//   "VisakhaPatnam",
//   "Mumbai",
//   "Kolkata",
//   "Chandigarh",
//   "Srinagar",
//   "Hyderabad",
//   "Dhanbad",
//   "Ranchi",
// ];
window.onload = function () {
  reload();
};
async function reload() {
  const url = front + city + back;
  const response = await fetch(url);
  const data = await response.json();
  document.querySelector(".temp").textContent =
    temperature + " " + (data.main.temp - 273).toFixed(2) + "°C";
  document.querySelector(".wind").textContent =
    wind + " " + data.wind.speed + "m/s";
  document.querySelector(".humid").textContent =
    humid + " " + data.main.humidity + "%";
  if (data.weather[0].main === "Clouds") {
    document.querySelector(".icon").src = "/images/cloud.png";
  } else if (data.weather[0].main === "Clear") {
    document.querySelector(".icon").src = "/images/sun.png";
  } else if (data.weather[0].main === "Rain") {
    document.querySelector(".icon").src = "/images/storm.png";
  }
  //console.log(cities[Math.floor(Math.random()*cities.length)]);
}
//document.querySelector(".temp").textContent = temperature + data.main;
async function refresh() {
  // document.querySelector(".city").textContent =
  //   cities[Math.floor(Math.random() * cities.length)];
  var city = document.querySelector(".city").textContent;
  const url = front + city + back;
  const response = await fetch(url);
  const data = await response.json();
  document.querySelector(".temp").textContent =
    temperature + " " + (data.main.temp - 273).toFixed(2) + "°C";
  document.querySelector(".wind").textContent =
    wind + " " + data.wind.speed + "m/s";
  document.querySelector(".humid").textContent =
    humid + " " + data.main.humidity + "%";
  if (data.weather[0].main === "Clouds") {
    document.querySelector(".icon").src = "/images/cloud.png";
  } else if (data.weather[0].main === "Clear") {
    document.querySelector(".icon").src = "/images/sun.png";
  } else if (data.weather[0].main === "Rain") {
    document.querySelector(".icon").src = "/images/storm.png";
  }
  //console.log(data.weather[0].main);
}

//cloud   clear
