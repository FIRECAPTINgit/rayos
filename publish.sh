#!/bin/bash
yarn build
rsync -vaz --delete --progress -e 'ssh -o StrictHostKeyChecking=no -i ~/.ssh/andy-osx-laptop.pem' ./build/ ubuntu@edinborough.org:/home/ubuntu/rayos.edinborough.org