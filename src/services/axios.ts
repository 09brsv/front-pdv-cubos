import axios from 'axios';

const baseURL = 'https://desafio-final-cubos-academy.vercel.app';

export const api = axios.create({
  baseURL
})
