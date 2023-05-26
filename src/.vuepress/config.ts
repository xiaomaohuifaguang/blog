import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
// import { searchProPlugin } from "vuepress-plugin-search-pro";
import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/blog/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "小猫会发光",
      description: "又活一天.",
    },
  },
  plugins: [
    // searchProPlugin({
    //   // 配置选项
    // })
  ],
  theme,
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue"
    ),
  },
});
