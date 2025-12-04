const API_KEY = "pub_cbf9772f9968471b8f8a2ed0f35b9b1e";
let url = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&country=id&language=id,en&category=sports,education,politics,top&image=1`;
const buildURL = (query) => {
    url += `&q=${query}`;
}

const loadNews = async () => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data.results;
    } catch (err) {
        console.error(err);
        return [];
    }
}

export { loadNews, buildURL };
