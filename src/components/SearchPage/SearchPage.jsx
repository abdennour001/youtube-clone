import React, { useState, useEffect, useRef } from "react";
import "./SearchPage.css";
import TuneOutLined from "@material-ui/icons/TuneOutlined";
import VideoRowCard from "./VideoRowCard";
import { useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function getVideoApiUrl(videoId) {
    return `https://www.googleapis.com/youtube/v3/videos?part=statistics,contentDetails&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
}

function SearchPage() {
    let query = useQuery();
    let [results, setResults] = useState([]);
    const ref = useRef(null);

    useEffect(() => {
        ref.current.staticStart();
        // fetch result
        let URL_LIST = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query.get(
            "query"
        )}&key=${
            process.env.REACT_APP_YOUTUBE_API_KEY
        }&type=video&maxResults=${20}`;

        let videos = [];

        fetch(URL_LIST)
            .then(response => response.json())
            .then(data => {
                data.items.forEach(item => {
                    let video = {
                        id: item["id"]["videoId"],
                        title: item["snippet"]["title"],
                        channel: item["snippet"]["channelTitle"],
                        timestamp: item["snippet"]["publishedAt"],
                        description: item["snippet"]["description"],
                        thumbnail:
                            item["snippet"]["thumbnails"]["medium"]["url"]
                    };
                    fetch(getVideoApiUrl(video["id"]))
                        .then(response => response.json())
                        .then(data => {
                            data.items.forEach(item => {
                                video = {
                                    ...video,
                                    duration:
                                        item["contentDetails"]["duration"],
                                    views: item["statistics"]["viewCount"]
                                };
                                videos.push(video);
                            });
                            setResults([...videos]);
                            ref.current.complete();
                        })
                        .catch(error => {
                            console.error("Error:", error);
                        });
                });
            })
            .catch(error => {
                console.error("Error:", error.message);
            });
    }, [query.get("query")]);

    return (
        <div className="l-search_page">
            <LoadingBar ref={ref} height={2} color="red" />

            <div className="l-search_page__l-filter">
                <TuneOutLined className="l-search_page__icon" />
                <h3>filter</h3>
            </div>

            <hr />
            {results.length === 0 && <p>No results found. </p>}
            {results.length !== 0 && (
                <div className="l-search_page__results">
                    {results.map(video => (
                        <VideoRowCard
                            className="l-search_page__video"
                            key={video.id}
                            thumbnail={video.thumbnail}
                            channel={video.channel}
                            channelImage="https://yt3.ggpht.com/a/AATXAJyb_Q6mAuRxbMoRwN8QojxHKmKyGMibjk7rF1gI2ag=s176-c-k-c0xffffffff-no-rj-mo"
                            title={video.title}
                            views={video.views}
                            timestamp={video.timestamp}
                            duration={video.duration}
                            description={video.description}
                        />
                    ))}
                    {/* <VideoRowCard
                        thumbnail="https://i.ytimg.com/vi/ciGTML-jukM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDCpDRbv0JS06H5UO4hnFGYnm2viw"
                        channel="Shantanu Kumar"
                        channelImage="https://yt3.ggpht.com/a/AATXAJyb_Q6mAuRxbMoRwN8QojxHKmKyGMibjk7rF1gI2ag=s176-c-k-c0xffffffff-no-rj-mo"
                        title="Designing an Asian Soda Brand"
                        views="82K views"
                        timestamp="21 Jun 2020"
                        duration="8:38"
                        description="How to learn coding ? coding kaise sikhe well dosto is video mein coding ke bare mein apna experience share karne wala hu ki"
                    />
                    <VideoRowCard
                        thumbnail="https://i.ytimg.com/vi/FVtFcbBfNYw/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBOfwg6P9l3aGnhxYg4qGF-i9PHew"
                        channel="EL HAMA"
                        channelImage="https://yt3.ggpht.com/a-/AOh14Gj-OdlYSeHv6JcxFZVJLpfGYHzJQ529ZYHdgg=s68-c-k-c0x00ffffff-no-rj-mo"
                        title="Kaleida - Think (Lyrics) 'John Wick soundtrack'"
                        views="1,7M views"
                        timestamp="23 Aug 2018"
                        duration="3:56"
                        description="How to learn coding ? coding kaise sikhe well dosto is video mein coding ke bare mein apna experience share karne wala hu ki"
                    />
                    <VideoRowCard
                        thumbnail="https://i.ytimg.com/vi/FVtFcbBfNYw/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBOfwg6P9l3aGnhxYg4qGF-i9PHew"
                        channel="EL HAMA"
                        channelImage="https://yt3.ggpht.com/a-/AOh14Gj-OdlYSeHv6JcxFZVJLpfGYHzJQ529ZYHdgg=s68-c-k-c0x00ffffff-no-rj-mo"
                        title="Kaleida - Think (Lyrics) 'John Wick soundtrack'"
                        views="1,7M views"
                        timestamp="23 Aug 2018"
                        duration="3:56"
                        description="How to learn coding ? coding kaise sikhe well dosto is video mein coding ke bare mein apna experience share karne wala hu ki"
                    />
                    <VideoRowCard
                        thumbnail="https://i.ytimg.com/vi/FVtFcbBfNYw/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBOfwg6P9l3aGnhxYg4qGF-i9PHew"
                        channel="EL HAMA"
                        channelImage="https://yt3.ggpht.com/a-/AOh14Gj-OdlYSeHv6JcxFZVJLpfGYHzJQ529ZYHdgg=s68-c-k-c0x00ffffff-no-rj-mo"
                        title="Kaleida - Think (Lyrics) 'John Wick soundtrack'"
                        views="1,7M views"
                        timestamp="23 Aug 2018"
                        duration="3:56"
                        description="How to learn coding ? coding kaise sikhe well dosto is video mein coding ke bare mein apna experience share karne wala hu ki"
                    />
                    <VideoRowCard
                        thumbnail="https://i.ytimg.com/vi/FVtFcbBfNYw/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBOfwg6P9l3aGnhxYg4qGF-i9PHew"
                        channel="EL HAMA"
                        channelImage="https://yt3.ggpht.com/a-/AOh14Gj-OdlYSeHv6JcxFZVJLpfGYHzJQ529ZYHdgg=s68-c-k-c0x00ffffff-no-rj-mo"
                        title="Kaleida - Think (Lyrics) 'John Wick soundtrack'"
                        views="1,7M views"
                        timestamp="23 Aug 2018"
                        duration="3:56"
                        description="How to learn coding ? coding kaise sikhe well dosto is video mein coding ke bare mein apna experience share karne wala hu ki"
                    /> */}
                </div>
            )}
        </div>
    );
}

export default SearchPage;
