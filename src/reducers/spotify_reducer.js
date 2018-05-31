import { FETCH_SPOTFEED } from '../actions/spotify_actions';
// import redditActions from '../reddit_actions';


export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SPOTFEED:
    console.log("PAYLOAD", action.payload)
    return [].concat(action.payload).concat(state);
  }
  return state;
}
