-- Seed users
INSERT INTO user (username, password)
VALUES 
('conorlee', '$2b$10$xxxxxxxxxxxxxxxxxxxxxxx'),  -- Replace with bcrypt hashed password
('tech_user', '$2b$10$yyyyyyyyyyyyyyyyyyyyyyy');

-- Seed posts
INSERT INTO post (title, content, user_id)
VALUES 
('Post 1 Title', 'This is the content of post 1.', 1),
('Post 2 Title', 'This is the content of post 2.', 2);

-- Seed comments
INSERT INTO comment (content, user_id, post_id)
VALUES 
('Great post!', 2, 1),
('Thanks for the info!', 1, 2);
