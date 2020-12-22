### Docker utility container - an extra usecase of docker
> run with eg- `docker run -it node:alpine npm init` will ask for inputs ( package name, etc) and generate a package.json file


> The idea is to run every commands inside the container and save files in local machine
> Eg: if we dont have node on our local machine, so we will start a container and will bind-mount our project folder with the /app inside the container. So first we create a image of node:alpine and set workdir as /app using Dockerfile
then start a container with that image with -v `docker run -it -v pwd/:/app custom-img npm init`. It will save a package.json in local.

### ENTRYPOINT vs CMD in Dockerfile
`
FROM node
CMD ["npm", "start"]
ENTRYPOINT ["npm"]
`
> `docker run -it -v pwd/:/app custom-img npm init` here npm init will overwrite CMD in dockerfile
> ENTRYPOINT - as name suggest, after image name in docker run, the commands is appended. as `docker run -it -v pwd/:/app custom-img start`

### commands 
> docker-compose exec ..
> docker-compose run ... `docker-compose run node-container init`, it will run npm (from EXTRYPOINT) init inside the container
> docker-compose up vs run - run doesnt remove the conainer. To remove d-c run --rm node.