import type { Media } from '@content-island/api-client';

export interface About {
  id: string;
  language: 'en';
  picture: Media;
  fullname: string;
  shortBio: string;
  extendedBio: string;
}
