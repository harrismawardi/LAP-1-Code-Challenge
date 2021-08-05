

let form = document.querySelector("form");
form.addEventListener('submit',

    async (e) => {
        e.preventDefault()
        //document.location = "http://127.0.0.1:5500/client/searchResult.html";
        console.log(e)
        clearContent();
        let search = e.target.searchWord.value
        console.log(search)
        let searchFormatted = search.toLowerCase().replace(" ", "-")
        let listings;
        await fetch(`http://localhost:8000/results/${searchFormatted}`)
            .then(response => response.json())
            .then(results => listings = results)
            .catch(err => console.log(`whoops, ${err}`));
        seperateInformation(listings)

        // document.querySelector("#text").textContent = JSON.stringify(listings)
    })


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


// module.exports = {getListings}