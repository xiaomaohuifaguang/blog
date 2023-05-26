import { sidebar } from "vuepress-theme-hope";

export const mySidebar = sidebar({
  "/文章/": [
    {
      text: "文章",
      icon: "note",
      prefix: "",
      children: "structure",
    }
  ],
  "/随笔/": [
    {
      text: "随笔",
      icon: "note",
      prefix: "",
      children: "structure",
    }
  ]
});