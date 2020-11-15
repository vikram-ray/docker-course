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

### NOTE: 
> Longer file path in docker volumes have precedence.
> eg: -v /user/vikram/dev/node:/app -v logs:/app/logs -v /app/node_modules,
> here 1st is bind mount - it will mount the node folder to inside the /app in container. It will overwrite everything iside the /app with the node folder but due to volume-precedence in docker, it will compile all the volumes and it will skip `/app/node_modules and /app/logs` folder as `/app/node_modules and /app/logs` have higher precedence than `/app`.
> 2nd is named volume - used to persist logs, will survive container removal
> 3rd is ananymous volume -in this case we used to it to protect node_modules to be overwritten by the bind mount.