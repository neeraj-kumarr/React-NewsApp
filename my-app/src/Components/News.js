import React, { Component } from 'react'
import NewsItem from '../NewsItem'

export class News extends Component {
    render() {
        return (
            <div>
                <div className="container my-4">
                    <h1>NewsApp - Top Headline</h1>
                    <div className="row">
                        <div className="col-md-4">
                            <NewsItem title="mytitle" description="mydescr" imageUrl="https://s.yimg.com/uu/api/res/1.2/A6M.gJ5cFAvbqtSK7hhXSw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-08/31442d90-3868-11ee-b47d-4445e5f7dfd1.cf.jpg" />
                        </div>
                        <div className="col-md-4">
                            <NewsItem title="mytitle" description="mydescr" imageUrl="https://s.yimg.com/uu/api/res/1.2/A6M.gJ5cFAvbqtSK7hhXSw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-08/31442d90-3868-11ee-b47d-4445e5f7dfd1.cf.jpg" />
                        </div>
                        <div className="col-md-4">
                            <NewsItem title="mytitle" description="mydescr" imageUrl="https://s.yimg.com/uu/api/res/1.2/A6M.gJ5cFAvbqtSK7hhXSw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-08/31442d90-3868-11ee-b47d-4445e5f7dfd1.cf.jpg" />
                        </div>
                    </div>

                </div>
            </div >
        )
    }
}

export default News
