import React, { Component } from 'react';
import Card from './card';

class Headlines extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      error: false,
      
    };
  }

  componentDidMount() {

    // const url = `${this.props.source.newsapiURL}${this.props.news.type}?apiKey=${this.props.source.apiKey}`;
    const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=720e790d4beb43a0bebd7f0aa6fca805
    `

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
      <div>
        {this.renderItems()}
      </div>
    );
  }

  
}

export default Headlines;
