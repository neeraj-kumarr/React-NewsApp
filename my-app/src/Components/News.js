import React, { Component, useRef } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import LoadingBar from 'react-top-loading-bar';

class News extends Component {
    static defaultProps = {
        country: 'pak',
        pageSize: 8,
        category: 'sports',
    };

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
            articles: [], // Initialize as an empty array
            loading: false,
            page: 1,
        };
        // Create a ref function for the LoadingBar
        this.loadingBarRef = React.createRef();

        document.title =
            this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1) +
            ' - NewsApp';
    }

    async updateNews() {
        this.setState({ loading: true });
        this.loadingBarRef.current.continuousStart();

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7fcd230259fb4e45a2697a4db2ad3987&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        });
        // Stop the LoadingBar animation
        this.loadingBarRef.current.complete();
    }

    async componentDidMount() {
        this.updateNews();
    }

    handlePrevPage = async () => {
        this.setState({
            page: this.state.page - 1,
        });
    };

    handleNextPage = async () => {
        this.setState({
            page: this.state.page + 1,
        });
    };

    render() {
        return (
            <div className="container my-4">
                <h1 className="text-center" style={{ margin: '35px 0' }}>
                    NewsApp - Top{' '}
                    {this.props.category.charAt(0).toUpperCase() +
                        this.props.category.slice(1)} {' '}  Headline
                </h1>

                {/* Render the LoadingBar */}
                <LoadingBar
                    color="#f11946"
                    ref={this.loadingBarRef}
                />

                {/* If loading is true, show spinner */}
                {this.state.loading && <Spinner />}

                <div className="row">
                    {/* if loading is false, then show news */}

                    {!this.state.loading &&
                        this.state.articles.map((element) => {

                            // if news item is removed, don't show
                            if (element.title !== '[Removed]') {
                                return (
                                    <div className="col-md-4" key={element.url}>
                                        <NewsItem
                                            title={element.title}
                                            description={element.description}
                                            imageUrl={element.urlToImage}
                                            newsUrl={element.url}
                                            author={element.author}
                                            date={element.publishedAt}
                                            source={element.source.name}
                                        />
                                    </div>
                                );
                            }
                            return null;
                        })}
                </div>

                <div className="d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} //Previous
                        className="btn btn-dark" onClick={this.handlePrevPage}>&larr; Previous Page
                    </button>
                    <button type="button" //Next
                        disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
                        className="btn btn-dark " onClick={this.handleNextPage}>
                        {this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize) ? 'No More Pages' : 'Next Page'}&rarr;
                    </button>
                </div>
            </div>
        );
    }
}

export default News;
