import React, { Component } from 'react';

class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;

        return (
            <div className=" card my-3" style={{ width: "20rem" }}>
                <img src={!imageUrl ? "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png" : imageUrl} style={{ height: '12rem' }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title ? title.slice(0, 45) : ''}...</h5>
                    <p className="card-text">{description ? description.slice(0, 88) : ''}...</p>
                    <p class="card-text fw-bold"><i><small class="text-muted">By {author} </small></i></p>
                    <p class="card-text"><small class="text-muted">{new Date(date).toGMTString()} </small></p>
                    <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '85%' }}>{source}</span>
                    <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-primary">Click for Details</a>
                </div>
            </div >
        );
    }
}

export default NewsItem;
