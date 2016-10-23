#!/bin/bash

if [ "$TRAVIS_BRANCH" == "master" ]; then
  cd _site
git config --global user.name "Travis CI"
git config --global user.email "nobody@nobody.org"
git init
git add .
git commit -m "Travis is pushing it...pushing it real good :)"
git push --force --quiet "https://${GITHUB_TOKEN}@github.com/nickroberts/jekyll-typescript-webpack.git" master:gh-pages > /dev/null 2>&1
else
  echo "Travis doesn't get to push it :("
  exit 1
fi
