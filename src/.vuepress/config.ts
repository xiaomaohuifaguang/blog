import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "小猫会发光",
  description: "太阳照常升起",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
