import axios from 'axios';
const ROOT_URL = `https://api.spotify.com/`;

export const FETCH_SPOTFEED = 'FETCH_SPOTFEED';

function retrieveToken() {
  return axios.get("http://localhost:3001/spotify")
          .then((response) => {
            // console.log("retrieveToken", response);
            return response.data.access_token;
          });
}

export function fetchSpotFeed(token) {
  const request = retrieveToken().then((token) => {
    const authHeader = {Authorization: `Bearer ${token}`};
    return axios.get("https://api.spotify.com/v1/albums/6wjryxtrKxzTZID9kyZUV5", {"headers": authHeader});
  });

  return {
    type: FETCH_SPOTFEED,
    payload: request.then((album) => {
        return album.data;
    })
  };
}
