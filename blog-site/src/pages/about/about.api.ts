import { mapContentToModel } from '@content-island/api-client';
import client from '../../lib/client';
import type { About } from './about.model';

export async function getAbout(): Promise<About> {
  return await client.getContent<About>({ id: '685eb36e45767b0f312fce64' });
}
