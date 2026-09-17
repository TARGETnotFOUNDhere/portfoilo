const config = {
  title: "Lakshya Purohit | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Lakshya, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work and ideas. Let's build something amazing together!",
    short:
      "Discover the portfolio of Lakshya, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Lakshya",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Lakshya Purohit",
  email: "naresh.khatri2345@gmail.com",
  site: "https://nareshkhatri.dev",

  // for github stars button
  githubUsername: "naresh-khatri",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/Lakshya46392190",
    linkedin: "https://www.linkedin.com/in/lakshya-purohit-065707372/",
    instagram: "https://www.instagram.com/hotchaddi",
    facebook: "https://www.facebook.com/HotChaddi/",
    github: "https://github.com/TARGETnotFOUNDhere",
  },
};
export { config };
