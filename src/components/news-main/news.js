import React, { Component } from 'react';
import Card from './card';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      error: false,
      
    };
  }

  componentDidMount() {
    const newsapiURL = 'https://newsapi.org/v2/';
    const apiKey = '720e790d4beb43a0bebd7f0aa6fca805';
    const url = `${newsapiURL}${this.props.news.type}?${this.props.news.query}&apiKey=${apiKey}`;

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
        <Card key={item.url} item={item} />
      ));
      }

  render() {
    return (
      <div className="row">
        {this.renderItems()}
      </div>
    );
  }

  
}

export default News;
