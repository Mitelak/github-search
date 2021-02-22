const API_BASE = process.env.REACT_APP_GITHUB_API_URL;

const endpoints = {
  getUser: (userName: string) =>
    `${API_BASE}/users/${encodeURIComponent(userName)}`,

  getSearchRepositories: (userName: string) =>
    `${API_BASE}/search/repositories?q=user:${encodeURIComponent(
      userName
    )}&sort=stars&per_page=3`,
};

export default endpoints;
