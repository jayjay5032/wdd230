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
    let services_headline = document.createElement('h4');
    let services_div = document.createElement('div');
    let session_schedule_headline = document.createElement('h4');
    let session_schedule_div = document.createElement('div');
    let closure_schedule_headline = document.createElement('h4');
    let closure_schedule_div = document.createElement('div');
    let milestone_headline = document.createElement('h4');
    let milestone_div = document.createElement('div');
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    img.setAttribute('src', busniess.imageurl);
    img.setAttribute('alt', `logo of ${busniess.name}`);
    img.setAttribute('loading', 'lazy');
    // name, address and url of the busniess
    name.textContent = `${busniess.name}`;
    address.textContent = `${busniess.address}`;
    phone.textContent = `${busniess.phone}`;
    services_headline.textContent = `Service`;
    var i = 0;
    Object.keys(busniess.services).forEach(v => {
        eval("services_text"+ i +" = document.createElement('p')");
        eval("services_text"+ i +".textContent = busniess.services[v]");
        eval("services_div.appendChild(services_text"+ i +")")
        i++;
    })
    session_schedule_headline.textContent = `Opening Hours`
    i = 0;
    Object.keys(busniess.session_schedule).forEach(v => {
        eval("session_schedule_text"+ i +" = document.createElement('p')");
        eval("session_schedule_text"+ i +".textContent = busniess.session_schedule[v]");
        eval("session_schedule_div.appendChild(session_schedule_text"+ i +")")
        i++;
    })
    closure_schedule_headline.textContent = `Closure Schedule`;
    i = 0;
    Object.keys(busniess.closure_schedule).forEach(v => {
        eval("closure_schedule_text"+ i +" = document.createElement('p')");
        eval("closure_schedule_text"+ i +".textContent = busniess.closure_schedule[v]");
        eval("closure_schedule_div.appendChild(closure_schedule_text"+ i +")")
        i++;
    })
    milestone_headline.textContent = `Milestone`;
    i = 0;
    Object.keys(busniess.milestone).forEach(v => {
        eval("milestone_text"+ i +" = document.createElement('p')");
        eval("milestone_text"+ i +".textContent = busniess.milestone[v]");
        eval("milestone_div.appendChild(milestone_text"+ i +")")
        i++;
    })
    url.setAttribute('onclick', `window.location='${busniess.url}';`);
    url.setAttribute('class', 'btn');
    var linkText = document.createTextNode("Learn More");
    url.appendChild(linkText);
    // Add/append the section(card) with the h2 element
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(services_headline);
    card.appendChild(services_div);
    card.appendChild(session_schedule_headline);
    card.appendChild(session_schedule_div);
    card.appendChild(closure_schedule_headline);
    card.appendChild(closure_schedule_div);
    card.appendChild(milestone_headline);
    card.appendChild(milestone_div);
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