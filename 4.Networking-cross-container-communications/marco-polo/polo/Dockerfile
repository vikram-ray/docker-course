FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ARG PORT

EXPOSE ${PORT}

# this port can be given from here or from env
# ENV PORT ${PORT}

CMD ["node","server.mjs"]