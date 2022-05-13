import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../Api";
import { Artist } from "../Components";
import "./AlbumsPage.scss";

export const AlbumsPage = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    api.getAlbums(params.id).then((response) => setData(response));
  }, []);

  return (
    <div className="albums">
      {data.map((item) => (
        <Artist
          key={item.id}
          name={item.name}
          image={item.image}
          navigate={`/artist/${item.id}/track`}
        />
      ))}
    </div>
  );
};
