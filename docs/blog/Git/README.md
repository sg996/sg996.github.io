# Git 命令

::: tip 学习资料

- [Git 官方网站](https://git-scm.com/book/zh/v2)
- [常用 Git 命令清单 - 阮一峰](http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html)
- [Git 常用命令参考手册](https://github.com/xjh22222228/git-manual)`GitHub`
- [🛠Git 常用操作总结](https://lhammer.cn/2018/05/12/git-hot-key/)
- [Git 中文速查表 - ZDZN 文档教程](https://doc.zdzn.net/cheatsheet/git.html)
- [Git 常用命令 - 语雀](https://www.yuque.com/docs/share/e7ad6091-bae2-4764-bf02-f7d35f7b7897?#%20%E3%80%8Agit%20%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4%E3%80%8B)
- [Learn Git Branching](https://learngitbranching.js.org/?locale=zh_CN)`在线游戏`

:::

## 1. 配置

```sh
# 检查配置信息
$ git config --list
$ git config --global -l   // 查看全局配置列表
$ git config --local -l    // 查看局部配置列表

# 查看所有的配置以及它们所在的文件
$ git config --list --show-origin

# 修改本地默认分支 master变为main
$ git config --global init.defaultBranch main

# 设置全局用户名/邮箱
$ git config --global user.name "姓名"
$ git config --global user.email "example@example.com"

# 设置当前工作区仓库用户名/邮箱
$ git config --local user.name "姓名"
$ git config --local user.email "example@example.com"

# 检查 git 的某一项配置
$ git config user.name
$ git config user.email

# 删除配置
$ git config --unset --global user.name
$ git config --unset --global user.email

# 记住提交账号密码, 下次操作可免账号密码
$ git config --global credential.helper store   // 永久
$ git config --global credential.helper cache   // 临时，默认15分钟
```

## 2. 初始化仓库

```sh
# 当前目录生成 .git 文件
$ git init

# 在当前目录下创建一个裸仓库，里面只有 .git 下的所有文件
$ git init --bare

# 新建一个目录并初始化
$ git init <project-name>
```

## 3. 克隆项目

```sh
# 下载远程项目
$ git clone <url>

# 克隆所有分支并切换到 gh-pages 分支上
$ git clone -b gh-pages git@github.com:sg996/vue3-todo-list.git

# 克隆指定分支 --single-branch
$ git clone -b gh-pages --single-branch git@github.com:sg996/vue3-todo-list.git
```

## 4. 管理仓库

:::tip 介绍
`git remote` 命令用来管理远程仓库。
通常一个项目对应多个仓库就需要用到 `git remote`， 比如要推送到 `GitHub` / `Gitee` / `GitLab`， 就可以用 `git remote` 来管理多个仓库地址。
`origin` 是仓库默认名字。
:::

```sh
# 查看当前项目远程仓库名称
# （一般打印 origin，这是仓库默认名字，除非有多个远程仓库地址。）
$ git remote

# 查看当前项目远程仓库地址
$ git remote -v

# 自定义远程仓库名称（example 是自定义名字）
$ git remote add <example> git@github.com:sg996/vue3-todo-list.git

# 查看指定远程仓库信息
$ git remote show <example>

# 重命名远程仓库
$ git remote rename <oldName> <newName>

# 移除远程仓库
$ git remote remove <example>

# 修改远程仓库地址，从HTTPS更改为SSH
$ git remote set-url origin git@github.com:sg996/vue3-todo-list.git

# 推送指定仓库
$ git push <example>
```

## 5. 暂存文件

```sh
# 暂存所有
$ git add -A

# 暂存某个文件
$ git add ./README.md

# 暂存当前目录所有改动文件
$ git add .

# 暂存一系列文件
$ git add 1.txt 2.txt ...
```

## 6. 提交文件

```sh
# 提交的描述信息
$ git commit -m "changes log"

# 只提交某个文件
$ git commit README.md -m "message"

# 提交并显示diff变化
$ git commit -v

# 允许提交空消息，通常必须指定 -m 参数
$ git commit --allow-empty-message

# 重写上一次提交信息，确保当前工作区没有改动
$ git commit --amend -m "new message"

# 跳过验证，如果使用了类似 husky 工具。
$ git commit --no-verify -m "message"
```

## 7. 推送远端

```sh
# 默认推送当前分支
# （等价于 git push origin，实际上推送到一个叫 origin 默认仓库名字）
$ git push

# 推送到主分支
$ git push -u origin main

# 本地分支推送到远端分支， 本地分支:远端分支
$ git push origin <branch-name>:<branch-name>

# 强制推送, --force 缩写
$ git push -f git@github.com:sg996/vue3-todo-list.git main

# 在现有分支与指定的远端分支之间建立追踪关系并推送
$ git push --set-upstream origin main
```

## 8. 查看分支

```sh
# 查看所有分支
$ git branch -a

# 查看本地分支
$ git branch

# 查看远程分支
$ git branch -r

# 查看本地所关联的远程分支
$ git branch -v

# 打开官方帮助文档
$ git branch --help
```

## 9. 切换分支一

```sh
# 切换到指定分支
$ git checkout <branch-name>

# 切换上一个分支
$ git checkout -

# 强制切换（如果文件未保存修改会直接覆盖掉）
$ git checkout -f main

# 创建分支并切换
$ git checkout -b <branch-name>

# 强制创建分支（不切换分支）
$ git checkout -B <branch-name>

# 切换远程分支（如果用了 git remote 添加一个新仓库就需要用 -t 进行切换）
$ git checkout -t upstream/main
```

## 10. 切换分支二

:::tip 介绍
`git switch` 命令在 `git` 版本 2.23 引入, 用于切换分支。
`git checkout` 同样可以切换分支, `git switch` 意义在哪里？ 因为 `git checkout` 不但可以切换分支还可以撤销工作，导致命令含糊不清，所以引入了 git switch。
:::

```sh
# 切换到指定分支
$ git switch <branch-name>

# 切换到上一个分支
$ git switch -

# 强制切换（如果文件未保存修改会直接覆盖掉）
$ git switch -f main

# 创建分支并切换
$ git switch -c <branch-name>

# 强制创建分支（不切换分支）
$ git switch -C <branch-name>

# 切换远程分支（如果用了 git remote 添加一个新仓库就需要用 -t 进行切换）
$ git switch -t upstream/main
```

## 11. 创建分支 & 检出远程分支

```sh
# 创建分支
$ git branch <branch-name>

# 强制创建分支（不输出任何警告或信息）
$ git branch -f <branch-name>

# 创建分支并切换
$ git checkout -b <branch-name>

# 强制创建分支（不切换分支）
$ git checkout -B <branch-name>

# 创建分支并切换
$ git switch -c <branch-name>

# 强制创建分支（不切换分支）
$ git switch -C <branch-name>

# 检出远程所有分支
$ git fetch

# 检出远程指定分支
$ git fetch origin :<branch-name>
$ git fetch origin master:<branch-name>
```

## 12. 删除分支

```sh
# 删除指定分支
$ git branch -d <branch-name>

# 强制删除未完全合并的分支
$ git branch -D <branch-name>
# 等价于
$ git branch --delete --force <branch-name>

# 删除远程分支
$ git push origin :<branch-name>
$ git push origin --delete <branch-name>
```

## 13. 重命名分支

```sh
# 修改分支名称
$ git branch -m <branch-name>

# 强制修改分支名称
$ git branch -M <branch-name>

# 删除远程旧分支
$ git push origin :<old-branch>

# 将重命名分支推送到远程
$ git push -u origin <new-branch>

# 重命名指定分支
$ git branch -m <old-branch> <new-branch>
```

## 14. 临时保存

```sh
# 保存当前修改工作区内容
$ git stash

# 保存时添加注释（推荐使用此命令）
$ git stash save "修改了#28 Bug"

# 保存包含没有被git追踪的文件
$ git stash -u

# 查看当前保存列表
$ git stash list

# 恢复修改工作区内容，会从 git stash list 移除掉
# 恢复最近一次保存内容到工作区，默认会把暂存区的改动恢复到工作区
$ git stash pop
# 恢复指定 id，通过 git stash list 可查到
$ git stash pop stash@{1}
# 恢复最近一次保存内容到工作区，但如果是暂存区的内容同样恢复到暂存区
$ git stash pop --index

# 与 pop 命令一致，唯一不同的是不会移除保存列表
$ git stash apply

# 清空所有保存
$ git stash clear

# 清空指定 stash id，如果 drop 后面不指定id清除最近的一次
$ git stash drop stash@{0}
# 清除最近一次
$ git stash drop
```

## 15. 文件状态

```sh
# 完整查看文件状态
$ git status

# 以短格式给出输出
$ git status -s

# 忽略子模块
$ git status --ignore-submodules

# 显示已忽略的文件
$ git status --ignored
```

## 16. 日志

```sh
# 查看完整历史提交记录
$ git log

# 查看前N次提交记录 commit message
$ git log -2

# 查看前N次提交记录，包括diff
$ git log -p -2

# 从 commit 进行搜索, 可以指定 -i 忽略大小写
$ git log -i --grep="fix: #28"

# 从工作目录搜索包含 alert(1) 这段代码何时引入
$ git log -S "alert(1)"

# 查看指定作者历史记录
$ git log --author=源代码

# 查看某个文件的历史提交记录
$ git log README.md

# 只显示合并日志
$ git log --merges

# 以图形查看日志记录, --oneline 可选
$ git log --graph --oneline

# 以倒序查看历史记录
$ git log --reverse
```

> git shortlog 以简短的形式输出日志，通常用于统计贡献者代码量。

```sh
# 默认以贡献者分组进行输出
$ git shortlog

# 列出提交者代码贡献数量，打印作者和贡献数量
$ git shortlog -sn

# 以提交贡献数量排序并打印出message
$ git shortlog -n

# 采用邮箱格式化的方式进行查看贡献度
$ git shortlog -e
```

> git reflog 通常被引用为 安全网，当 git log 没有想要的信息时可以尝试用 git reflog。

```sh
# 当回滚某个版本时记录不是保存在 git log 中，
# 想要找到这条回滚版本信息时 git reflog 就用上了。
$ git reflog
# 等价于
$ git log -g --abbrev-commit --pretty=oneline
```

## 17. 其他命令

```sh
# 切换目录
$ cd e:
$ cd ..
$ cd ...
$ cd ~
# 使用 通配符*，只有一个f开头的文件夹，它就会进入到这个文件夹
$ cd f*

# 查看文件内容
$ cat README.md

# 查看当前目录路径
$ pwd

# 查看当前目录中的所有文件
$ ls
# windows不起作用
$ ll

# 新建一个文件
$ touch README.md
$ echo "
    hello
	world" > README.md

# 新建一个文件夹
$ mkdir <file-name>

# 删除一个文件
$ rm README.md

# 删除一个文件夹
$ rm -r <file-name>

# 清屏
$ reset
$ clear
```

> 参考文档：[Git 常用命令参考手册](https://github.com/xjh22222228/git-manual)
