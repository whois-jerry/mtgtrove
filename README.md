# MTGtrove
MTGtrove is a simple website that allows users to fuzzy search Magic: The Gathering cards utilizing the Scryfall API.

### What to expect:
* Card search functionality
* Card image preview

### What to look forward to:
* Deck building features
* Advanced search features

---

## Getting Started
Repository  [Docker Hub
](https://hub.docker.com/r/whoisjerry/public-repo)

Run with:
```
docker run -d -p 8080:8080 whoisjerry/public-repo
```
Stop with:
```
docker stop $(docker ps -q)
```
Remove all containers:
```
docker rm $(docker ps -a -q)
```
Remove all images:
```
docker rmi $(docker images -q)
```

---

## Workflow Automations
CI/CD pipeline built using GitHub actions
* Build Docker image
* Push to DockerHub