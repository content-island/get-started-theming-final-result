import { mapContentToModel } from '@content-island/api-client';
import client from '../../lib/client';
import type { About } from './about.model';

export async function getAbout(): Promise<About> {
  return await client.getContent<About>({ id: '6889fee44e051d2bea7eaecb' });
}
