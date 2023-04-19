#!/bin/bash

if [ -z "$2" ]
then
  echo "Please provide a package name."
  exit 1
fi

PACKAGE_NAME=$2

CONTAINER_NAME=$(docker ps --format "{{.Names}}" -f "name=ticket")

if [ -z "$CONTAINER_NAME" ]
then
  echo "Container not found. Please make sure it's running."
  exit 1
fi

echo "Adding package $PACKAGE_NAME to container $CONTAINER_NAME..."
docker exec -it $CONTAINER_NAME sh -c "cd /app && pnpm add -D $PACKAGE_NAME"
docker exec -it $CONTAINER_NAME sh -c "cd /app && pnpm install"
