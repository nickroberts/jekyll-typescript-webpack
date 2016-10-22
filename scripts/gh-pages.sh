#!/bin/bash

cd _site
git config --global user.name "Travis CI"
git config --global user.email "nobody@nobody.org"
git init
git add .
git commit -m "Travis is pushing it...pushing it real good"
git push --force --quiet "https://${GITHUB_TOKEN}@github.com/jekyll-typescript-webpack.git" master:gh-pages > /dev/null 2>&1
