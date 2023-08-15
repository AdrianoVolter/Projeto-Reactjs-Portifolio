FROM node:14

WORKDIR /app

FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]

