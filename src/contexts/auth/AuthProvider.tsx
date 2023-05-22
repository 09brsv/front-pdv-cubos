import React from 'react';
import cookies from 'js-cookie';
import { AuthContext } from './AuthContexts';
import { useApi } from '@/hooks/useApi';
import { AxiosError } from 'axios';

type TDataError = {
  mensagem: string;
};

type TDataUser = {
  usuario: {
    id: number;
    nome: string;
    email: string;
  };
  token: string;
};
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const api = useApi();

  const signin = async (
    email: string,
    password: string
  ): Promise<boolean | TDataError> => {
    const data: TDataUser | Error = await api.signin(email, password);
    
    if (data instanceof Error) {
      const error = data as AxiosError<TDataError>;
      if (!error.response) return false;
      return error.response.data;
    }

    if (data.usuario && data.token) {
      cookies.remove('token');
      cookies.set('token', data.token);

      return true;
    }
    return false;
  };

  const signout = () => {
    cookies.remove('token');
  };

  return (
    <AuthContext.Provider value={{ signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
