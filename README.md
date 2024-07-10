# OSM Docker Project

This project is an exploration of OpenStreetMap (OSM), focusing on running it within a Docker container and utilizing Socket.IO for real-time communication.

## Getting Started

To get started with this project, you can build and run the Docker container using the following commands:

### Build the Docker Image
```bash
docker build -t osm-map-project-image .
```
OR
```bash
make build
```
### Run
```bash
docker run --name osm-map-project -p 9000:9000 -d osm-map-project-image
```
OR
```bash
make run
```
### Stopping
```bash
docker stop osm-map-project
```
OR
```bash
make stop
```
### Cleaning up
```bash
docker rm osm-map-project && docker rmi osm-map-project-image
```
OR
```bash
make clean
```
## I prefer
```bash
make
```
```bash
make fclean
```
