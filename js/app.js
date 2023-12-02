const apiURL = "https://api.thecatapi.com/v1";
const apiKey =
  "live_w7GAshIqDq7ygWT6Qr2GoAYlijzudgFU6swXLqsmt3WyUGa6yt1QhA6IruE7KuVn";
let apiSlug = "/images/search?limit=";
//
let defaultCount = 5;
let getDisplayElement = document.getElementById("randomImages");

getData();

async function getData(apiSLug) {
  let data = await fetch(apiURL, { headers: { "x-api-key": apiKey } });
  console.log(data);
}
