module.exports = {
  "/bookmarks/": [
    {
      text: "书签",
      children: [
        "/bookmarks/README.md",
      ],
    },
  ],
  "/blog/": [
    {
      text: "CSS 笔记",
      children: ["/blog/CSS/README.md"],
    },
    {
      text: "JavaScript",
      children: ["/blog/JavaScript/README.md", "/blog/JavaScript/jsTips.md"],
    },
    {
      text: "Git",
      children: [
        "/blog/Git/README.md",
        "/blog/Git/git-QA.md",
        "/blog/Git/npm.md"
      ],
    },
    {
      text: "其他",
      children: [
        "/blog/Others/README.md",
        {
          text: "实用小技巧",
          children: [
            "/blog/Others/UsefulTips/README.md",
            "/blog/Others/UsefulTips/ShortcutKeys.md",
          ],
        },
        "/blog/Others/TODO.md",
      ],
    },
  ],
  "/plugin/": [
    {
      text: "插件",
      children: [
        "/plugin/README.md",
        "/plugin/VSCode-QA.md",
        "/plugin/Google.md",
      ],
    },
  ],
};
