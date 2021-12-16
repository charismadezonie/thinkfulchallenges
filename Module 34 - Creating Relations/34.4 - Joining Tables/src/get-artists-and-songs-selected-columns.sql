SELECT 
  a.artist_id, 
  a.artist_name,
  s.song_name
FROM artists a
JOIN songs s
ON a.artist_id = s.artist