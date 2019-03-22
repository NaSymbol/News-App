import React, { Component } from 'react';
import Cards from './card';
import'./slotNews.css';

class SlotNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      error: false,
      
    };
  }

  componentDidMount() {

    const url = `${this.props.source.newsapiURL}${this.props.news.type}?pageSize=${this.props.news.pageSize}&q=${this.props.category}&apiKey=${this.props.source.apiKey}`;
    // const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=720e790d4beb43a0bebd7f0aa6fca805`
    
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          news: data.articles
        })
      })
      .catch((error) => {
        this.setState({
          error: true
        })
      });
  }


  renderItems() {
      return this.state.news.map((item) => (
        <Cards key={item.url} item={item} />
      ));
  }

  render() {
    return (
      <div className="slotNews">
        {this.renderItems()}
      </div>
    );
  }

  
}

export default SlotNews;
