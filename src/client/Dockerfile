FROM node:10.15.3-alpine
EXPOSE 3000
WORKDIR /usr/src/app
COPY package*.json ./
# RUN mkdir -p node_modules/node-sass/vendor/linux_musl-x64-72
# RUN curl -L https://github.com/sass/node-sass/releases/download/v4.12.0/linux_musl-x64-72_binding.node -o node_modules/node-sass/vendor/linux_musl-x64-72/binding.node
RUN npm install
CMD ["npm", "start"]