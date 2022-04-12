#Dockerの公式イメージからNode.js ver16.14.0をContainerのベースに指定
FROM node:16.14.0-alpine

#文字コードをUTF-8に指定する
ENV LANG=C.UTF-8
#タイムゾーンを日本時間に指定
ENV TZ=Asia/Tokyo

#作業ディレクトリをContainerの/usr/src/appに設定
#( $cd /usr/src/appと同等のコマンド)
WORKDIR /usr/src/app
#このDockerfileと同ディレクトリにあるrupackage.jsonをContainerの/usr/src/appにコピー
COPY ./src .
RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*
RUN npm install

CMD ["npx", "hardhat","node"]
