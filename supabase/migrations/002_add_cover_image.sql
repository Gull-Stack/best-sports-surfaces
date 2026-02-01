-- Add cover_image field for paid vendor featured work photos
ALTER TABLE vendors ADD COLUMN IF NOT EXISTS cover_image TEXT;
