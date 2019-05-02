FROM node:10.15.3-alpine
EXPOSE 8080
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
CMD ["npm", "run", "dev"]