import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

class SpotFeed extends Component {
  constructor(props) {
    super(props);
  }

  // titleToLink() {
  //   const titleToLink = this.props.feed.album.data.tracks.items.reduce(function(memo, item) {
  //   memo[item.name] = item.external_urls.spotify;
  //    return memo;
  //  }, {});
  // }

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
  // const track = this.props.feed
  // if (!track) {
  //   return <div></div>;
  // }
  return (
    <div>
      {this.createTrackItem(this.props.feed)}
    </div>)
  }
}

//   render() {
//     // console.log("spot feed", this.props.feed)
//     return (
//       <div>
//         {this.createTrackItem(this.props.items)}
//       </div>
//     )
//   }
// }

export default SpotFeed;

// GET https://hacker-news.firebaseio.com/v0/items/
