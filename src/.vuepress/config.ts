import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "小猫会发光",
      description: "又活一天.",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
