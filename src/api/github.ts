import useFetch from 'hooks/useFetch';
import endpoints from './endpoints';

interface UserData {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  bio: string | null;
}

export interface RepositoryShape {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
}

interface RepositoriesData {
  total_count: number;
  incomplete_results: boolean;
  items: RepositoryShape[];
}

export const useUser = (userName: string) => {
  return useFetch<UserData>(endpoints.getUser(userName), {
    enabled: !!userName,
  });
};

export const useRepositories = (userName: string) => {
  return useFetch<RepositoriesData>(endpoints.getSearchRepositories(userName), {
    enabled: !!userName,
  });
};

const github = {
  useUser,
  useRepositories,
};

export default github;
