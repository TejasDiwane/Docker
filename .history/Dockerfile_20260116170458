FROM node:22-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000
# all of the above command is used to create an image below command is used when a image is running a container

CMD ["node","index.js"]