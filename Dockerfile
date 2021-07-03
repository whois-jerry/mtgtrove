FROM ubuntu
LABEL maintainer="jerry-yip@outlook.com"
EXPOSE 8080
RUN apt-get update
COPY app/index.html /tmp/index.html
COPY app/start.sh /tmp/start.sh
USER 1000
CMD ["sh","/tmp/start.sh"]