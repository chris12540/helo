CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    profile_pic TEXT
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    img TEXT NOT NULL,
    content TEXT NOT NULL,
    author_id INTEGER REFERENCES users (id)
);