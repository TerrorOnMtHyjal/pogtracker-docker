FROM node:10.15.3-alpine
EXPOSE 3000
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
CMD ["npm", "start"]