import React, { useEffect, useState } from "react";

function AlbumList({ user = {} }) {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    const abortController = new AbortController();
    async function loadAlbums() {
      if (user.id) {
        try {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/albums?userId=${user.id}`,
            { signal: abortController.signal }
          );

          const albumsFromAPI = await response.json();
          setAlbums(albumsFromAPI);
        } catch (error) {
          if (error.name === "AbortError") {
            console.log("Aborted");
          } else {
            throw error;
          }
        }
      }
    }

    loadAlbums();

    return () => {
      abortController.abort();
    };
  }, [user]);

  if (user.id) {
    return (
      <div>
        <h2>{user.name} Albums</h2>
        <ul>
          {albums.map((album, index) => (
            <li key={index}>
              {album.id} - {album.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return <p>Please click on a user name to the left</p>;
}

export default AlbumList;
