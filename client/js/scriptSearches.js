window.addEventListener('load', getResults)
document.querySelector('#search').addEventListener('click', goToSearchResults)

async function getResults(e) {
    e.preventDefault();
    clearContent();
    let search = window.location.search
    let searchFormatted = search.slice(1)
    let listings
    await fetch(`http://localhost:8000/results/${searchFormatted}`)
        .then(response => response.json())
        .then(results => listings = results)
        .catch(err => console.log(`whoops, ${err}`));
    seperateInformation(listings)
}

function goToSearchResults(e) {
    e.preventDefault();
    let search = document.querySelector('#searchWord').value
    let searchFormatted = search.toLowerCase().replace(/\s+/g, "-")
    window.location.assign(`http://127.0.0.1:5501/client/searchResult.html?${searchFormatted}`)
}

function clearContent() {
    document.querySelector("#container").textContent = ""
}

function seperateInformation(searchResults) {
    console.log(searchResults)
    for (const listItem of searchResults) {

        let listingContainer = document.createElement("article")
        let url = document.createElement('a')
        url.textContent = listItem.url
        url.setAttribute("href", listItem.url)
        url.setAttribute("class", "resultLink")
        let pageTitle = document.createElement('a')
        let title = document.createElement('h1')
        title.textContent = listItem.pageTitle
        pageTitle.setAttribute("class", "resultTitle")
        pageTitle.setAttribute("href", listItem.url)
        let text = document.createElement('p')
        text.textContent = listItem.text
        text.setAttribute("class", "resultText")

        pageTitle.appendChild(title)

        listingContainer.appendChild(url)
        listingContainer.appendChild(pageTitle)
        listingContainer.appendChild(text)

        document.querySelector("#container").appendChild(listingContainer)

    }
}