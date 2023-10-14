import { API_KEY } from '../common/constants';

export const getTrending = async (limit = 10) => {
    const response = await fetch(
        'https://api.giphy.com/v1/gifs/trending?api_key=' + API_KEY + '&limit=' + limit);

    return await response.json();
};
