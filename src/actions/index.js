import axios from 'axios';
export * from './spotify_actions';
// export * from './reddit_actions';

///////////////////////////////////

//hackernews ==> CORS error
// const API_KEY = '9ea15f3cbea8665f8b5d233175ab7e76';
// const ROOT_URL = `https://hacker-news.firebaseio.com/`;
//
// export const FETCH_HACKFEED = 'FETCH_HACKFEED';
//
// export function fetchHackFeed() {
//   const url = `${ROOT_URL}+v0/item/<id>`;
//   const request = axios.get("https://hacker-news.firebaseio.com/v0/item/<id>");
//   console.log(request)
//
//   return {
//     type: FETCH_HACKFEED,
//     payload: request
//   };
// }

//////////////////////////////////////

// medium
// curl -X POST api.medium.com/v1/tokens \
// -d code=2a074a49dc7e&client_id=1324ca9a5ddc&client_secret=eaab0ae0a1edae3f241c437bb69086a9fa4063fb&grant_type=authorization_code&redirect_uri=http://sarahleewebconsulting.com

// const API_KEY = '9ea15f3cbea8665f8b5d233175ab7e76';
// const ROOT_URL = `https://hacker-news.firebaseio.com/`;

// export const FETCH_MEDFEED = 'FETCH_MEDFEED';
//
//   // GET /v1/me HTTP/1.1 Host: api.medium.com Authorization: Bearer 2bd3def9378b2a365198e6b7b05ed4a8cc03ee183f1330c275499ed00cf526441 Content-Type: application/json Accept: application/json Accept-Charset: utf-8
//   // const url = `${ROOT_URL}+v0/item/<id>`;
// export function fetchMedFeed() {
//   const request = axios.get("https://api.medium.com/v1/basicProfile");
//   console.log(request)
//
//   return {
//     type: FETCH_MEDFEED,
//     payload: request
//   };
// }

// {
//   "token_type":"Bearer",
//   "access_token":"2bd3def9378b2a365198e6b7b05ed4a8cc03ee183f1330c275499ed00cf526441","refresh_token":"20457838c04201577072bc801d28e0f3e9d9ce783ed47cba8169fcae10a57cf14",
//   "scope":["basicProfile","publishPost"],
//   "expires_at":1531022310427
// }

// https://medium.com/m/oauth/authorize?client_id=1324ca9a5ddc&scope=basicProfile,publishPost&state=state&response_type=code&redirect_uri=http://sarahleewebconsulting.com
///////////////////////////////////


// Import all your actions from specific api actions (reddit_actions, hacker_actions)
// Export all actions from index file

// var reddit_api = {
//   "refresh_token": "33797272575-a4G2DF8XfLd32ewO5pydwb7jknk",
// }

// https://www.reddit.com/api/v1/authorize?client_id=pknF5jSJpBG8kw&response_type=code&state=RANDOM_STRING&redirect_uri=http%3A%2F%2Fsarah.lee/redirect&duration=permanent&scope=identity%20edit%2C%20flair%2C%20history%2C%20modconfig%2C%20modflair%2C%20modlog%2C%20modposts%2C%20modwiki%2C%20mysubreddits%2C%20privatemessages%2C%20read%2C%20report%2C%20save%2C%20submit%2C%20subscribe%2C%20vote%2C%20wikiedit%2C%20wikiread
//
// http://wasbazi.com/?state=RANDOM_STRING&code=ydqOvFy3--HFFUFKOsl2R7Mlt6s
//
// curl -i -X POST "https://www.reddit.com/api/v1/access_token" \
//   -u pknF5jSJpBG8kw:9rbBZz74SrV7iXUg4cFTX0gWvwA \
//   -d "grant_type=authorization_code&code=R-D4AeVA61NOQhvJvClNPi0gdxg&redirect_uri=http%3A%2F%2Fsarah.lee/redirect"
//
