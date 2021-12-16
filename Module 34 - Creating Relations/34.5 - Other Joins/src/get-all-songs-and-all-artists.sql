SELECT 
  a.artist_name artist,
  s.song_name,
  s.album_name album
FROM 
  artists a
FULL JOIN songs s
ON a.artist_id = s.artist