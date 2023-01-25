import React from "react";
import VideoCard from "./VideoCard.js";
import "../styles/Video.css";
const Videos = ({ videos }) => {
  return (
    <div className="Videos">
      {videos.map((item, index) => (
        <VideoCard
          name={item.name}
          image={item.image}
          index={item.index}
          key={item.image}
        />
      ))}
    </div>
  );
};

export default Videos;
