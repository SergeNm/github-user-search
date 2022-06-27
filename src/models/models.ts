export interface Button {
  label: string;
}

export interface Theme {
  themeName: 'light' | 'dark'
}

export interface User {
  login: string;
  avatar_url: string;
  type: string | undefined;
}

export interface UserDetail {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  followers: number;
  public_repos: number;
  following: number;
  bio: string;
  company?: string;
  hireable?: boolean;
  email?: string;
  blog?: string;
}

export interface UserName {
  login: string;
}
export interface SearchQuery {
  query: string;
}

export interface Repo {
  name: string;
  description: string;
  stargazers_count: number;
  forks: number;
  language: string;
  html_url: string;
}
