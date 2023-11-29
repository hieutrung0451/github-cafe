import axios from 'axios';
import { UserGithub } from '../../types/schema';

// const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL;
// const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN;

const GITHUB_URL = 'https://api.github.com';
const GITHUB_TOKEN = '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';

const github = axios.create({
  baseURL: GITHUB_URL,
});

// Get search result
export const searchUsers = async (text: string) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await github.get(`/search/users?${params}`);

  const { items }: { items: UserGithub[] } = response.data;

  return items;
};

// Get user and repos
export const getUserAndRepos = async (login: string) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};
