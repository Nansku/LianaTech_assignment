import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

const RSSfeed = () => {
    const [rssUrl, setRssUrl] = useState("https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/section/world/rss.xml");
    const [items, setItems] = useState([]);

    useEffect(() => {
        getRss();
    }, []);

    const getRss = async () => {
        /* e.preventDefault(); */
        const urlRegex = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
        if (!urlRegex.test(rssUrl)) {
            return;
        }

        const res = await fetch(`https://api.allorigins.win/get?url=${rssUrl}`);
        const { contents } = await res.json();
        const feed = new window.DOMParser().parseFromString(contents, "text/xml");
        const items = feed.querySelectorAll("item");
        const feedItems = [...items].map((el) => ({
            link: el.querySelector("link").innerHTML,
            title: el.querySelector("title").innerHTML,
            pubDate: el.querySelector("pubDate").innerHTML
        }));
        setItems(feedItems);
    };

    var settings = {
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <div className="container-fluid py-5 mt-5 mb-3" style={{ backgroundColor: "#eceeef" }}>
            <Row className="text-center d-flex paddingNewsfeed">
                <Col>
                    <h3 className="title mb-5">Latest News</h3>
                    <Slider {...settings}>
                        {items.map((item) => {
                            return (
                                <Card className="w-75 text-start px-2 py-1">
                                    <Card.Body>
                                        <Card.Text>{item.pubDate}</Card.Text>
                                        <Card.Title>{item.title}</Card.Title>
                                    </Card.Body>
                                </Card>
                            );
                        })}
                    </Slider>
                </Col>
            </Row>
        </div>
    )
}

export default RSSfeed;