CREATE TYPE mood AS ENUM ('sad', 'ok', 'happy');
CREATE TYPE ticket_status AS ENUM('new','wip','done','rejected','closed');
CREATE TYPE ticket_type AS ENUM('story','task');

DROP TABLE public.users;
CREATE TABLE public.users (
    id serial primary key,
    name VARCHAR(255),
    email VARCHAR(255),
    password_hash VARCHAR(255),
    updated_at TIMESTAMP,
    inserted_at TIMESTAMP
);

INSERT INTO public.users (id,name,email,updated_at,inserted_at)
VALUES (1,'Javier','javier.perez@ufirstgroup.ch',now(),now());



DROP TABLE IF EXISTS public.tickets;
CREATE TABLE public.tickets (
    id serial primary key,
    parent_id INTEGER,
    type ticket_type,
    title VARCHAR(255),
    description TEXT,
    story_points INT,
    release_number INT,
    author_id INT,
    asignee_id INT,
    status ticket_status,
    updated_at TIMESTAMP,
    inserted_at TIMESTAMP
);


DROP TABLE IF EXISTS public.ticket_comments;
CREATE TABLE public.ticket_comments (
    id serial primary key,
    ticket_id INTEGER,
    author_id INT,
    body TEXT,
    updated_at TIMESTAMP,
    inserted_at TIMESTAMP
);

