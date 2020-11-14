### Networks in docker

> out of the box , in docker network, 
1. container to localhost > doesnt work > so change localhost inside the code to `host.docker.internal`
1. container to container > 
1. container to www > works

> HARD WAY: use direct Ip to communicate- if runnning mongoDb on local, use `docker container inspect mongodb` to view IP in networks. With that IP of mongodb, node can communication from inside the container to other container of mongoDb.
> EASy WAY: docker networks

> unlike volumes, docker will not create a network in passed in `docker run --network`, we have to manually create it
- command - `docker network --help`
> `docker nwtwork ls` to view all builtin network and create network
- Docker Networks actually support different kinds of "Drivers" which influence the behavior of the Network.
The default driver is the "bridge" driver - it provides the behavior shown in this module (i.e. Containers can find each other by name if they are in the same Network).