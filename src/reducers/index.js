import { combineReducers } from 'redux';
import RedditFeedReducer from './reddit_reducer';
import SpotFeedReducer from './spotify_reducer';

const rootReducer = combineReducers({
  redditFeed: RedditFeedReducer,
  spotFeed: SpotFeedReducer,
});

export default rootReducer;
