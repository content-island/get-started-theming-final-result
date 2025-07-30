import client from '../lib/client';
import type { Font, Theme, ThemeResponse } from './theme.model';

export const getTheme = async (): Promise<Theme> => {
  const themeContent = await client.getContent<ThemeResponse>({
    id: '688a417b4e051d2bea7eaf19',
  });

  const fontTitle = await client.getContent<Font>({
    id: themeContent.fontTitle,
  });

  const fontBody = await client.getContent<Font>({
    id: themeContent.fontBody,
  });

  return {
    id: themeContent.id,
    color: themeContent.color,
    fontTitle: fontTitle,
    fontBody: fontBody,
  };
};
