CREATE TABLE artists_concerts
(
  artist_id INTEGER REFERENCES artists(artist_id),
  concert_id INTEGER REFERENCES concerts(concert_id),
  scheduled_start_at TIME,
  scheduled_end_at TIME,
  PRIMARY KEY (artist_id, concert_id)
)