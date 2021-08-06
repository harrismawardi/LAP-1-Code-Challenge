

let searchButton = document.querySelector("#search");
searchButton.addEventListener('click', goToSearchResults)

function goToSearchResults(e) {
    e.preventDefault()
    let search = document.querySelector('#searchWord').value
    console.log(search)
    let searchFormatted = search.toLowerCase().replace(" ", "-")
    window.location.assign(`http://127.0.0.1:5501/client/searchResult.html?${searchFormatted}`)
}

let randomButton = document.querySelector("#random");
randomButton.addEventListener('click', randomListing)

async function randomListing(e) {
    e.preventDefault();
    clearContent();
    console.log("hi")
    let search = document.querySelector('#searchWord').value
    console.log(search)
    let searchFormatted = search.toLowerCase().replace(" ", "-")
    let listings;
    await fetch(`http://localhost:8000/results/${searchFormatted}`)
        .then(response => response.json())
        .then(results => listings = results)
        .catch(err => console.log(`whoops, ${err}`));
    fetchListing(listings);
}

function fetchListing(listings) {
    //select random search item
    let listItem = listings[Math.floor(Math.random()*10)]
    window.location.href = listItem.url;
}


function clearContent() {
    document.querySelector("#container").textContent = ""
}




function seperateInformation(searchResults) {
    console.log(searchResults)
    for (const listItem of searchResults) {

        let listingContainer = document.createElement("div")
        let url = document.createElement('span')
        url.textContent = listItem.url
        let pageTitle = document.createElement('h3')
        pageTitle.textContent = listItem.pageTitle
        let text = document.createElement('p')
        text.textContent = listItem.text

        listingContainer.appendChild(url)
        listingContainer.appendChild(pageTitle)
        listingContainer.appendChild(text)

        document.querySelector("#container").appendChild(listingContainer)

    }
}


module.exports = {goToSearchResults}