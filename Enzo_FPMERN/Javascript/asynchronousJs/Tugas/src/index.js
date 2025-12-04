import { card } from "./generateCard.js";
import { loadNews } from "./newsAPI.js";

const container = document.getElementById("container");
const bar = document.getElementById("search");
const button = document.getElementById("button");

const renderNews = async (keyword = "") => {
    container.innerHTML = `<p class="text-white text-center">Loading...</p>`;

    const news = await loadNews(keyword);

    container.innerHTML = "";

    news.forEach(item => {
        container.innerHTML += card(
            item.image_url,
            item.title,
            item.description,
            item.category?.[0] ?? "",
            item.link
        );
    });
}

renderNews("");

button.addEventListener('click', () => {
    const keyword = bar.value.trim();
    renderNews(keyword);
});
