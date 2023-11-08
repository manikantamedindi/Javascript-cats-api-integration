const apiURL = "https://api.thecatapi.com/v1/images/search?limit=10";
const apiKey =
  "live_w7GAshIqDq7ygWT6Qr2GoAYlijzudgFU6swXLqsmt3WyUGa6yt1QhA6IruE7KuVn";

// fetch API with async and await operations

async function getData() {
  try {
    let response = await fetch(apiURL, { headers: { "x-api-key": apiKey } });
    if (response) {
      let data = await response.json();
      console.log(data);
    } else {
      console.log("No response");
    }
  } catch (e) {
    console.log(e);
  }
}

getData();
