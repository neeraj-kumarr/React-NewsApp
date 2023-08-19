import React, { Component } from 'react';

class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl } = this.props;

        return (
            <div className="card my-3" style={{ width: "18rem" }}>
                <img src={imageUrl} style={{ height: '10rem' }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0, 45)}...</h5>
                    <p className="card-text">{description.slice(0, 88)}...</p>
                    <a href={newsUrl} target='_blank' className="btn btn-primary">Click for Details</a>
                </div>
            </div>
        );
    }
}

export default NewsItem;
