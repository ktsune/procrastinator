import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

class SpotFeed extends Component {
  constructor(props) {
    super(props);
  }

  createTrackItem = (tracks) => {
    return (
      <ul riot-tag="spotify" className="spot-item">
        <a className="link" href={tracks.uri}>
          Title: {tracks.name}
          <br />
          <span className='spotify-subline'>
           Spotify &nbsp;
           Album: Yesterday's Gone
         </span>
        </a>
      </ul>)
  }

  createAlbum = (albums) => {
    return (
      <div>
        <ul className="spot-list">
        {albums.tracks.items.map(this.createTrackItem)}
        </ul>
      </div>
    )
}

render() {
  return (
    <div>
      {this.createTrackItem(this.props.feed)}
    </div>)
  }
}

export default SpotFeed;
