import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

class SpotFeed extends Component {
  constructor(props) {
    super(props);
  }

  titleToLink() {
   //  const titleToLink = this.props.feed.album.data.tracks.items.reduce(function(memo, item) {
   //  memo[item.name] = item.external_urls.spotify;
   //   return memo;
   // }, {});
  }
  createTrackItem = (track) => {
    return (
      <li riot-tag="spotify" className="spot-item">
        <a className="link" href={track.uri}>
          {track.name}
        </a>
      </li>)
  }

  createAlbum = (albums) => {
    return (
      <div>
        <ul className="spot-list">
        {albums.tracks.items.map(this.createTrackItem)}
        </ul>
      </div>)
}

  render() {
    return (
      <div>
        {this.props.feed.map(this.createAlbum)}
      </div>)
  }
}

export default SpotFeed;

// GET https://hacker-news.firebaseio.com/v0/items/
