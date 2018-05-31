import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchHot } from '../actions';
import RedditFeed from '../components/reddit_feed';
import { fetchHackFeed } from '../actions';
import HackFeed from '../components/hacker_news_feed';
import { fetchSpotFeed } from '../actions';
import SpotFeed from '../components/spotify_feed';
import { fetchMedFeed } from '../actions';
import MedFeed from '../components/medium_feed';

class NewsFeed extends Component {
  constructor(props) {
    super(props);

    // this.props.fetchHot();
    // this.props.fetchHackFeed();
    this.props.fetchSpotFeed();
    // this.props.fetchMedFeed();
  }

  render() {
    return (
      <div>
        <div className='news-feed'>
          <RedditFeed feed={this.props.redditFeed} />
          <SpotFeed feed={this.props.spotFeed} />
        </div>
        <section className='detail' />
      </div>
    )
  }
}

function mapStateToProps({ redditFeed, hackerFeed, spotFeed, medFeed }) {
  return { redditFeed, hackerFeed, spotFeed, medFeed };  // { weather} === {weather: weather}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchHot, fetchHackFeed, fetchSpotFeed, fetchMedFeed }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
