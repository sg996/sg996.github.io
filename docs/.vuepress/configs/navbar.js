module.exports = [
    {
        text: "首页",
        link: "/",
    },
    {
        text: "书签",
        link: "/bookmarks/",
    },
    {
        text: "博客",
        children: [
            {
                text: "CSS 笔记",
                link: "/blog/CSS/",
            },
            {
                text: "JavaScript",
                link: "/blog/JavaScript/",
            },
            {
                text: "Git",
                link: "/blog/git/",
            },
            {
                text: "其他",
                link: "/blog/Others/",
            },
        ],
    },
    {
        text: "插件",
        link: "/plugin/",
    },
    {
        text: "关键字",
        link: "/keywords/",
    },
    {
        text: "仓库",
        children: [
            {
                text: "GitHub",
                link: "https://github.com/sg996/sg996.github.io",
            },
            {
                text: "Gitee",
                link: "https://gitee.com/sg996/sg996",
            },
        ],
    },
];
