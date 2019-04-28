FROM node:12.0.0-alpine
EXPOSE 8080
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
CMD ["npm", "start"]