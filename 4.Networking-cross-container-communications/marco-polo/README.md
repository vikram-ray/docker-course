### create a docker network 
> docker network create marcopolo-net

### prepare marco
> cd to marco folder
> docker build -t marco-img --build-arg PORT=3000 .
- will create a image with name marco-img
> docker run --rm -d -p 3000:3000 --network marcopolo-net --env-file=./.env --name marco marco-img
- it will spin up the container at port 3000, attach it to marcopolo-net, set the env from .env
> visit http://localhost:3000/ 
- response -> Hello from marco
> http://localhost:3000/connect-to-polo 
- response -> Cannot connect. Polo is unavailable.
- Because Polo is not connected yet to the network



### prepare polo
> cd to polo folder
> docker build -t polo-img --build-arg PORT=3000 .
- will create a image with name polo-img
> docker run --rm -d -p 4000:3000 --network marcopolo-net --env-file=./.env --name polo polo-img
- it will spin up the container at port 4000, attach it to marcopolo-net, set the env from .env
> visit http://localhost:4000/ and http://localhost:4000/connect-to-polo 

### try connecting marco to polo
> Visit `http://localhost:3000/connect-to-polo` again from marco,
- Response -> Hello from polo
- indicates that marco was able to connect to polo 

### NOTE
> network info is attached to container at starting phase, not to the image. 
> in Dockerfile, ARGS is only limited to the Dockerfile. ENV is available inside the container. 
> while building image, ARG is used
> while starting container ENV is used
