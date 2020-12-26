## commands

- start a larvel template - `docker-compose run --rm composer create-project laravel/laravel .` and change .env with correct host, password and user.

- start server: `docker-compose up -d --build server` and it will start mysql, php as they are dependency. Here `--build` is used as we must ensure that the latest changes are picked up