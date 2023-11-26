const apiURL = "https://api.thecatapi.com/v1";
let imagesLimit = 5;
const apiKey =
  "live_w7GAshIqDq7ygWT6Qr2GoAYlijzudgFU6swXLqsmt3WyUGa6yt1QhA6IruE7KuVn";
let isLoading = true;
let getSelectedImages = document.getElementById("selectImageFilter");

// Use a function to initialize the application
function initializeApp() {
  getSelectedImages.addEventListener("change", selectedImagesFilter);
  selectedImagesFilter();
}

function selectedImagesFilter() {
  imagesLimit = getSelectedImages.value;
  getData(`/images/search?limit=${imagesLimit}`);
  displayFilterCount();
}

function getData(apiSlug) {
  setLoading(true);
  fetch(`${apiURL}${apiSlug}`, {
    headers: { "x-api-key": apiKey },
  })
    .then(handleResponse)
    .then(displayData)
    .catch(handleError);
}

function handleResponse(response) {
  if (!response.ok) {
    throw new Error(`API Failure: ${response.status}`);
  }
  setLoading(false);
  return response.json();
}

function handleError(error) {
  console.error("Error fetching data:", error);
  setLoading(false);
  // You can handle the error in a user-friendly way, e.g., display an error message.
}

function setLoading(isLoading) {
  let loadingElement = document.getElementById("loading");
  loadingElement.style.display = isLoading ? "block" : "none";
}

function displayData(data) {
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
}

function displayFilterCount() {
  let filterCountDisplay = document.getElementById("filterCount");
  filterCountDisplay.innerText = `${imagesLimit} images selected`;
}

// Call the initializeApp function to set up the application
initializeApp();
