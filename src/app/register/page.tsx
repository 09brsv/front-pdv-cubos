'use client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Link from 'next/link';
import styles from './page.module.css';
import React, { ChangeEvent, useState } from 'react';
import Button from '@/components/Button';
import { api } from '@/services/axios';
import { useRouter } from 'next/navigation';
import { AxiosError } from 'axios';

interface IUserRegister {
  name: string;
  email: string;
  password: string;
}
type TDataMessage = {
  mensagem: string;
};

const Register = () => {
  const router = useRouter();

  const [fieldValues, setFieldValues] = useState<IUserRegister>({
    name: '',
    email: '',
    password: ''
  });

  const clearAllFieldValues = () => {
    setFieldValues({ name: '', email: '', password: '' });
  };

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFieldValues({ ...fieldValues, [e.target.name]: e.target.value });
  };

  const { name, email, password } = fieldValues;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/usuario', {
        nome: name,
        email,
        senha: password
      });
      toast.success('Cadastro realizado com sucesso', {
        autoClose: 2000
      });
      clearAllFieldValues();
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    } catch (error) {
      const err = error as AxiosError;
      const errorAxios = err.response?.data as TDataMessage;
      toast.warn(errorAxios.mensagem);
      return;
    }
  };

  return (
    <>
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
        <h2>Cadastrar</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="name" className={styles.label}>
            Nome:
          </label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Digite o seu nome"
            onChange={handleFormChange}
            className={styles.input}
            required
          />
          <br />
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
          <Button type="submit">Cadastrar</Button>
        </form>
        <Link
          href="/login"
          className={styles.link}
          style={{ color: '#000000', textDecoration: 'underline' }}
        >
          Fazer login
        </Link>
        <ToastContainer />;
      </main>
    </>
  );
};

export default Register;
