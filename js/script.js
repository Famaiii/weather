let links = ["https://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f&units=metric",
    "https://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f&units=metric",
    "https://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f&units=metric"
];

// let linksDays = ["https://api.openweathermap.org/data/2.5/forecast?q=london&appid=a5a5ec5e9affbabd45cb9a55abf61317",
// 'https://api.openweathermap.org/data/2.5/forecast?q=kyiv&appid=a5a5ec5e9affbabd45cb9a55abf61317',
// 'https://api.openweathermap.org/data/2.5/forecast?q=new%20york&appid=a5a5ec5e9affbabd45cb9a55abf61317'
// ];


let form = document.forms[0];


let button = document.querySelector(".button").addEventListener('click', function () {

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${form.elements.url.value}&appid=a5a5ec5e9affbabd45cb9a55abf61317&units=metric`;
    let newArray = [];
    newArray.push(url);
    console.log(newArray);
    fetchData(newArray);
    // console.log(url);
})

let celButton = document.querySelector('.cel-button');
let farButton = document.querySelector('.far-button');

function fetchData(links) {
    let promiseArray = [];
    for (let i = 0; i < links.length; i++) {
        promiseArray.push(fetch(links[i])
            .then(response => response.json()));
    }
    return Promise.all(promiseArray).then(response => {
        for (let i = 0; i < promiseArray.length; i++) {
            let weather = new Weather(response[i]);
            weather.fillElements();
            weather.createElements();
            // console.log(response[i])
            // console.log([i])

            farButton.addEventListener('click', function () {
                weather.fahrenheit();
            });


            celButton.addEventListener('click', function () {
                weather.celsius();
            });

        }
    })
}


class Weather {
    constructor(data) {
        this.data = data;
        this.mainContainer = document.querySelector('.main-container');
        this.mainContainerContent = document.createElement('div');
        this.contentCity = document.createElement('div');
        this.contentDgr = document.createElement('div');
        this.contentImg = document.createElement('div');
        this.mainContainerArrow = document.createElement('div');
        this.ExtraInfoContainer = document.createElement('div');
        this.speed = document.createElement('div');
        this.direction = document.createElement('div');
        this.pressure = document.createElement('div');
        this.sunrice = document.createElement('div');
        this.sunset = document.createElement('div');
        this.speedText = document.createElement('div');
        this.speedNumber = document.createElement('div');
        this.directionText = document.createElement('div');
        this.directionNumber = document.createElement('div');
        this.pressureText = document.createElement('div');
        this.pressureNumber = document.createElement('div');
        this.sunriceText = document.createElement('div');
        this.sunriceNumber = document.createElement('div');
        this.sunsetText = document.createElement('div');
        this.sunsetNumber = document.createElement('div');
        this.rotateArrow = document.createElement('i');
        this.footer = document.querySelector('.footer');
// ------------------------------
        // this.squad = document.createElement('div');
// --------------------------------------------
        // this.table = document.createElement('table');
        // this.thead = document.createElement('thead');
        // this.th_1 = document.createElement('th');
        // this.th_2 = document.createElement('th');
        // this.th_3 = document.createElement('th');
        // this.th_4 = document.createElement('th');
        // this.th_5 = document.createElement('th');
        // this.tbody = document.createElement('tbody');
        // this.td_1 = document.createElement('td');
        // this.td_2 = document.createElement('td');
        // this.td_3 = document.createElement('td');
        // this.td_4 = document.createElement('td');
        // this.td_5 = document.createElement('td');

    }

    createElements() {
        let ExtraInfoContainer = this.ExtraInfoContainer;
        let mainContainerArrow = this.mainContainerArrow;
        this.mainContainerArrow.addEventListener('click', function () {
            mainContainerArrow.classList.toggle('arr_rotate');
            ExtraInfoContainer.classList.toggle('extra-info-hide');
            ExtraInfoContainer.classList.toggle('main-container__extra-info');
            console.log(ExtraInfoContainer);
        })

        this.mainContainerContent.classList.add('main-container__content');
        this.contentCity.classList.add('content__city');
        this.contentDgr.classList.add('content__dgr');
        this.contentImg.classList.add('content__img');
        this.mainContainerArrow.classList.add('main-container__arrow');
        // this.ExtraInfoContainer.classList.add('main-container__extra-info');
        this.ExtraInfoContainer.classList.add('extra-info-hide');
        this.speed.classList.add('extra-info__item');
        this.direction.classList.add('extra-info__item');
        this.pressure.classList.add('extra-info__item');
        this.sunrice.classList.add('extra-info__item');
        this.sunset.classList.add('extra-info__item');

        this.rotateArrow.classList.add('fa-solid');
        this.rotateArrow.classList.add('fa-arrow-up');
        this.rotateArrow.classList.add('rotate__dgr');


// ----------------------------------------
        // this.table.classList.add('squad');
        // this.mainContainerContent.append(this.table);
// ------------------------------------------
        // this.thead.append(this.th_1);
        // this.thead.append(this.th_2);
        // this.thead.append(this.th_3);
        // this.thead.append(this.th_4);
        // this.thead.append(this.th_5);

        // this.th_1.append('dsds')
        // this.th_2.append('dsds')
        // this.th_3.append('dsds')
        // this.th_4.append('dsds')
        // this.th_5.append('dsds')

        // this.tbody.append(this.td_1);
        // this.tbody.append(this.td_2);
        // this.tbody.append(this.td_3);
        // this.tbody.append(this.td_4);
        // this.tbody.append(this.td_5);

        // this.table.append(this.thead);
        // this.table.append(this.tbody);
// ----------------------------------------------------


        this.mainContainerContent.append(this.contentCity);
        this.mainContainerContent.append(this.contentDgr);
        this.mainContainerContent.append(this.contentImg);



        this.ExtraInfoContainer.append(this.speed);
        this.ExtraInfoContainer.append(this.direction);
        this.ExtraInfoContainer.append(this.pressure);
        this.ExtraInfoContainer.append(this.sunrice);
        this.ExtraInfoContainer.append(this.sunset);

        this.directionNumber.append(this.rotateArrow);

        this.speed.append(this.speedText);
        this.speed.append(this.speedNumber);

        this.direction.append(this.directionText);
        this.direction.append(this.directionNumber);

        this.pressure.append(this.pressureText);
        this.pressure.append(this.pressureNumber);

        this.sunrice.append(this.sunriceText);
        this.sunrice.append(this.sunriceNumber);

        this.sunset.append(this.sunsetText);
        this.sunset.append(this.sunsetNumber);


        // this.mainContainer.append(this.mainContainerContent);
        // this.mainContainer.append(this.mainContainerArrow);
        // this.mainContainer.append(this.ExtraInfoContainer);

        this.footer.before(this.mainContainerContent);
        this.footer.before(this.mainContainerArrow);
        this.footer.before(this.ExtraInfoContainer);
    }

    fillElements() {

        this.contentCity.innerHTML = this.data.name;

        this.contentDgr.innerHTML = `${Math.round(this.data.main.temp)}&degC <div>${this.data.weather[0].description}</div>`;
        this.contentImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${this.data.weather[0]['icon']}@2x.png" ></img>`;

        this.mainContainerArrow.innerHTML = `<i class="fa-solid fa-angle-up"></i>`;

        this.speedText.textContent = "W.speed";
        this.speedNumber.textContent = this.data.wind.speed + 'm/s';

        this.directionText.textContent = "W.direction";
        this.rotateArrow.style.transform = `rotate(${this.data.wind.deg}deg)`;

        this.pressureText.textContent = "Pressure";
        this.pressureNumber.textContent = this.data.main.pressure;

        this.sunriceText.textContent = "Sunrice";
        this.sunriceNumber.textContent = this.convertTime(this.data.sys.sunrise, this.data.timezone);

        this.sunsetText.textContent = "Sunset";
        this.sunsetNumber.textContent = this.convertTime(this.data.sys.sunset, this.data.timezone);
        // console.log(this.data);

    }

    //------------Конвертируем время-----------------------------------------------------------------------------------------------------------------
    convertTime(unixTime, timeZone) {
        let datesr = new Date((unixTime + timeZone) * 1000);
        datesr = datesr.getUTCHours() + ":" + datesr.getMinutes();
        return datesr;
    }

    celsius() {
        this.contentDgr.innerHTML = `${Math.round(this.data.main.temp)}&degC <div>${this.data.weather[0].description}</div>`;
    }

    fahrenheit() {
        this.contentDgr.innerHTML = `${Math.round(this.data.main.temp * 9/5) + 32}&degF <div>${this.data.weather[0].description}</div>`;
    }
}

fetchData(links);
let rty = new Weather;
// rty.fahrenheit();
// rty.createElements();
// rty.createElements();
// rty.createElements();
// rty.createElements();
// console.log(rty.convertTime(1660358588,10800))   