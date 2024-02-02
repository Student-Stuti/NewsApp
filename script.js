const API_KEY = "41f3787a69f44c0ca146976364b0e5a2";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("India"));

async function fetchNews(query) {
  const res = await fetch(`${url}${query}&apikey=${API_KEY}`);
  const data = await res.json();
  console.log(data);
  bindData(data.articles);
}
function bindData(articles) {
  const cardsContainer = document.getElementById("cards-container");
  const newsCardTemplate = document.getElementById("template-news-card");

  cardsContainer.innerHTML = "";

  articles.forEach((article) => {
    if (!article.urlToImage) return;
    const cardClone = newsCardTemplate.content.cloneNode(true);
    cardsContainer.appendChild(cardClone);
  });
}

function fillDataIncard(cardClone, article) {
  const newsImg = cardClone.queryselector("#news-img");
  const newsTitle = cardClone.queryselector("#news-title");
  const newsSource = cardClone.queryselector("#news-source");
  const newsDesc = cardClone.queryselector("#news-desc");
}
