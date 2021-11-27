FROM node:16

# Your deploy process will need to provide this.
ARG DISCORD_BOT_TOKEN

ENV DISCORD_BOT_TOKEN=$DISCORD_BOT_TOKEN

# Copy package to workdir directory and instal
COPY package*.json ./
RUN npm install

WORKDIR /bot
COPY . /bot
RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]
