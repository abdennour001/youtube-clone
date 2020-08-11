import React from "react";
import "./VideoRowCard.css";
import Moment from "react-moment";
import moment from "moment";

function nFormatter(num, digits) {
    var si = [
      { value: 1, symbol: "" },
      { value: 1E3, symbol: "K" },
      { value: 1E6, symbol: "M" },
      { value: 1E9, symbol: "G" },
      { value: 1E12, symbol: "T" },
      { value: 1E15, symbol: "P" },
      { value: 1E18, symbol: "E" }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break;
      }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
  }

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
                <span>{moment.duration(duration).format()}</span>
            </div>
            <div className="l-video_row_card__info">
                <h3 className="l-video_row_card__title">{title}</h3>
                <p className="l-video_row_card__headline">
                    {channel} •<span>{nFormatter(views, 2)}</span>views •{" "}
                    <Moment fromNow>{timestamp}</Moment>
                </p>
                <p className="l-video_row_card__description">{description}</p>
            </div>
        </div>
    );
}

export default VideoRowCard;
