import { api } from '@/services/axios';

export const useApi = () => ({
  signin: async (email: string, password: string) => {
    try {
      const { data } = await api.post('/login', { email, senha: password });

      return data;
    } catch (error) {
      return error;
    }
  }
});
