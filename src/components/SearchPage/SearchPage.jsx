import React from "react";
import "./SearchPage.css";
import TuneOutLined from "@material-ui/icons/TuneOutlined";
import VideoRowCard from "./VideoRowCard";
import { useLocation } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function SearchPage() {
    let query = useQuery();

    return (
        <div className="l-search_page">
            <div className="l-search_page__l-filter">
                <TuneOutLined className="l-search_page__icon" />
                <h3>filter</h3>
            </div>

            <hr />

            <div className="l-search_page__results">
                <VideoRowCard
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
                />
            </div>
        </div>
    );
}

export default SearchPage;
