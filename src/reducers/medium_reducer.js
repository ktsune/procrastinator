import { FETCH_MEDFEED } from '../actions/index';
// import redditActions from '../reddit_actions';


export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MEDFEED:
      return [].concat(action.payload).concat(state);
  }
  return state;
}
