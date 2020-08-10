import React from "react";
import "./VideoCard.css";
import Avatar from "@material-ui/core/Avatar";

function VideoCard({
    thumbnail,
    title,
    channel,
    views,
    timestamp,
    channelImage,
    duration
}) {
    return (
        <div className="video_card">
            <div className="video_card__l-thumbnail">
                <img
                    className="video_card__thumbnail"
                    src={thumbnail}
                    alt={channel}
                />
                <span>{duration}</span>
            </div>
            <div className="video_card__info">
                <Avatar
                    className="video_card__avatar"
                    src={channelImage}
                    alt={channel}
                />

                <div className="video_card__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} • {timestamp}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;
