export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

export interface Operation {
  value?: string | number,
  operator?: '*' | '/' | '-' | '+' | '.' | 'del' | 'reset' | '=';
}
export interface Button {
  label: string;
}

export interface ButtonCalc extends Button {
  operation?: Operation;
  setValue?: React.Dispatch<React.SetStateAction<number>>;
}

export interface InputCalc {
  value: number;
  // handleAdd: (e: React.FormEvent) => void;
}

export interface Theme {
  themeName: 'light' | 'dark'
}

export interface Country {
  name: string,
  image: string,
  capital: string,
  region: string,
  area: string | number
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
