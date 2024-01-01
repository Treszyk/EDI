const data_tab = document.querySelector('#Data');
const data_table = document.querySelector('#Data table');
const loader_anim = document.querySelector('#Data #loader');
const load_into_html = (data) => {
    //gettings the keys of the api data
    keys = Object.keys(data[0]);

    //creating the header row
    data_table.innerHTML = `<tr><th>${keys[0]}</th><th>${keys[1]}</th><th>${keys[2]}</th><th>${keys[3]}</th><th>${keys[4]}</th><th>${keys[5]}</th><th>${keys[6]}</th><th>${keys[7]}</th></tr>`
    
    //displaying data on the wesbite
    data.forEach(row => {
        //creating table rows
        let table_row = document.createElement('tr');
        table_row.innerHTML += `<td>${row['city']}</td><td>${row['date']}</td><td>${row['temperature']}</td><td>${row['humidity']}</td><td>${row['wind_speed']}</td><td>${row['weather_condition']}</td><td>${row['sunrise_time']}</td><td>${row['sunset_time']}</td>`;
        data_table.appendChild(table_row);
    });

    loader_anim.style.display = 'none';
}

//fetching the data from mockaroo api only 200 requests a day
//const rows = fetch('https://my.api.mockaroo.com/pogoda.json?key=b3f3e0f0').then(res => res.json()).then(res => {
//    load_into_html(res);
//})
