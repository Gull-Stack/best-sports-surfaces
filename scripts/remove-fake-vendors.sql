-- Remove fake test vendors from BSS database
-- "Waffle House Courts" and "Brad's Bad Ass Painting"

DELETE FROM vendors 
WHERE name IN (
    'Waffle House Courts',
    'Brad''s Bad Ass Painting'
);

-- Alternative approach if names don't match exactly:
-- DELETE FROM vendors WHERE phone = '(801) 555-9473'; -- Waffle House Courts
-- DELETE FROM vendors WHERE phone = '(770) 734-3000'; -- Brad's Bad Ass Painting

-- Verify removal (run after DELETE)
-- SELECT name, location, phone FROM vendors WHERE name ILIKE '%waffle%' OR name ILIKE '%brad%';