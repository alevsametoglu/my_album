import React from "react";
import { Track } from ".";

const TrackList = ({ trackList }) => {
  return (
    <section>
      <div style={{ gap: 10, height: "clamp(240px, 380px,100vh/2)", overflowY: "scroll" }}>
        {trackList.map((item) => (
          <Track
            key={item.id}
            image={item.albumImage}
            uri={item.uri}
            duration={item.duration}
            name={item.name}
            artistName={item.artistName}
            albumName={item.albumName}
          />
        ))}
      </div>
    </section>
  );
};

export default TrackList;
