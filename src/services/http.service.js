const API_KEY = '';
const BASE_URL =
    'https://newsapi.org/v2/everything?q=apple&from=2021-04-27&to=2021-04-27&sortBy=popularity&apiKey=' + API_KEY;

export const getNews = async () => {
    const res = await fetch(BASE_URL);
    const json = await res.json();
    if (json.status === 'ok') {
        const { articles } = json;
        return articles;
    }
    return [];
}
