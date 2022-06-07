const { copyCode } = require("vuepress-plugin-copy-code2");
const navbar = require('./configs/navbar.js');
const sidebar = require('./configs/sidebar.js');

module.exports = {
    docsDir: 'docs',
    lang: 'zh-CN',
    title: '源代码',
    description: '个人学习笔记 ✍',
    host: 'localhost',
    port: 5000,
    open: true,
    themeConfig: {
        darkMode: true,
        logo: null,
        locales: {
            '/': {
                navbar,
                sidebar,
                // page meta
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdatedText: '上次更新',
                contributorsText: '贡献者',

                // custom containers
                tip: '提示',
                warning: '注意',
                danger: '警告',

                // 404 page
                notFound: [
                    '这里什么都没有',
                    '我们怎么到这来了？',
                    '这是一个 404 页面',
                    '看起来我们进入了错误的链接',
                ],
                backToHome: '返回首页',

                // a11y
                openInNewWindow: '在新窗口打开',
                toggleDarkMode: '切换夜间模式',
                sidebarDepth: 3
            }
        }
    },
    plugins: [
        // https://vuepress-theme-hope.github.io/v2/copy-code/zh/
        copyCode({
            // 插件选项
            pure: true,
        }),
    ]
}