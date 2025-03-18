import client from '../../lib/client';
import type { SinglePost } from './post.model';
import { mapContentToModel } from '@content-island/api-client';

export async function getPosts(): Promise<SinglePost[]> {
  const response = await client.getContentList({
    contentType: 'Post',
  });

  const posts = response.map(content => mapContentToModel<SinglePost>(content));

  return posts;
  // return [
  //   {
  //     id: '1',
  //     title: 'Exploring Astro.js',
  //     date: '2025-03-06',
  //     summary: 'An introduction to Astro and its benefits for web development.',
  //     author: 'John Doe',
  //     content: 'Astro is a modern framework for building fast and efficient websites...',
  //     image: 'https://picsum.photos/800/400?random=1',
  //   },
  //   {
  //     id: '2',
  //     title: 'Using Markdown in Astro',
  //     date: '2025-02-20',
  //     summary: 'Learn how to use Markdown to write content in Astro.',
  //     author: 'Jane Smith',
  //     content: 'Markdown support in Astro makes it easy to create structured content...',
  //     image: 'https://picsum.photos/800/400?random=2',
  //   },
  //   {
  //     id: '3',
  //     title: 'Deploying Astro on Vercel',
  //     date: '2025-01-15',
  //     summary: 'Step-by-step guide to deploying an Astro site on Vercel.',
  //     author: 'Michael Johnson',
  //     content: 'Vercel is an ideal platform for deploying static websites, and Astro fits perfectly...',
  //     image: 'https://picsum.photos/800/400?random=3',
  //   },
  // ];
}
