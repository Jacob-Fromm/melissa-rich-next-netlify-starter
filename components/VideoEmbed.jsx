import React from "react";
import PropTypes from "prop-types";

const VideoEmbed = ({ videoUrl }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={videoUrl}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

VideoEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default VideoEmbed;
