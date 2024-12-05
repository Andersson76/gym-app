DROP TABLE IF EXISTS program_exercises CASCADE;
DROP TABLE IF EXISTS programs CASCADE;
DROP TABLE IF EXISTS exercises CASCADE;
DROP TABLE IF EXISTS workouts CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(100),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE workouts (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    date TIMESTAMP NOT NULL,
    notes TEXT
);

CREATE TABLE exercises (
    id SERIAL PRIMARY KEY,
    workout_id INT REFERENCES workouts(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    sets INT NOT NULL,
    reps INT NOT NULL,
    weight FLOAT
);

CREATE TABLE programs (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    created_by INT REFERENCES users(id)
);

CREATE TABLE program_exercises (
    id SERIAL PRIMARY KEY,
    program_id INT REFERENCES programs(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    sets INT NOT NULL,
    reps INT NOT NULL,
    weight FLOAT
);
