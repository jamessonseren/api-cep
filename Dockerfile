FROM node:20.5.1-slim

WORKDIR /app

COPY package*.json .

COPY . .

CMD ["tail", "-f", "/dev/null"]
