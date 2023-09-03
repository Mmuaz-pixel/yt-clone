const CONSTANT_URL = 'https://youtube-v31.p.rapidapi.com'; 
const api = ""; 

const options = {
    method: 'GET',
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': api,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchData = async(url) => {
    const data = await fetch(`${CONSTANT_URL}${url}`, options)
    const result = await data.json();
    return result; 
}
