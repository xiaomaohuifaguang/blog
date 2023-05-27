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
        description: "钱难挣，屎难吃",
        // intro: "/intro.html",
      },
      editLink: false,
    }
  },
  encrypt: {
    config: {
    },
  },

  plugins: {
    blog: {
      excerptLength: 50
    },
    comment: {
      comment: false,
      provider: "Giscus",
      repo: "xiaomaohuifaguang/blog",
      repoId: "R_kgDOJnfkXw",
      category: "Announcements",
      categoryId: "DIC_kwDOJnfkX84CWwxI",
      lazyLoading: true,//懒加载
      strict: false,
      lightTheme: "light",
      darkTheme: "dark"
      
    },
    copyCode:{
      fancy: true,
    },
    copyright:{
      global: true,
      author: "小猫会发光"
    },
    photoSwipe: true,
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      card: true,
      codetabs: true,
      container: true,
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
}, { custom: true });
