import { hopeTheme } from "vuepress-theme-hope";
import { myNavbar } from "./navbar/index.js";
import { mySidebar } from "./sidebar/index.js";

export default hopeTheme({
  // hostname: "https://xiaomaohuifaguang.github.io",

  author: {
    name: "小猫会发光",
    // url: "https://mrhope.site",
    email: "xiaomaohuifaguang@163.com"
  },

  iconAssets: "iconfont",

  logo: "/logo.png",

  repo: "xiaomaohuifaguang/blog",

  docsDir: "docs",

  blog: {
    medias: {
      GitHub: "https://github.com/xiaomaohuifaguang",
      Gitee: "https://gitee.com/xiaomaohuifaguang",
      Email: "mailto:xiaomaohuifaguang@163.com",
      // Baidu: "https://example.com",
      // BiliBili: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      // Email: "mailto:xiaomaohuifaguang@163.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      
      // Gitlab: "https://example.com",
      // Gmail: "mailto:info@example.com",
      // Instagram: "https://example.com",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: myNavbar,

      // sidebar
      sidebar: mySidebar,

      footer: "ALL IN",

      displayFooter: true,

      blog: {
        description: "是的 你知道的.",
        // intro: "/intro.html",
      },

      metaLocales: {
        // editLink: "Edit this page on GitHub",
      },
    }
  },

  encrypt: {
    config: {
      // "/demo/encrypt.html": ["1234"],
      // "/zh/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: true,

    comment: {
      provider: "Giscus",
    },
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});
