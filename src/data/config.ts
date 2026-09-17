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
  email: "lakshyapurohit006@gmail.com",
  site: "https://3d-portfolio-main-rho.vercel.app",

  // for github stars button
  githubUsername: "TARGETnotFOUNDhere",
  githubRepo: "portfoilo",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/Lakshya46392190",
    linkedin: "https://www.linkedin.com/in/lakshya-purohit-065707372/",
    github: "https://github.com/TARGETnotFOUNDhere",
  },
};
export { config };
