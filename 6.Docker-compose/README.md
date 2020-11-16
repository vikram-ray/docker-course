### importants points in yaml file
- read the docker-compose.yaml file of the 5.multicontainer section
- in services, we can either say `image: image-name` or `build: path_to_dockerFile`.
- if build is used, it create image if it is not available. It will also create a new one if some code or layers changes.
- -it is stdin_open and tty. So in yaml file, set these to true to use them. (in react dev setup)
- `docker-compose up --build` force docker to build image even if the image is already presnt
- `docker-compose build` will only build images
- We define services in yaml and conatiner name is create foldername+servicename+1 , build we can also force name 
`container_name: react`
### NOTES: 
- in docker-compose.yaml file, we need to declare named volume below. 
> volume:
>    data:
- docker-compose down -d -> to remove volumes also
- there are 2 ways to declare env variable and their value in yaml file
-