import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchHot } from '../actions';
import RedditFeed from '../components/reddit_feed';
import { fetchSpotFeed} from '../actions';
import SpotFeed from '../components/spotify_feed';

class NewsFeed extends Component {
  constructor(props) {
    super(props);

    this.props.fetchHot();
    this.props.fetchSpotFeed();
  }

  renderNewsFeed() {
    let range = (end) => Array.from(Array(end).keys());
    return (
      <div>
        {range(10).map((index) => {
          return <div>
            <SpotFeed feed={this.props.spotFeed[index]} />
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
    if (this.props.spotFeed.length > 0 && this.props.redditFeed.length > 0) {
      return this.renderNewsFeed();
    } else {
      return this.renderLoading();
    }
  }
}

function mapStateToProps({ redditFeed, spotFeed }) {
  return { redditFeed, spotFeed };  // { weather} === {weather: weather}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchHot, fetchSpotFeed}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
