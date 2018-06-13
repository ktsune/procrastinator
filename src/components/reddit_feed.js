import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

class RedditFeed extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const article = this.props.item
    if (!article) {
      return <div></div>;
    }

    return (
      <div className="reddit-list">
        <ul className="reddit-list">
          <li riot-tag="reddit" className="reddit-item">
            <a className="link" href={article.url}>
              <span className='reddit-title'>{article.title}</span>
              <br />
              <span className='reddit-subline'>
               Reddit &nbsp;
               {article.num_comments} comments
              </span>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default RedditFeed;

// GET https://hacker-news.firebaseio.com/v0/items/
