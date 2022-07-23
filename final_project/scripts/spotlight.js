const requestURL = 'scripts/data.json';
let cards = document.querySelector('.cards');
let count = 0;
let results = [];

function displayMembers(busniess) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let img = document.createElement('img');
    let url = document.createElement('button');
    let name = document.createElement('h3');
    let address = document.createElement('p');
    let phone = document.createElement('p');

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    img.setAttribute('src', busniess.imageurl);
    img.setAttribute('alt', `logo of ${busniess.name}`);
    img.setAttribute('loading', 'lazy');
    
    // name, address and url of the busniess
    name.textContent = `${busniess.name}`;
    address.textContent = `${busniess.address}`;
    phone.textContent = `${busniess.phone}`;
    url.setAttribute('onclick', `window.location='${busniess.url}';`);
    url.setAttribute('class', 'btn');
    var linkText = document.createTextNode("Learn More");
    url.appendChild(linkText);

    // Add/append the section(card) with the h2 element
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(url);
    card.setAttribute("id", `hide`);

    if (count == 4) {
        return
    } 
    else if (count <= 3) {
          results[count] = cards.appendChild(card);
          count = count + 1;
    }; 
}

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const members = jsonObject['busniess'];
    members.forEach(displayMembers);

    var randomItem = results[Math.floor(Math.random()*[results.length-1])];
    randomItem.setAttribute("id", "show");
    var randomItem2 = results[Math.floor(Math.random()*[results.length-1])];
    while(randomItem == randomItem2) {
        var randomItem2 = results[Math.floor(Math.random()*[results.length-1])];
    };
    randomItem2.setAttribute("id", "show");
    var randomItem3 = results[Math.floor(Math.random()*[results.length-1])];
    while(randomItem3 == randomItem2 || randomItem3 == randomItem) {
        var randomItem3 = results[Math.floor(Math.random()*[results.length-1])];
    };
    randomItem3.setAttribute("id", "mid_only");
});
