const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN;

// Get search result
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await fetch(
    `${GITHUB_URL}/search/users?${params}`
    // {
    //   headers: {
    //     Authorization: `token ${GITHUB_TOKEN}`,
    //   },
    // }
  );

  const { items } = await response.json();

  return items;
};

// Get singe user
export const getUser = async (login) => {
  const response = await fetch(
    `${GITHUB_URL}/users/${login}`
    // {
    //   headers: {
    //     Authorization: `token ${GITHUB_TOKEN}`,
    //   },
    // }
  );

  if (response === 404) {
    window.location = "/notfound";
  } else {
    const data = await response.json();

    return data;
  }
};

// get All repos
export const getRepos = async (login) => {
  const response = await fetch(`${GITHUB_URL}/users/${login}/repos`);
  const data = await response.json();

  return data;
};
