const outcome = document.querySelector('#outcome');
const btn = document.querySelector('#click');
btn.addEventListener('click', fetchIpAddress);

function fetchLatlog(client) {
  fetch(`https://ipapi.co/${client}/latlong`)
    .then(res => res.text())
    .then(data => {
      // console.log(data);
      let latlong = data.split(',');

      const API_KEY = 'd8b3c5f369fe527086fad1b9cbcdc7f0';
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${
        latlong[0]
      }&lon=${latlong[1]}&units=metric&APPID=${API_KEY}`;

      fetch(url)
        .then(res => res.json())
        .then(data => {
          // console.log(data);
        });
    });
}

function fetchIpAddress() {
  const api = `https://ipapi.co/json/`;

  fetch(api)
    .then(res => res.json())
    .then(data => {
      let client = data.ip;
      fetchLatlog(client);
      // console.log(data);
    });
}
