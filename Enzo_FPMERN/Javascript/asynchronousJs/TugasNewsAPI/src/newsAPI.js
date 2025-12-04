const API_KEY = "pub_f1c45c02e04d4a7fad432782f26d00fa";

const query = (value = "") => {
    return value ? `&q=${value}` : "";
};

const getData = async (value = "") => {
    const url = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&country=id${query(value)}&image=1`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err.message);
        return [];
    }
};

export { getData };
