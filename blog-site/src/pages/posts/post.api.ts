import client from '../../lib/client';
import type { SinglePost } from './post.model';
import { mapContentToModel } from '@content-island/api-client';

export async function getPosts(): Promise<SinglePost[]> {
  const posts =  await client.getContentList<SinglePost>({
    contentType: 'Post',
  });

  return posts;
}
