CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE workouts (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id),
    date DATE NOT NULL,
    notes TEXT
);

CREATE TABLE exercises (
    id SERIAL PRIMARY KEY,
    workout_id INT NOT NULL REFERENCES workouts(id),
    name VARCHAR(100) NOT NULL,
    sets INT NOT NULL,
    reps INT NOT NULL,
    weight DECIMAL(5, 2)
);
