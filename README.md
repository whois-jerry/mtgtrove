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

## Workflow Automations - GitHub Actions
**CI/CD pipeline**: On push and pull requests to main branch
* Build Docker image
* Push to DockerHub

[comment]: <![image](https://user-images.githubusercontent.com/82949691/124372089-abd7b380-dcba-11eb-9cf0-7243154f725d.png)>
<img src="https://user-images.githubusercontent.com/82949691/124372089-abd7b380-dcba-11eb-9cf0-7243154f725d.png" width="1000">

**Notifications**: On new issue opened
* Twilio SMS notification

[comment]: <![image](https://user-images.githubusercontent.com/82949691/124466295-17a84200-ddc9-11eb-8624-5d8cde8f1489.png)>
 <img src="https://user-images.githubusercontent.com/82949691/124466295-17a84200-ddc9-11eb-8624-5d8cde8f1489.png" width="1000">
