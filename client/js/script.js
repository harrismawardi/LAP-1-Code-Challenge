//searchbutton
document.querySelector("#search").addEventListener('click', goToSearchResults);
//randombutton
document.querySelector("#random").addEventListener('click', randomPage);

function goToSearchResults(e) {
    e.preventDefault()
    let search = document.querySelector('#searchWord').value
    let searchFormatted = search.toLowerCase().replace(/\s/g, "-")
    window.location.assign(`http://127.0.0.1:5501/client/searchResult.html?${searchFormatted}`)
}

async function randomPage(e) {
    e.preventDefault();
    let search = document.querySelector('#searchWord').value;
    let searchFormatted = search.toLowerCase().replace(/\s+/g, "-");
    await fetch(`http://localhost:8000/results/${searchFormatted}`)
        .then(response => response.json())
        .then(results => randomListing(results))
        .catch(err => console.log(`whoops, ${err}`));   
}

function randomListing(listings) {
    let listItem = listings[Math.floor(Math.random()*10)]
    window.location.href = listItem.url;
}
