import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchHot } from '../actions';
import RedditFeed from '../components/reddit_feed';
import { fetchHackFeed } from '../actions';
import HackFeed from '../components/hacker_news_feed';
import { fetchSpotFeed} from '../actions';
import SpotFeed from '../components/spotify_feed';
import { fetchMedFeed } from '../actions';
import MedFeed from '../components/medium_feed';

class NewsFeed extends Component {
  constructor(props) {
    super(props);

    this.props.fetchHot();
    // this.props.generateAccessToken();
    // this.props.fetchHackFeed();
    this.props.fetchSpotFeed();
    // this.props.fetchMedFeed();
  }

  renderNewsFeed() {
    let range = (end) => Array.from(Array(end).keys());
    return (
      <div>
        {range(10).map((index) => {
          // console.log(this.props.redditFeed)
          return <div>
            <SpotFeed feed={this.props.spotFeed[0].tracks.items[index]} />
            <RedditFeed item={this.props.redditFeed[index]} />
          </div>
        })}
        <div className='news-feed'></div>
        <section className='detail'/>
      </div>
    )
  }

  renderLoading() {
    return <div> Your data is still loading! </div>
  }

  render() {
    return this.renderNewsFeed();
    while (!this.props.spotFeed) {
      return this.renderLoading()
      }
  }
}

//   render() {
//     return (
//
//       <div>
//         let range = (end) => Array.from(Array(end).keys());
//         range(10).map((index) => {
//         <div>
//           <SpotFeed feed={this.props.spotFeed} />
//           <RedditFeed item={this.props.redditFeed[i]} />
//         </div>
//           })
//         <div className='news-feed'></div>
//         <section className='detail' />
//       </div>
//     )
//   }
// }

{/* for (var i=0; i<10; i++) {
  array[i] = i;
  <SpotFeed item={this.props.spotFeed.tracks.items[i]} />
} */}

function mapStateToProps({ redditFeed, hackerFeed, spotFeed, medFeed }) {
  return { redditFeed, hackerFeed, spotFeed, medFeed };  // { weather} === {weather: weather}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchHot, fetchHackFeed, fetchSpotFeed, fetchMedFeed}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
