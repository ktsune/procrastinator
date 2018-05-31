// import axios from 'axios';
// // import redditActions from '../reddit_actions';
// export const FETCH_HOT = 'FETCH_HOT';
//
// // const snoowrap = require('snoowrap');
// // const r = new snoowrap({
// //   clientId: 'pknF5jSJpBG8kw',
// //   clientSecret: '9rbBZz74SrV7iXUg4cFTX0gWvwA',
// //   refreshToken: '33797272575-a4G2DF8XfLd32ewO5pydwb7jknk'
// // });
//
// export function fetchHot() {
//
//   const snoowrap = require('snoowrap');
//   const r = new snoowrap({
//     clientId: 'pknF5jSJpBG8kw',
//     clientSecret: '9rbBZz74SrV7iXUg4cFTX0gWvwA',
//     refreshToken: '33797272575-_p05nqOzyJSlzBu1-Ga2RJiFLso'
//   })
//   // const links = {
//   //   r.getSubmission('4j8p6d').expandReplies({limit: Infinity, depth: Infinity}).then(console.log)
//   //   r.getHot().then((articles) => {
//   //     console.log(articles);
//   // }
//
//   return {
//     type: FETCH_HOT,
//     payload: r.getHot()
//       .then((articles) => {
//       return r.getSubmission().expandReplies({limit: Infinity, depth: Infinity}).then((articles) => {console.log(articles)}
//       .then((articles) => {
//       console.log(articles)}
//       }
//     })
//
//     return {
//       type: FETCH_HOT,
//       payload: r.getSubmission().expandReplies({limit: Infinity, depth: Infinity}).then((articles) => {console.log(articles)}
//       }
//         return articles;
//       })
//   }
// }
//
// // const title-comments =
// // return {
// //   type: FETCH_HOT,
// //   payload: r.getHot()
// //     .then((articles) => {
// //     console.log(articles)}
// // }
// //     return articles;
// //   })
//
// // Import all your actions from specific api actions (reddit_actions, hacker_actions)
// // Export all actions from index file
//
// // var reddit_api = {
// //   "refresh_token": "33797272575-a4G2DF8XfLd32ewO5pydwb7jknk",
// // }
//
// // https://www.reddit.com/api/v1/authorize?client_id=pknF5jSJpBG8kw&response_type=code&state=RANDOM_STRING&redirect_uri=http%3A%2F%2Fsarah.lee/redirect&duration=permanent&scope=identity%20edit%2C%20flair%2C%20history%2C%20modconfig%2C%20modflair%2C%20modlog%2C%20modposts%2C%20modwiki%2C%20mysubreddits%2C%20privatemessages%2C%20read%2C%20report%2C%20save%2C%20submit%2C%20subscribe%2C%20vote%2C%20wikiedit%2C%20wikiread
// //
// // http://wasbazi.com/?state=RANDOM_STRING&code=ydqOvFy3--HFFUFKOsl2R7Mlt6s
// //
// // curl -i -X POST "https://www.reddit.com/api/v1/access_token" \
// //   -u pknF5jSJpBG8kw:9rbBZz74SrV7iXUg4cFTX0gWvwA \
// //   -d "grant_type=authorization_code&code=R-D4AeVA61NOQhvJvClNPi0gdxg&redirect_uri=http%3A%2F%2Fsarah.lee/redirect"
// //
