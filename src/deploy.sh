#!/usr/bin/env sh

yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m newdeploy &&
git remote add origin git@github.com:JXM-Jason/visual.git &&
git push -uf origin master:gh-pages &&
cd -;
