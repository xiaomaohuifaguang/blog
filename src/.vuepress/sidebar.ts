import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/posts/": [
    "",
    {
      text: "博文",
      icon: "book",
      prefix: "",
      children: "structure"
    },
    "intro"
  ],
  // "/学习记录/": [
  //   {
  //     text: "学习记录",
  //     icon: "folder",
  //     prefix: "",
  //     children: "structure",
  //   }
  // ]
});
