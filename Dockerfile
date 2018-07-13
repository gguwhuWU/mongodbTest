FROM node:argon

# 這裡注解掉環境變數，給docker-compose 設定
# ENV DB_NAME=mymongodb

# Create app directory
RUN mkdir -p /src
WORKDIR /src

# Install app dependencies
COPY package.json /src/
RUN npm install

# 複製目前全部資料 到 裡面的/src下
COPY . /src

# 定義對外port號 3000:node.js, 2701:-node.js connect mongodb
EXPOSE 3000 27017

# 執行 node /src/index.js
CMD [ "node", "/src/index.js" ]
