import React, { Component } from 'react';
import './App.css';
import News from './news-main/news';
import Headlines from './news-main/headlines/headlines'
import SlotNews from './news-main/slotNews/slotNews'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


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
        pageSize: 10
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
        pageSize: 1,
        language: 'en',
        sortBy: 'relevancy'
      }
    };
  }

  render() {
    const catergories = ["general", "health", "science"];
    const listItem = catergories.map((item) =>
      <div>
      <h1>
      {item}
      </h1>
      
        <SlotNews news={this.state.news4} source={this.state.source} />
      </div>
    );


    return (
      <Router>
        <Header />
      <div className="">
        <div className="">
          <nav>
            <div className="">
              <a href="/" className="">My Feed</a>
            </div>
          </nav>
        </div>
        <div className="">
          <div className="">
            <News news={this.state.news4} source={this.state.source} />
            <Headlines news={this.state.news1} source={this.state.source} />
            <SlotNews news={this.state.news4} source={this.state.source} />
          </div>
         
          {listItem}
         </div>

      </div>
      <Footer />
      </Router>
    );
  }
}

export default App;


function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  );
}


function Footer() {
  return (
    <div>
      this is the footer.
    </div>
  );
}