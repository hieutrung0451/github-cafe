import { UsersGithub, UserGithub, UserRepo } from '../../types/schema';

interface GithubState {
  users: UsersGithub[];
  user: UserGithub;
  repos: UserRepo[];
  loading: boolean;
  inputSearch: string;
}

interface GetUsers {
  type: 'GET_USERS';
  payload: UsersGithub[];
}

interface SetLoading {
  type: 'SET_LOADING';
}

interface ClearUsers {
  type: 'CLEAR_USERS';
}

interface GetUserAndRepos {
  type: 'GET_USER_AND_REPOS';
  payload: {
    user: UserGithub;
    repos: UserRepo[];
  };
}

type GithubAction = GetUsers | SetLoading | ClearUsers | GetUserAndRepos;

const githubReducer = (state: GithubState, action: GithubAction) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case 'GET_USER_AND_REPOS':
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};

export default githubReducer;
