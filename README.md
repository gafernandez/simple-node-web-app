# simple-node-web-app
## Usage
Configure `.env` file on root path
```
MONGODB_USER=root
MONGODB_PASSWORD=123456
MONGODB_DATABASE=simplewebapp
MONGODB_LOCAL_PORT=7017
MONGODB_DOCKER_PORT=27017

NODE_LOCAL_PORT=6868
NODE_DOCKER_PORT=8080
```

Run docker
```bash
$ docker-compose build
$ docker-compose up
```