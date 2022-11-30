import axios from 'axios';

export const BASE_URL = 'https://gogoanime2.p.rapidapi.com';

const options = {
  params: {
    type: '1',
    page: '1'
  },
  headers: {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

