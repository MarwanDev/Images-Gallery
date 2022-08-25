FROM node:18.8.0-alpine

WORKDIR /app

EXPOSE 3000

COPY package.json package-lock.json ./

RUN npm install 

COPY . ./

CMD ["npm", "start"]