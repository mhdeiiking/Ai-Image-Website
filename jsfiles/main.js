const generateButton = document.getElementById("generate-button");
generateButton.addEventListener("click", () => {
    const option = document.getElementById("options").value;
    const prompt = document.getElementById("prompt").value;
    if (option == "option1") {
        anime(prompt)
    } else {
        if (option == "option2") {
            real(prompt)
        } else {
            document.write("Option not exists")
        }
    }
});

function anime(prompt) {
    const imageContainer = document.getElementById("image-container");
    // Send request to API using fetch()
    while (imageContainer.firstChild) {
        imageContainer.removeChild(imageContainer.firstChild);
    }
    fetch(`https://reback.ml/art?prompt=${prompt}`)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.url;
            const imageElement = document.createElement("img");
            imageElement.src = imageUrl;
            imageContainer.appendChild(imageElement);

            // Create a download button
            const downloadButton = document.createElement("a");
            downloadButton.innerHTML = "Download";
            downloadButton.href = imageUrl;
            downloadButton.download = "image.jpg";
            imageContainer.appendChild(downloadButton);
        });
}


function real(prompt) {
    const imageContainer = document.getElementById("image-container");
    // Send request to API using fetch()
    while (imageContainer.firstChild) {
        imageContainer.removeChild(imageContainer.firstChild);
    }
    fetch(`https://reback.ml/dalle-2?prompt=${prompt}`)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.url;
            const imageElement = document.createElement("img");
            imageElement.src = imageUrl;
            imageContainer.appendChild(imageElement);

            // Create a download button
            const downloadButton = document.createElement("a");
            downloadButton.innerHTML = "Download";
            downloadButton.href = imageUrl;
            downloadButton.download = "image.jpg";
            imageContainer.appendChild(downloadButton);
        });
}
