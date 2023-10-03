import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
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
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title =
            this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1) +
            ' - NewsApp';
    }

    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });

        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);

        console.log(parsedData);
        this.setState(() => ({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
        }));
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updateNews();

    }

    // handlePrevPage = async () => {
    //     this.setState({
    //         page: this.state.page - 1,
    //     });
    // };

    // handleNextPage = async () => {
    //     this.setState({
    //         page: this.state.page + 1,
    //     });
    // };


    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1,
            loading: true, // Set loading to true while fetching new data

        })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        })
    };

    render() {
        return (
            <>
                <h1 className="text-center" style={{ margin: '35px 0' }}>
                    NewsApp - Top{' '}
                    {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} {' '}  Headline
                </h1>

                {/* If loading is true, show loading spinner */}
                {this.state.loading && <Spinner />}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">

                            {this.state.articles.map((element, index) => {
                                if (element.title !== '[Removed]') {
                                    return (
                                        <div className="col-md-4" key={index}>
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
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}

export default News;
