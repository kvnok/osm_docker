all: build run

build:
	docker build -t osm-map-project-image .

run:
	docker run --name osm-map-project -p 9000:9000 -d osm-map-project-image

stop:
	docker stop osm-map-project

clean:
	docker rm osm-map-project && docker rmi osm-map-project-image

fclean: stop clean

re: all build run stop clean fclean
