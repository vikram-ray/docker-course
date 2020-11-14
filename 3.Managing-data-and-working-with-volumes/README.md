## Docker Volumes
### types of External data storages
1. Volumes (managed by docker) - Great for data which should be persistent but which we dont need to edit directly. Eg- postgres data
> 1. Anonymous Volumes - an unknown (to devs) path on host machine is used by docker.
> 2. Named Volumes - A defined path in the container is mapped to the created volume. eg /somepath on our hosting machine is mapped to the /app/data in container

2. Bind Mounts (Managed by us) - Great for persistent, editable(by us) data. Eg - Source code 
> We define a folder/path on our host machine

### commands
- :ro 
> read only bind mounts
- use .dockerignore file
- to set env, --env PORT:8000 {OR} -e PORT:8000
- create .env, and --env-file ./.env
- https://stackoverflow.com/questions/41916386/arg-or-env-which-one-to-use-in-this-case  
- --build-arg var=value
- The environment variables set using ENV will persist when a container is run from the resulting image.
- BuildTime ARGS, runtime ENV