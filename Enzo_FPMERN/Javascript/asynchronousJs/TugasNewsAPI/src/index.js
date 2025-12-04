import { getData } from "./newsAPI.js";
import { card } from "./generateCard.js";

const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const newsContainer = document.getElementById("news");
const txt = document.getElementById("text");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const value = input.value.trim();
    txt.innerText = `Hasil Pencarian: ${value || "Semua"}`;

    await loadNews(value);
});

const loadNews = async (value = "") => {
    try {
        const data = await getData(value);
        const berita = data.results || [];

        newsContainer.innerHTML = "";

        if(berita.length == 0){
            txt.innerHTML = "Gada bang :'("
        }

        berita.forEach((b) => {
            card(
                b.image_url,
                b.title,
                b.pubDate,
                b.category[0],
                b.description
            );
        });
    } catch (err) {
        txt.innerText = err.message;
    }
};

loadNews();
