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

//SPOTIFY
// curl -X GET https://accounts.spotify.com/ \
// -u 6dc602b031594e9bac9d71934c8a10f1:69e8d2db92594f149170a8fce0adffa3 \
// -d grant_type=authorization_code -d code=AQBOHQ-lv4InzjCUO8EasIJOGoioCDXD2A1HQoWlQvA9YkTwpjgfaGeUhKvyHvHE1233xaecRa2PZkxnDmggEAkz-OfR3U_8uN0i_2i9qJkM-o0sDWgItt8V6qSsEP3sIpJEtaEGFW-uh6DElREH1nusIaODTGO-P1h3azhr7bEoTW7VrT8RyzkgkVfyZQSzRxFSTMoFk6a7LlYMtEw66XXnpjiG99hMZb3snmIr9O-aAXQdZw3iKMFINXor2MQm1DhTpCsRf-3R9YYulpblzo33LFYNZ1ETnd0zyYoN6iOTa-SLV8d6qNVrJRxnrIoPHIAdgrN47PGexh0-07wrJ6cLXGvmzvkwWF8X03Nb4WF3KXocNcxozaEMAfrUc3_gL_Ymq_HvOdRQgTl1AaFG6WPCFHunE2KmA8kISAal9-ke6qJlCxDaDPmNMro7SntB0xSo6TQ6b77xYpPz03cBsUacTPpMK2UlseM9iKX3XZgAZkQj1WqX0Slf-EZhv2b4XLkqBohcfAblyRa8ZkQAZi7FKEy6crtkHAKPv1D3l_ueqdNtpoB_ADxgS9n2pOwctL5b-RlfZnUx7NnSSwCyQ0TUA0a6wlKhbLXaDnDKSVfRmq1npD9BVKz2IRuG1alLiXWGFuU-WtdjiZN3gQAePPv9qUmMV49Ucyjoib2c322aHJfvkSeFFYm- \
// -d redirect_uri=http://sarahleewebconsulting.com https://accounts.spotify.com/api/token
//
// {
//   "access_token": "BQDUJZI-VHUd19zI42Dc89ZUOfWWQVlHkHMEL-f22UvNibsslzOdIZ-rG9WmR1_skg1R0sn1ZJXGCN-CirPLlgh_JfJ6-qw_tDXCcqHpCfjzKXx5pUcRqdWk1F-mFFm5GHiw5LGYppx5blflnbXZ1zdDzJra8ddUQvcWqp0-wh0XD9YqX34SGNlkwVaCT4VCyR4N__5_sc6Eu2b8E5fOVU_UIp6sq3oLAWjwSSCATaCWhh3_E26ZsYqGTUmowWyAs_zCYk4EA943mg",
//   "token_type": "Bearer",
//   "expires_in": 3600,
//   "refresh_token": "AQBd4nQ1Yx8p-ULYc4ds_RwqGnJgM4SeDC5Naqjqqs1ebiMwr7-c6Pkr5QcxeXyRfJdLBY20N6yLTpt6TfLCNHJMYcfx4oJIfuFXBqqzxznRB9W3SvoMetpGHRjq2JQgZGI",
//   "scope": "playlist-read-private playlist-read-collaborative user-follow-read playlist-modify-private user-read-email user-read-private streaming user-follow-modify user-modify-playback-state user-library-read user-library-modify playlist-modify-public user-read-playback-state user-read-currently-playing user-read-birthdate user-read-recently-played user-top-read"
// }
//
// https://accounts.spotify.com/authorize?client_id=6dc602b031594e9bac9d71934c8a10f1&redirect_uri=http://sarahleewebconsulting.com&response_type=code&scope=playlist-modify-private%20playlist-read-private%20playlist-modify-public%20playlist-read-collaborative%20user-follow-read%20user-follow-modify%20user-read-private%20user-read-email%20user-read-birthdate%20user-top-read%20user-read-recently-played%20user-library-modify%20user-library-read%20user-read-playback-state%20user-read-currently-playing%20user-modify-playback-state%20streaming
//
// const ROOT_URL = `https://api.spotify.com/`;
//
// export const FETCH_SPOTFEED = 'FETCH_SPOTFEED';
//
// export function fetchSpotFeed() {
//   const token = "BQBL3K-fQJ2CzC8-whgTquRylOWj6wl9UCfisBZwILha8dS6CQjlvy3FmbNNuYWBKISzN675Qth5p9fYcPI";
//   const authHeader = {Authorization: `Bearer ${token}`};
//   const request = axios.get("https://api.spotify.com/v1/browse/categories", {"headers": authHeader});
//   // debugger;
//   return {
//     type: FETCH_SPOTFEED,
//     payload: request.then((categories) => {
//         // console.log(categories)
//         return categories
//     })
//   };
// }

// curl -X POST https://accounts.spotify.com/api/token \
// -u 6dc602b031594e9bac9d71934c8a10f1:69e8d2db92594f149170a8fce0adffa3 \
// -d grant_type=client_credentials | jq
// // -d refresh_token=AQBd4nQ1Yx8p-ULYc4ds_RwqGnJgM4SeDC5Naqjqqs1ebiMwr7-c6Pkr5QcxeXyRfJdLBY20N6yLTpt6TfLCNHJMYcfx4oJIfuFXBqqzxznRB9W3SvoMetpGHRjq2JQgZGI \
//
// BQDSk2PLphT3l0PqZoF-6rQlsT8n4r2FrAKHjtYCOUMUDvpjdxYMFoB5zzDvbVSSqlw7rjgDJ_qBkPUii3U

///////////////////////////////////
