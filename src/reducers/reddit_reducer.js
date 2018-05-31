import { FETCH_HOT } from '../actions/reddit_actions';
// import redditActions from '../reddit_actions';


export default function(state = [], action) {
  switch (action.type) {
    case FETCH_HOT:
      return [].concat(action.payload).concat(state);
  }
  return state;
}
