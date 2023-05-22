import { createContext } from 'react';

type TDataError = {
  mensagem: string;
};

export type TAuthContext = {
  signin: (email: string, password: string) => Promise<boolean | TDataError>;
  signout: () => void;
};

export const AuthContext = createContext<TAuthContext>(null!);
