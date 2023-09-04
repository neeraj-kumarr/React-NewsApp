import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
class News extends Component {
    constructor() {
        super();
        console.log("This is a constructor component");
        this.state = {
            articles: [], // Initialize as an empty array
            loading: false,
            page: 1,

        };
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=7fcd230259fb4e45a2697a4db2ad3987&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false

        });


    }

    handlePrevPage = async () => {
        console.log('Previous');

        let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=7fcd230259fb4e45a2697a4db2ad3987&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false

        })
    }

    handleNextPage = async () => {
        console.log('Next');

        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=7fcd230259fb4e45a2697a4db2ad3987&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true })
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);

            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }

    render() {
        return (
            <div className="container my-4" >
                <h1>NewsApp - Top Headline</h1>
                {/* If loading is true, show spinner */}
                {this.state.loading && <Spinner />}
                <div className="row">
                    {/* if loading is false, then show news */}
                    {!this.state.loading && this.state.articles.map((element) => {
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
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark " onClick={this.handlePrevPage}>&larr; Previous Page</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark " onClick={this.handleNextPage}>{this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize) ? 'No More Pages' : 'Next Page'}&rarr;</button>

                </div>
            </div>
        );
    }
}

export default News;
