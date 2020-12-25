### Docker utility container - an extra usecase of docker
> run with eg- `docker run -it node:alpine npm init` will ask for inputs ( package name, etc) and generate a package.json file


> The idea is to run every commands inside the container and save files in local machine
> Eg: if we dont have node on our local machine, so we will start a container and will bind-mount our project folder with the /app inside the container. So first we create a image of node:alpine and set workdir as /app using Dockerfile
then start a container with that image with -v `docker run -it -v pwd/:/app custom-img npm init`. It will save a package.json in local.
> with docker-compose run - containers are not removed automatically like up and down. So   `docker-compose run --rm init`  

### ENTRYPOINT vs CMD in Dockerfile

- ENTRYPOINT: command to run when container starts.
- CMD: command to run when container starts or arguments to ENTRYPOINT if specified.


- Read kr lena jarur - https://stackoverflow.com/questions/21553353/what-is-the-difference-between-cmd-and-entrypoint-in-a-dockerfile#:~:text=Argument%20to%20docker%20run%20such,as%20docker%20run%20%5Bargs%5D%20.
`
FROM node
CMD ["npm", "start"]
ENTRYPOINT ["npm"]
`
> `docker run -it -v pwd/:/app custom-img npm init` here npm init will overwrite CMD in dockerfile
> ENTRYPOINT - as name suggest, after image name in docker run, the commands is appended. as `docker run -it -v pwd/:/app custom-img start`

> The ENTRYPOINT specifies a command that will always be executed when the container starts. The CMD specifies arguments that will be fed to the ENTRYPOINT.
```
docker run -it --rm yourcontainer /bin/bash            <-- /bin/bash overrides CMD
                                                       <-- /bin/bash does not override ENTRYPOINT
docker run -it --rm --entrypoint ls yourcontainer      <-- overrides ENTRYPOINT with ls
docker run -it --rm --entrypoint ls yourcontainer  -la  <-- overrides ENTRYPOINT with ls and overrides CMD with -la
```
### commands 
> docker-compose exec ..
> docker-compose run ... `docker-compose run <service in docker-compose file> init`, it will run npm (from EXTRYPOINT) init inside the container
> docker-compose up vs run - run doesnt remove the conainer. To remove d-c run --rm node.

## array [] vs string '' instruction in CMD

> while defining CMD and ENTRYPOINT we use string and [] form to give instriction. 
> Using [] is considered “exec form” and the plain string command is considered “shell form”.
### Exec Form [recommended way]
- Runs your CMD’s binary as is, along with any arguments you optionally pass in.
- `CMD ["gunicorn", "-c", "python:config.gunicorn", "hello.app:create_app()"]`
### Shell Form
- Runs your CMD’s binary through a shell which has the added benefit of using any shell functionality you want (such as using pipes and &&, etc.).
`CMD gunicorn -c "python:config.gunicorn" "hello.app:create_app()"`

ref - https://nickjanetakis.com/blog/docker-tip-63-difference-between-an-array-and-string-based-cmd