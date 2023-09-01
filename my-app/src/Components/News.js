import React, { Component } from 'react';
import NewsItem from './NewsItem';
class News extends Component {
    constructor() {
        super();
        console.log("This is a constructor component");
        this.state = {
            articles: [], // Initialize as an empty array
            loading: true
        };
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=7fcd230259fb4e45a2697a4db2ad3987";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles });

        // console.error("Error fetching data:", error);

    }


    render() {
        return (
            <div className="container my-4" >
                <h1>NewsApp - Top Headline</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem
                                title={element.title}
                                description={element.description}
                                imageUrl={element.urlToImage}
                                newsUrl={element.url}
                            />
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

export default News;
