const apiURL = "https://api.thecatapi.com/v1/images/search?limit=10";
const apiKey =
  "live_w7GAshIqDq7ygWT6Qr2GoAYlijzudgFU6swXLqsmt3WyUGa6yt1QhA6IruE7KuVn";
let loadingElement = document.getElementById("loading");
let isLoading = true;

async function getData() {
  try {
    const response = await fetch(apiURL, { headers: { "x-api-key": apiKey } });
    if (response.ok) {
      setLoading(false);
      const data = await response.json();
      displayData(data);
    } else {
      console.log("API Failure: " + response.status);
    }
  } catch (err) {
    console.error("Error fetching data:", err);
  }
}

function setLoading(isLoading) {
  loadingElement.style.display = isLoading ? "block" : "none";
}

function displayData(data) {
  const displayElement = document.querySelector("#app ul");
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

// calling this function
getData();
