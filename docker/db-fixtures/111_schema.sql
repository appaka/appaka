DROP TABLE public.posts;
CREATE TABLE public.posts (
    id serial primary key,
    author_id INTEGER NOT NULL,
    title VARCHAR(255),
    body TEXT,
    published_at TIMESTAMP,
    inserted_at TIMESTAMP,
    updated_at TIMESTAMP
);

DROP TABLE public.users;
CREATE TABLE public.users (
    id serial primary key,
    name VARCHAR(255),
    password_hash VARCHAR(255)
);



