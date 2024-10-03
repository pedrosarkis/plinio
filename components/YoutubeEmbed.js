import React from 'react';

const YouTubeEmbed = ({ videoId, title }) => {
  return (
    <div className="aspect-w-16 aspect-h-9 mb-8">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;