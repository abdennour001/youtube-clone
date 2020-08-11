import React from "react";
import "./VideoRowCard.css";

function VideoRowCard({
    thumbnail,
    title,
    channel,
    views,
    timestamp,
    duration,
    description
}) {
    return (
        <div className="l-video_row_card">
            <div className="l-video_row_card__thumbnail">
                <img src={thumbnail} alt="thumbnail" />
                <span>{duration}</span>
            </div>
            <div className="l-video_row_card__info">
                <h3 className="l-video_row_card__title">{title}</h3>
                <p className="l-video_row_card__headline">
                    {channel} • <span>{views}</span> • {timestamp}
                </p>
                <p className="l-video_row_card__description">{description}</p>
            </div>
        </div>
    );
}

export default VideoRowCard;
