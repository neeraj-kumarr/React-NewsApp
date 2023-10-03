import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {

    const [articles, setarticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    document.title =
        props.category.charAt(0).toUpperCase() +
        props.category.slice(1) +
        ' - NewsApp';


    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);

        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);

        setarticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        console.log(parsedData);
        props.setProgress(100);
    }

    useEffect(() => {
        updateNews();
    }, []);

    // handlePrevPage = async () => {
    //      setState({
    //         page:  state.page - 1,
    //     });
    // };

    // handleNextPage = async () => {
    //      setState({
    //         page:  state.page + 1,
    //     });
    // };


    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();

        setarticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false)
    };

    return (
        <>
            <h1 className="text-center" style={{ margin: '60px 0' }}>
                NewsApp - Top{' '}
                {props.category.charAt(0).toUpperCase() + props.category.slice(1)} {' '}  Headline
            </h1>

            {/* If loading is true, show loading spinner */}
            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">

                        {articles.map((element, index) => {
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
                                            source={element.source && element.source.name}
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

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
};

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
};

