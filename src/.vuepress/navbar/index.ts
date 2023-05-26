import { navbar } from "vuepress-theme-hope";

export const myNavbar = navbar([
  "/",
  {
    text: "文 章",
    icon: "article",
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
    text: "随 笔",
    icon: "note",
    link: "/随笔/",
  },
]);

