import React from "react";
import { useSelector } from "react-redux";
import { Artist } from ".";

const FavoriteArtistList = () => {
  const userState = useSelector((s) => s.user);
  const scrollX = (e) => {
    e.preventDefault();

    e.target.scrollBy({
      left: e.deltaY < 0 ? -30 : 30,
    });
  };
  return (
    <section>
      <h2 style={{ color: "white" }}>favorite artists</h2>
      <div className="hide-scrollbar" onWheel={scrollX} style={{ display: "flex", flexDirection: "row", gap: 10, overflowY: "hidden" }}>
        {userState.favArtist.items.map((item) => (
          <Artist key={item.id} image={item.image} name={item.name} id={item.id} />
        ))}
      </div>
    </section>
  );
};

export default FavoriteArtistList;
