SELECT *
FROM books b
JOIN authors a
ON b.author_id = a.author_id
WHERE b.publication_year < 2005
AND a.nationality <> 'United States of America'