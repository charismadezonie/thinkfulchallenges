SELECT *
FROM books b
JOIN authors a
ON b.author_id = a.author_id
WHERE b.in_stock = false