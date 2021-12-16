SELECT sum(amount) FROM grants
WHERE fiscal_year = '01-01-2008'
AND applicant_name LIKE '%Women%'