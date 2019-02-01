import { token } from '../../token.js';
export const API_URL = `https://api.giphy.com/v1/gifs`;
export const SORT_OPT = 'gameover&rating=G';

//https://api.giphy.com/v1/gifs/random?api_key=&tag=gameover&rating=G

const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`Error in the water! ${response.status}`);
    return;
  }
  return response.json();
}

export const getData = url => {
  return fetch(`${url}/random?${token}=&tag=${SORT_OPT}`)
    .then(checkResponse)
    .catch(err => {
      throw new Error(`fetch getUserData failed ${err}`)
    })
}
