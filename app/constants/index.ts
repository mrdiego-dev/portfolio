import GitHub from "@/assets/icons/GitHub.vue";
import LinkedIn from "@/assets/icons/LinkedIn.vue";

export const LOCALE_KEY = "locale";

export const navigation = [
  { name: "header.nav.about", href: "#about" },
  { name: "header.nav.experience", href: "#experience" },
  { name: "header.nav.projects", href: "#projects" },
];

export const socialMedia = [
  { name: "Github", link: "https://github.com/DiegoMMR", icon: GitHub },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/diego-m-rivera", icon: LinkedIn },
];

export const startDate = new Date(2018, 1);
