import { ReactNode, createContext, useReducer } from 'react';
import { UsersGithub, UserGithub, UserRepo } from '../../types/schema';
import githubReducer from './GithubReducer';
import InitialState from './InitialState';

interface GithubContextProps {
  users: UsersGithub[];
  user: UserGithub;
  repos: UserRepo[];
  loading: boolean;
  inputSearch: string;

  dispatch: React.Dispatch<any>;
}

const GithubContext = createContext<GithubContextProps>({
  ...InitialState,
  dispatch: () => null,
});

export const GithubProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(githubReducer, InitialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
