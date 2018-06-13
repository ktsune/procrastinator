import axios from 'axios';
// import redditActions from '../reddit_actions';
export const FETCH_HOT = 'FETCH_HOT';

export function fetchHot() {
  const snoowrap = require('snoowrap');
  const r = new snoowrap({
    clientId: 'pknF5jSJpBG8kw',
    clientSecret: '9rbBZz74SrV7iXUg4cFTX0gWvwA',
    refreshToken: '33797272575-_p05nqOzyJSlzBu1-Ga2RJiFLso'
  })

  const replyOptions = {limit: 2, depth: 2};
  return {
    type: FETCH_HOT,
    payload: r.getHot(["aww"])
    .then((articles) => {
      console.log('in reddit action', articles);
      return articles;
      })
    }
  }
