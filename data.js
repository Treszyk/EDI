const data_tab = document.querySelector('#Data');
const data_table = document.querySelector('#Data table');
const loader_anim = document.querySelector('#Data #loader');

const load_into_html = (data) => {
    //gettings the keys of the api data
    keys = Object.keys(data[0]);
    //creating the header row
    const header_row = document.createElement('tr');
    header_row.innerHTML = '<th>ID</th>';

    keys.forEach(key => {
        let cell = document.createElement('th');
        cell.innerHTML = key;
        header_row.appendChild(cell);
    });

    data_table.appendChild(header_row);
    //displaying data on the wesbite

    data.forEach((row, i) => {
        //creating table rows
        let table_row = document.createElement('tr');
        table_row.innerHTML = `<td>${i+1}</td>`;
        //creating rows based on keys of the json
        keys.forEach(key => {
            let row_cell = document.createElement('td');
            row_cell.innerHTML = row[key];
            table_row.appendChild(row_cell);
        })
        data_table.appendChild(table_row);
    });

    loader_anim.style.display = 'none';
}

//fetching the data from mockaroo api only 200 requests a day
const rows = fetch('https://my.api.mockaroo.com/pogoda.json?key=b3f3e0f0').then(res => res.json()).then(res => {
    load_into_html(res);
})

fetch('https://my.api.mockaroo.com/pogoda.json?key=b3f3e0f0').then(res => res.json()).then(data => {
    // Extracting the required data for the charts
    const cities = data.map(entry => entry.city);
    const temperatures = data.map(entry => entry.temperature);
    const humidities = data.map(entry => entry.humidity);
    const windSpeedData = data.map(entry => entry.wind_speed)

    // Creating the temperature chart
    const temperatureChart = new Chart(document.getElementById('myChart_1'), {
      type: 'bar',
      data: {
        labels: cities,
        datasets: [{
          label: 'Temperature (°C)',
          data: temperatures,
          backgroundColor: 'rgba(39, 255, 255, 0.78)',
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          }
        }
      }
    });

    // Creating the humidity chart
    const humidityChart = new Chart(document.getElementById('myChart_2'), {
      type: "line",
      data: {
        labels: cities,
        datasets: [{
          label: "Humidity (%)",
          data: humidities,
          borderColor: "rgba(0, 44, 220, 1)",
          borderWidth: 1,
          fill: false
        }, {
          label: "Wind Speed (km/h)",
          data: windSpeedData,
          borderColor: "rgba(255, 255, 255, 1)",
          borderWidth: 1,
          fill: false
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });