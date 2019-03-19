import React, { Component } from 'react';
import './App.css';
import News from './news-main/news';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source:{
        newsapiURL: 'https://newsapi.org/v2/',
        apiKey: '720e790d4beb43a0bebd7f0aa6fca805'
      },
      news1: {
        type: 'top-headlines',
        query: 'sources=bbc-news'
      },
      news2: {
        type: 'everything',
        query: 'domains=techcrunch.com&language=en'
      },
      news3: {
        type: 'everything',
        query: 'domains=comicbookmovie.com&language=en'
      },
      news4: {
        type: 'everything',
        query: 'sources=fox-news',
        pageSize: 3,
        language: 'en',
        sortBy: 'relevancy'
      }
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper indigo lighten-4">
              <a href="/" className="bran-logo center">My Feed</a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s8">
            <News news={this.state.news4} source={this.state.source} />
            {/* <News news={this.state.news2} /> */}
          </div>
         
      </div>
      </div>
    );
  }
}

export default App;