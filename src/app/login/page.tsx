'use client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from '@/contexts/auth/AuthContexts';
import styles from './page.module.css';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react';
import Button from '@/components/Button';

interface IUserRegister {
  name: string;
  email: string;
  password: string;
}

Cookies.remove('token');

const Login = () => {
  const router = useRouter();
  const auth = React.useContext(AuthContext);

  const [fieldValues, setFieldValues] = useState<Omit<IUserRegister, 'name'>>({
    email: '',
    password: ''
  });

  const { email, password } = fieldValues;

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFieldValues({ ...fieldValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const login = await auth.signin(email, password);

    if (login) {
      if (login !== true) {
        toast.warn(login.mensagem);
      } else {
        router.push('/development');
      }
    } else {
      toast.warn('Erro interno do servidor');
    }
    setFieldValues({
      email,
      password: ''
    });
  };

  return (
    <div style={{ width: '100%' }}>
      <header>
        <Link
          href="/"
          style={{ position: 'absolute', padding: '3rem' }}
          className={styles.link}
        >
          Home
        </Link>
      </header>
      <main className={styles.main}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Digite o seu email"
            onChange={handleFormChange}
            className={styles.input}
            required
          />
          <br />
          <label htmlFor="password" className={styles.label}>
            Senha:
          </label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="********"
            onChange={handleFormChange}
            autoComplete="on"
            className={styles.input}
            required
          />
          <br />
          <Button type="submit">Entrar</Button>
        </form>
        <Link
          href="/register"
          className={styles.link}
          style={{ color: '#000000', textDecoration: 'underline' }}
        >
          Criar uma conta
        </Link>
        <ToastContainer />
      </main>
    </div>
  );
};

export default Login;
