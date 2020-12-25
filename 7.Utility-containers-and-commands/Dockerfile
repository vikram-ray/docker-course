FROM node

WORKDIR /app


# creating a node utility container, so that while running the Image, we only need to pass the <cmd> 
# and that will be appended to `npm <cmd>`. In this way we dont have to pass `npm` everytime
# eg - docker run -it image init
# eg - docker run -it image install express

ENTRYPOINT ["npm"]