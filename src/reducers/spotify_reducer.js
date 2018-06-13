import { FETCH_SPOTFEED } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SPOTFEED:
      console.log("PAYLOAD", action.payload)
      return [].concat(action.payload.tracks.items).concat(state);
  }
  return state;
}
