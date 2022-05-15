import React from "react";
import { useSelector } from "react-redux";
import SpotifyWebPlayer from "react-spotify-web-playback";

const SpotifyPlayer = () => {
  const { selectedTrackUri } = useSelector((s) => s.app);
  const { token } = useSelector((s) => s.auth);

  return (
    <div style={{ position: "fixed", bottom: 0, width: "100vw", marginLeft: -20 }}>
      <SpotifyWebPlayer
        syncExternalDevice
        autoPlay
        magnifySliderOnHover
        styles={{
          activeColor: "#fff",
          bgColor: "#333",
          color: "#fff",
          loaderColor: "#fff",
          sliderColor: "#515166",
          trackArtistColor: "#ccc",
          trackNameColor: "#fff",
        }}
        token={token}
        uris={[selectedTrackUri]}
      />
    </div>
  );
};

export default SpotifyPlayer;
