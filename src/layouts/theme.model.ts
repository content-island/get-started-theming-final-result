export interface Font {
  id: string;
  name: string;
  url: string;
}

export interface ThemeResponse {
  id: string;
  color: string;
  fontTitle: string;
  fontBody: string;
}

export interface Theme {
  id: string;
  color: string;
  fontTitle: Font;
  fontBody: Font;
}
