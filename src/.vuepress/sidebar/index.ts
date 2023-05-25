import { sidebar } from "vuepress-theme-hope";

export const mySidebar = sidebar({
  "/": [
    "",
    {
      text: "文章",
      icon: "note",
      prefix: "文章/",
      children: "structure",
    }
  ],
});