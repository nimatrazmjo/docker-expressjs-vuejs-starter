# Docker-Expressjs-Vuejs-Starter

In this I have setup:

- Docker for development.
- Docker for production.
- Serve vuejs builded code using expressjs in production.
- Serve express using pm2 package.
- Mongodb connection.

It is ready for starting development

## Project setup

- copy `.env.example` to `.env` and run

  ```
  docker-compose build && docker-compose up -d
  ```

- Run `docker ps` to know what container is running on which port.

### To build for production

- Make sure you have added `DB_USER` and `DB_PASS` in `.env` file

```
docker-compose -f docker-compose.prod.yml build && docker-compose -f docker-compose.prod.yml up -d
```

## Contribute

Contribution are alwasy welcome! Please read the [contribution guidelines](contributing.md) first.

- Fork this project to your personal account.
- Create your feature branch `git checkout -b feature/foo`.
- Commit your changes `git commit -am 'Add some foo`.
- Push to the branch `git push origin feature/foo`.
- Create a new Pull Request.

## License

The theme is available as open source under the terms of the [MIT License](LICENSE.txt).
