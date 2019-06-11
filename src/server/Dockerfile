FROM node:12.4.0-alpine
EXPOSE 8080
WORKDIR /usr/src/app
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install
CMD ["npm", "run", "start"]