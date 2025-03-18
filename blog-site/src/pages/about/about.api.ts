import { mapContentToModel } from '@content-island/api-client';
import client from '../../lib/client';
import type { About } from './about.model';

export async function getAbout(): Promise<About> {
  const AboutContentCollection = await client.getContent('67c9817f98e17b1396f20d0f', {
    contentType: 'About',
  });

  return mapContentToModel<About>(AboutContentCollection);
  // return {
  //   picture: "https://picsum.photos/200",
  //   fullname: "John Doe",
  //   shortbio: "Web Developer & Tech Enthusiast",
  //   extendedBio:
  //     "John Doe is a passionate web developer with over 10 years of experience in building modern web applications. He specializes in JavaScript frameworks and loves exploring new technologies. In his free time, he contributes to open-source projects and writes technical blogs about frontend development.",
  // };
}
