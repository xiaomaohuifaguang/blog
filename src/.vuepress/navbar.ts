import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/posts/",
  "/学习记录/",
  "个人介绍.md",
  "模板.md",
  "档案.md",
  "网站导航.md",
  {
    text: "项目",
    icon: "folder",
    prefix: "/projects/",
    children: [
      {
        text: "Joker-Box",
        link: "Joker-Box"
      }
    ]
  },
]);
