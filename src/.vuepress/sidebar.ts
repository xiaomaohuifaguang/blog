import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  // "/": [
  //   "",
  //   {
  //     text: "如何使用",
  //     icon: "laptop-code",
  //     prefix: "demo/",
  //     link: "demo/",
  //     children: "structure",
  //   },
  //   {
  //     text: "文章",
  //     icon: "book",
  //     prefix: "posts/",
  //     children: "structure",
  //   },
  //   "intro",
  //   {
  //     text: "幻灯片",
  //     icon: "person-chalkboard",
  //     link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
  //   },
  // ],
  // "/posts/": [
  //   "",
  //   {
  //     text: "文章",
  //     icon: "book",
  //     prefix: "",
  //     children: "structure",
  //   },
  //   "intro",
  //   {
  //     text: "幻灯片",
  //     icon: "person-chalkboard",
  //     link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
  //   },
  // ],
  "/学习记录/": [
    {
      text: "学习记录",
      icon: "clipboard",
      prefix: "",
      children: "structure",
    }
  ]
});
