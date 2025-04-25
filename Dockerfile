FROM node:18-alpine

LABEL authors="mouctar"
WORKDIR /app
COPY package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]