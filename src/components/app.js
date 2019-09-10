import React, { Component } from 'react';
import './app.css';
// import News from './news-main/news';
import Headlines from './news-main/headlines/headlines.js'
import SlotNews from './news-main/slotNews/slotNews.js'
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
        pageSize: 3

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
    // const catergories = ['all'];
    const catergories = ['entertainment',  'health', 'science', 'sports', 'technology', 'business'];

    const listItem = catergories.map((q) =>
      <div className="card-cat">
      <h1>
      {q}
      </h1>
      
        <SlotNews news={this.state.news2} source={this.state.source} pageSize={this.state.pageSize} category={q}/>
      </div>
    );


    return (
      <Router>
        <Header />
      <div className="">

        <div className="">
          <div className="">
            
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
    <header>
      <nav>
        <h1>NewsApp</h1>
        <h5>something something news</h5>
      </nav>

<div className="menu">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/usa">United states</Link>
      </li>
      <li>
        <Link to="/canada">Canada</Link>
      </li>
    </ul>
    </div>
    </header>
  );
}


function Footer() {
  return (
    <footer>
      <div></div>
      <p>The NewsApp Copyright 2019 all rights reserved.</p>
    </footer>
  );
}