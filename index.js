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
    





































































