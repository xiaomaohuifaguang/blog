import { navbar } from "vuepress-theme-hope";

export const myNavbar = navbar([
  "/",
  {
    text: "文章",
    icon: "edit",
    // prefix: "/文章/",
    link: "/文章/"
    // children: [
    //   {
    //     text: "旧的",
    //     icon: "edit",
    //     prefix: "旧的/",
    //     link:"旧的"
    //   }
    // ],
  },
  {
    text: "V2 文档",
    icon: "note",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);

