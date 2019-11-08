#!/bin/bash
git add build
git commit -m 'deploy'
git push -f --delete origin master
git subtree push --prefix build/ origin master
git push origin source