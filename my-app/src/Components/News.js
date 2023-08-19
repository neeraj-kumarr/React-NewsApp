import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {
    articles = [
        {

            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": null,
            "title": "Sony's PlayStation 5 drops back to an all-time low, plus the rest of this week's best tech deals | Engadget",
            "description": "This week's best tech discounts include deals on Apple MacBooks, PlayStation 5 consoles, Samsung phones and more..",
            "url": "https://www.engadget.com/sonys-playstation-5-drops-back-to-an-all-time-low-plus-the-rest-of-this-weeks-best-tech-deals-173119382.html",
            "urlToImage": "https://s.yimg.com/uu/api/res/1.2/A6M.gJ5cFAvbqtSK7hhXSw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-08/31442d90-3868-11ee-b47d-4445e5f7dfd1.cf.jpg",
            "publishedAt": "2023-08-11T17:52:25.9072066Z",
            "content": "This week marks the official availability of Samsung's two new foldable phones and ourreviews are in. While you wouldn't expect a deal this early, Amazon is throwing in a gift card if you order eithe… [+12644 chars]"
        },
        {
            "source": {
                "id": "t3n",
                "name": "T3n"
            },
            "author": "Kim Rixecker",
            "title": "Zurück in die Zukunft: Entwickler bringen Windows XP auf Apples Vision Pro",
            "description": "Nach Ansicht der Apple-Führung leitet die AR-Brille Vision Pro die Zukunft des Computings ein. Es kann aber au",
            "url": "https://t3n.de/news/apple-vision-pro-windows-xp-1569446/",
            "urlToImage": "https://t3n.de/news/wp-content/uploads/2023/06/Aufmacherbild-Apple-Vision-Pro-Podcastartikel.png",
            "publishedAt": "2023-08-11T17:00:55Z",
            "content": "Mit der Vision Pro will Apple nicht weniger als eine neue Produktkategorie etablieren. Damit das klappt, braucht es vor allem eines: Apps, die einen echten Mehrwert liefern und so den Kauf der 3.500 … [+2730 chars]"
        },
        {
            "source": {
                "id": "t3n",
                "name": "T3n"
            },
            "author": null,
            "title": "Disney, Zoom und Co.: Die Apps für die Apple Vision Pro im Überblick",
            "description": "Apples erstes AR-Headset kommt in Deutschland voraussichtlich erst 2025 in den Verkauf.",
            "url": "https://t3n.de/news/vision-pro-apple-apps-disney-zoom-ueberblick-1569460/",
            "urlToImage": "https://t3n.de/news/wp-content/uploads/2023/06/apple-vision-pro-on-head.jpg",
            "publishedAt": "2023-08-11T16:36:50Z",
            "content": "Sie war der Star auf der Entwicklerkonferenz WWDC 2023: Apples Vision Pro verspricht, mit unzähligen Kameras, Sensoren und Displays ausgestattet, ein spannendes Augmented-Reality-Erlebnis. Die Hardwa… [+2044 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "The Associated Press",
            "title": "Kenosha police arrested a Black man at Applebee's. The actual suspects were in the bathroom",
            "description": "Police in Kenosha, Wisconsin, have launched an internal investigation after a video posted to social media appears to show an officer punching a Black man the officer mistakenly thought was involved in a hit-and-run crash",
            "url": "https://abcnews.go.com/US/wireStory/kenosha-police-arrested-black-man-applebees-actual-suspects-102201008",
            "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
            "publishedAt": "2023-08-11T16:21:47Z",
            "content": "KENOSHA, Wis. -- Police in Kenosha, Wisconsin, have launched an internal investigation after a video posted to social media appears to show an officer punching a Black man the officer mistakenly beli… [+2689 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Olga Bakirova",
            "title": "How we scaled our App Store performance by approximately 200% in 1 year | TechCrunch",
            "description": "App Store Optimization and Apple Search Ads are potent tools for promoting apps that can significantly boost conversion rates.",
            "url": "https://techcrunch.com/2023/08/11/how-we-scaled-our-app-store-performance-by-approximately-200-in-1-year/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/08/GettyImages-1307645589.jpg?resize=1200,800",
            "publishedAt": "2023-08-10T18:33:21Z",
            "content": "App Store optimization (ASO) and Apple Search Ads (ASA) are potent tools for promoting apps that can significantly boost conversion rates. Every prospective user encounters an app’s page in the App S… [+2182 chars]"
        },
        {
            "source": {
                "id": "wired-de",
                "name": "Wired.de"
            },
            "author": "GQ",
            "title": "Apple Neuheiten: Was wir vor der ersten Keynote 2021 wissen!",
            "description": "Bald soll es so weit sein: Bei der ersten Keynote 2021 präsentiert Apple Neues aus Cupertino. Auf diese Produkte dürfen wir uns freuen!",
            "url": "https://www.gq-magazin.de/auto-technik/article/apple-neuheiten-2021-das-wissen-wir-vor-keynote",
            "urlToImage": "https://res.cloudinary.com/wired-de/image/upload/t_teaser_square/v1/0/apple-neuheiten-event-erste-keynote-2021-technik-aufmjpg.jpg",
            "publishedAt": "2021-03-23T17:09:52Z",
            "content": "Auf eines ist im Frühjahr immer Verlass: Apple präsentiert seine (ersten) neuen Produkte. Glauben wir den jüngsten Gerüchten, wird das auch 2021 so sein und dieses Jahr sogar wieder live aus Cupertin… [+2936 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "Akram's yorkers, Hegg's hits, and Chapple's 6 for 18 | ESPNcricinfo.com",
            "description": "This week, we relive the glorious one-day triumphs of Lancashire in the 1990s | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29102935/o-my-akram-my-hegg-long-ago",
            "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1221634_1296x729.jpg",
            "publishedAt": "2020-04-27T10:24:08Z",
            "content": "With still no live cricket in sight, we're digging deep into YouTube to keep ourselves entertained. This week, a trip down memory lane with one of the most dominant one-day sides ever - Lancashire in… [+5185 chars]"
        }


    ];
    constructor() {
        super();
        console.log("This is a constructor component");
        this.state = {
            articles: this.articles,
            loading: false
        };
    }

    render() {
        return (
            <div className="container my-4">
                <h1>NewsApp - Top Headline</h1>
                <div className="row">
                    {this.state.articles.map((element, index) => {
                        return <div className="col-md-4" key={index}>
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
