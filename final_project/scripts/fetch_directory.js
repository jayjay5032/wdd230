const requestURL = 'scripts/data.json';
const grid = document.querySelector('.grid');

function displaybusniess(busniess) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let img = document.createElement('img');
    let url = document.createElement('button');
    let name = document.createElement('h3');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let services = document.createElement('h4');
    let service_div = document.createElement('div');
    let service1 = document.createElement('p');
    let service2 = document.createElement('p');
    let service3 = document.createElement('p');
    let service4 = document.createElement('p');
    let session_schedule = document.createElement('h4');
    let session_schedule_div = document.createElement('div');
    let session_schedule0 = document.createElement('p');
    let session_schedule1 = document.createElement('p');
    let session_schedule2 = document.createElement('p');
    let session_schedule3 = document.createElement('p');
    let session_schedule4 = document.createElement('p');
    let session_schedule5 = document.createElement('p');
    let session_schedule6 = document.createElement('p');
    let closure_schedule = document.createElement('h4');


    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    img.setAttribute('src', busniess.imageurl);
    img.setAttribute('alt', `logo of ${busniess.name}`);
    img.setAttribute('loading', 'lazy');
    
    // name, address and url of the busniess
    name.textContent = `${busniess.name}`;
    address.textContent = `${busniess.address}`;
    phone.textContent = `${busniess.phone}`;
    services.textContent = `Service`;
    service1.textContent = `${busniess.services.one}`;
    service2.textContent = `${busniess.services.two}`;
    service3.textContent = `${busniess.services.three}`;
    service4.textContent = `${busniess.services.four}`;
    service_div.setAttribute('class', 'service_div');
    service_div.appendChild(service1);
    service_div.appendChild(service2);
    service_div.appendChild(service3);
    service_div.appendChild(service4);
    session_schedule.textContent = `Opening Hours`
    session_schedule0.textContent =`${busniess.session_schedule.zero}`;
    session_schedule1.textContent =`${busniess.session_schedule.one}`;
    session_schedule2.textContent =`${busniess.session_schedule.two}`;
    session_schedule3.textContent =`${busniess.session_schedule.three}`;
    session_schedule4.textContent =`${busniess.session_schedule.four}`;
    session_schedule5.textContent =`${busniess.session_schedule.five}`;
    session_schedule6.textContent =`${busniess.session_schedule.six}`;
    session_schedule_div.setAttribute('class', 'service_div');
    session_schedule_div.appendChild(session_schedule0);
    session_schedule_div.appendChild(session_schedule1);
    session_schedule_div.appendChild(session_schedule2);
    session_schedule_div.appendChild(session_schedule3);
    session_schedule_div.appendChild(session_schedule4);
    session_schedule_div.appendChild(session_schedule5);
    session_schedule_div.appendChild(session_schedule6);





    url.setAttribute('onclick', `window.location='${busniess.url}';`);
    url.setAttribute('class', 'btn');
    var linkText = document.createTextNode("Learn More");
    url.appendChild(linkText);

    // Add/append the section(card) with the h2 element
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(services);
    card.appendChild(service_div);
    card.appendChild(session_schedule);
    card.appendChild(session_schedule_div);
    card.appendChild(url);

    // Add/append the existing HTML div with the cards class with the section(card)
    grid.appendChild(card);
    
}

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    
    .then(function (jsonObject) {
        const busniess = jsonObject['busniess'];
        busniess.forEach(displaybusniess);
    });