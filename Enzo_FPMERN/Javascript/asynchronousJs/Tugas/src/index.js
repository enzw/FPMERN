import { card } from "./generateCard.js";
import { loadNews } from "./newsAPI.js";
import { buildURL } from "./newsAPI.js";

const container = document.getElementById("container");
const bar = document.getElementById("search");
const button = document.getElementById("button");

container.innerHTML = "Loading..."
button.addEventListener('click', () => {
    const keyword = bar.value.trim();
    if (keyword !== "") {
        buildURL(keyword);
        renderNews();
    }
})

const renderNews = async () => {
    container.innerHTML = `<p class="text-white text-center">Loading...</p>`;

    const news = await loadNews();

    container.innerHTML = "";

    news.forEach(item => {
        container.innerHTML += card(
            item.image_url,
            item.title,
            item.description,
            item.category[0],
            item.link
        );
    });
}

renderNews();