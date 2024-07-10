# OSM Docker Project

This project is an exploration of OpenStreetMap (OSM), focusing on running it within a Docker container and utilizing Socket.IO for real-time communication.

## Getting Started

To get started with this project, you can build and run the Docker container using the following commands:

### Build the Docker Image
```bash
docker build -t osm-map-project .
```
Run the Container
```bash
docker run -p 9000:9000 osm-map-project
```
Stopping and Cleaning Up
```bash
docker stop osm-map-project
```
Cleaning Up
```bash
docker rm osm-map-project && docker rmi osm-map-project
```
Enjoy exploring OpenStreetMap!
