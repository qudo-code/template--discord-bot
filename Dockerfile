FROM node:16

ENV DISCORD_BOT_TOKEN="OTEzMTU3NjUwNDM3NTM3ODM0.YZ6aVQ.c26wdSyQCa-9-n200w_I6zSrgKE"
ENV DISCORD_BOT_TOKEN="913166098109726760"

# Copy package to workdir directory and instal
COPY package*.json ./
RUN npm install

WORKDIR /bot
COPY . /bot
RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]
