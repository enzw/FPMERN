const API_KEY = "pub_cbf9772f9968471b8f8a2ed0f35b9b1e";

const buildURL = (query = "") => {
    let url = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&country=id&language=id,en&category=sports,education,politics,top&image=1`;

    if (query !== "") {
        url += `&q=${query}`;
    }

    return url;
};

const loadNews = async (query = "") => {
    try {
        const res = await fetch(buildURL(query));
        const data = await res.json();
        return data.results;
    } catch (err) {
        console.error(err);
        return [];
    }
};

export { loadNews };
