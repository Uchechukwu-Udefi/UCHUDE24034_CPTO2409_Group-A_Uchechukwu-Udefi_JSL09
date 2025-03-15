// Get a random image from Unsplash and set it as the background image of the body
// The image is fetched using the Unsplash API

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.body.style.backgroundImage = `url(${data.urls.full})`;
        document.getElementById("author").textContent = `By: ${data.user.name}`;
    })
    .catch(error => {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1565118531796-763e5082d113)`;
        document.getElementById("author").textContent = `By: Nikola Majksner`;
    })

// Get current cryptocurrency coin data from the CoinGecko API
// The data is fetched using the CoinGecko API
fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(response => {
        if(!response.ok)
        throw Error("Request failed");
        return response.json();
    })
    .then(data => {
        document.getElementById("crypto-title").innerHTML = `
            <img src=${data.image.small}/>
            <span>${data.name}</span>
        `;
        document.getElementById("crypto-info").innerHTML += `
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>📈: $${data.market_data.high_24h.usd}</p>
            <p>📉: $${data.market_data.low_24h.usd}</p>
        `;
        
    });
    





































































