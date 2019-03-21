import React, { Component } from 'react';
import Card from './card';

class SlotNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      error: false,
      
    };
  }

  componentDidMount() {

    const url = `${this.props.source.newsapiURL}${this.props.news.type}?${this.props.news.query}&apiKey=${this.props.source.apiKey}&sortBy=${this.props.news.sortBy}&pageSize=${this.props.news.pageSize}&language=${this.props.news.language}`;

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

export default SlotNews;
