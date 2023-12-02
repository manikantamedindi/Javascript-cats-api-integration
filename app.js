const apiURL = "https://api.thecatapi.com/v1/";
const imageSearchAPI = "images/search?limit=";
let defaultImages = 5;
const apiKey =
  "live_w7GAshIqDq7ygWT6Qr2GoAYlijzudgFU6swXLqsmt3WyUGa6yt1QhA6IruE7KuVn";
let isLoading = true;
let getSelectedImages = document.getElementById("selectImageFilter");

// Use a function to initialize the application
function initializeApp() {
  getSelectedImages.addEventListener("change", selectedImagesFilter());
}

function selectedImagesFilter() {
  defaultImages = getSelectedImages.value;
  fetchData(imageSearchAPI + defaultImages);
  let filterCountDisplay = document.getElementById("filterCount");
  filterCountDisplay.innerText = `${defaultImages} images selected`;
}

function fetchData(apiSlug) {
  setLoading(true);

  fetch(`${apiURL}${apiSlug}`, {
    headers: { "x-api-key": apiKey },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`API Failure: ${response.status}`);
      }
      setLoading(false);
      return response.json();
    })
    .then((data) => {
      const displayElement = document.querySelector("#randomImages");
      displayElement.innerHTML = ""; // Clear existing content before adding new images
      data.forEach((cat) => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = cat.url;
        const p = document.createElement("p");
        p.innerText = cat.id;
        li.appendChild(img);
        li.appendChild(p);
        displayElement.appendChild(li);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      setLoading(false);
      // You can handle the error in a user-friendly way, e.g., display an error message.
    });
}

function setLoading(isLoading) {
  let loadingElement = document.getElementById("loading");
  loadingElement.style.display = isLoading ? "block" : "none";
}

// Call the initializeApp function to set up the application
initializeApp();
