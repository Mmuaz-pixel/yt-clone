const CONSTANT_URL = 'https://youtube-v31.p.rapidapi.com'; 

const apis = ['46f6d67d0fmshb031d0781f4a43bp15b18cjsne9c1d15ab5e4', '9cc91d7742mshe015120a23ac8b4p13e8d7jsn4a1d23de0b00']

// Generate a random floating-point number between 0 (inclusive) and 1 (exclusive)
const randomFloat = Math.random();
console.log("Random Float:", randomFloat);

// Generate a random integer between min (inclusive) and max (exclusive)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const min = 0; 
const max = 2; 
const randomInt = getRandomInt(min, max);

const options = {
    method: 'GET',
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': apis[randomInt],
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchData = async(url) => {
    const data = await fetch(`${CONSTANT_URL}${url}`, options)
    const result = await data.json();
    return result; 
}