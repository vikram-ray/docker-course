- this is a multi (node, mongo, react) app. We need to do development setup for these project

## requirements:
- Database > Data Must persist, Asses must be limited
- Nodejs > Data (logs) must persist, Live Source Code Update
- React > Live Source Code Update

## Steps

### 1. Create a docker network
1. `docker network create goals-net`

### 2. prepare mongodb
1. docker run --name mongodb -d --rm --network goals-net -v goals-mongodb:/data/db mongo

### 3. prepare node backend
1. docker build -t goals-node .
1. docker run --name node -d --rm --env-file=./.env --network goals-net -p 3001:3000 goals-node


### 4. prepare frontend react
1. docker build -t goals-react .
2. docker run --rm -it -p 3000:3000 --name react goals-react
- https://stackoverflow.com/questions/61047861/cant-run-react-app-with-docker-container