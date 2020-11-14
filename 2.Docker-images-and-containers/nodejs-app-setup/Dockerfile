# base image, most probably it is an Debian OS
FROM node

# tells docker to run all the subsequent commands in this folder
WORKDIR /app

# this is copies earlier because we doesnt want to npm install every time with code changes and 
# want docker to use the cached verion
COPY package.json /app

# it will run the commands inside the image while building
RUN npm install

# both will work - abs route or the relative as we set WORKDIR already
# COPY . ./
COPY . /app

# it is just OPTIONAL and it is documentation process
EXPOSE 3000

# it will run inside container, RUN vs CMD. RUN is executed in the image and 
# CMD inside container
CMD [ "node","server.js" ]
