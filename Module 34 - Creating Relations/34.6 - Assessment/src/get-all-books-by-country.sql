SELECT *
FROM books b
JOIN authors a
ON b.author_id = a.author_id
WHERE a.nationality = 'China'
OR a.nationality = 'Turkey'