import nav from './configs/navbar.js';
import sidebar from './configs/sidebar.js';

export default {
    lang: 'zh-CN',
    title: '与光同行',
    description: '个人学习笔记 ✍',
    srcDir: 'src',
    cleanUrls: 'without-subfolders',
    scrollOffset: 'header',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav,
        sidebar,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/sg996/sg996.github.io' },
            {
                icon: {
                    svg: '<svg t="1663266323098" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2880" width="200" height="200"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" p-id="2881"></path></svg>'
                },
                link: 'https://gitee.com/sg996/sg996'
            }
        ],
        editLink: {
            pattern: 'https://github.com/sg996/sg996.github.io/edit/main/src/:path',
            text: '在 github 上编辑此页'
        },
        lastUpdated: true,
        lastUpdatedText: '最后更新',
        docFooter: {
            prev: '前一篇',
            next: '下一篇'
        },
        outlineTitle: '本页目录',
        returnToTop: '返回顶部',
        appearance: '外观',
        pageNotFound: '页面未找到',
        deadLink: {
            before: '你打开了一个不存在的链接：',
            after: '。'
        },
    },
}