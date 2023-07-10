#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 初始化项目，自动化部署
# window
if [[ `uname` == 'MING' ]]; then
npm i rimraf -g
rimraf .git
fi
# mac 可使用
if [[ `uname` == 'Darwin' ]]; then
rm -rf .git
fi

git init

git config --local user.name "sg996"
git config --local user.email "1942459198@qq.com"

git add -A
git commit -m "update"

git remote add github-origin git@github.com:sg996/sg996.github.io.git
git remote add gitee-origin git@gitee.com:sg996/sg996.git

git push -f github-origin main
git push -f gitee-origin main:master

cd /
