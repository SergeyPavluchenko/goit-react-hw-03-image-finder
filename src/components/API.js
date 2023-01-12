import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '30720436-88ffd0ded62e0d7b7cde7caf4';

export const fetchPictureHits = async (query, page) => {
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};
