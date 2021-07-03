FROM ubuntu
LABEL maintainer="jerry-yip@outlook.com"
EXPOSE 8080
RUN apt-get update
CMD ["echo","This is mother fucking difficult to understand."]