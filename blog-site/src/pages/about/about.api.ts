import type { About } from "./about.model";

export async function getAbout(): Promise<About> {
  return {
    picture: "https://picsum.photos/200",
    fullname: "John Doe",
    shortbio: "Web Developer & Tech Enthusiast",
    extendedBio:
      "John Doe is a passionate web developer with over 10 years of experience in building modern web applications. He specializes in JavaScript frameworks and loves exploring new technologies. In his free time, he contributes to open-source projects and writes technical blogs about frontend development.",
  };
}
