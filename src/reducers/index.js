import { combineReducers } from 'redux';
import RedditFeedReducer from './reddit_reducer';
import HackerFeedReducer from './hacker_news_reducer';
import SpotFeedReducer from './spotify_reducer';
import MedFeedReducer from './medium_reducer';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  redditFeed: RedditFeedReducer,
  hackerFeed: HackerFeedReducer,
  spotFeed: SpotFeedReducer,
  medFeed: MedFeedReducer
});

export default rootReducer;
