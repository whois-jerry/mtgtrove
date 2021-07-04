FROM alpine
LABEL maintainer="jerry-yip@outlook.com"
EXPOSE 8080
RUN apk update
RUN apk add python2
COPY index.html /tmp/index.html
COPY script.js /tmp/script.js
COPY /assets /tmp/assets
COPY start.sh /tmp/start.sh
USER 1000
CMD ["sh","/tmp/start.sh", "echo", "I have no idea WTF is going on!!"]
