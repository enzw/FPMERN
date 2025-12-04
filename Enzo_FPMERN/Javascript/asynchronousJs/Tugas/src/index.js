import { card } from "./generateCard.js";
import { loadNews } from "./newsAPI.js";

const container = document.getElementById("container");
const bar = document.getElementById("search");
const button = document.getElementById("button");

const renderNews = async (keyword) => {
    
};

renderNews("");

button.addEventListener("click", () => {
    const keyword = bar.value.trim();
});
