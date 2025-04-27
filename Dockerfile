FROM node:18-alpine

LABEL authors="mouctar"
WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build
ENV NODE_ENV=prod

EXPOSE 3000

CMD ["npm", "start"]