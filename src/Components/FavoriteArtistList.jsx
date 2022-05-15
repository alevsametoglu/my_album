import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Artist } from ".";
import { util } from "../app/util";

const FavoriteArtistList = () => {
  const userState = useSelector((s) => s.user);

  useEffect(() => {
    util.addScrollXEventListener();
    return () => {
      util.removeScrollXEventListener();
    };
  }, []);

  return (
    <section>
      <h2 style={{ color: "white" }}>favorite artists</h2>
      <div id="scroll-x" className="hide-scrollbar" style={{ display: "flex", flexDirection: "row", gap: 10, overflowY: "hidden" }}>
        {userState.favArtist.items.map((item) => (
          <Artist key={item.id} image={item.image} name={item.name} id={item.id} />
        ))}
      </div>
    </section>
  );
};

export default FavoriteArtistList;
