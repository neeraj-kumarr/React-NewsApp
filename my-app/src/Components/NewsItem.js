import React, { Component } from 'react';

class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;

        return (
            <div className=" card my-3" style={{ width: "20rem" }}>
                <img src={!imageUrl ? "https://cdn.xxl.thumbs.canstockphoto.com/image-not-available-written-in-chalk-on-a-blackboard-stock-image_csp8317846.jpg" : imageUrl} style={{ height: '12rem', borderBottom: '1px solid #A49F26' }} className="card-img-top" alt="Loading.." />
                <div className="card-body " >
                    <h5 className="card-title">{title ? title.slice(0, 45) : ''}...</h5>
                    <p className="card-text">{description ? description.slice(0, 88) : 'Read More'}...</p>

                    <p className="card-text fw-bold" style={{ margin: '0' }} ><small className="text-danger"><i>By {!author ? 'Unknown' : author}</i> </small></p>
                    <p className="card-text"><small className="text-muted">{new Date(date).toGMTString()} </small></p>

                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '85%' }}>{source}</span>

                    <a href={newsUrl} rel="noopener noreferrer" target='_blank' style={{ textAlign: 'right' }} className="btn btn-dark btn-sm">Read More</a>
                </div>
            </div >
        );
    }
}

export default NewsItem;
