import Header from '@/components/Header';
import styles from './page.module.css';
import Link from 'next/link';
import Logout from '@/components/Icons/Logout';

const Project = () => {
  return (
    <div style={{ width: '100%' }}>
      <Logout />
      <Header>
        <Link className={styles.nav} href="/development">
          Desenvolvedores
        </Link>
        <Link className={styles.nav} href="#" style={{ pointerEvents: 'none' }}>
          Projeto
        </Link>
      </Header>
      <main className={styles.main}>
        <aside className={styles.aside}>
          <h2>Tecnologias usadas</h2>
          <p>Javascript</p>
          <p>Nodejs</p>
          <p>Express</p>
          <p>PostgreSQL</p>
          <p>Git</p>
          <p>JWT</p>
          <p>Bcrypt</p>
          <p>Jest</p>
          <p>Knex</p>
          <p>Nodemailer</p>
        </aside>
        <div className={styles.preview}>
          <h2>Pré-visualização</h2>
          <iframe
            src="https://giphy.com/embed/jwytTK4KKzAH95oNVe"
            width="480"
            height="270"
            allowFullScreen
          ></iframe>
        </div>
        <div style={{ margin: '4rem auto' }}>
          <strong>
            Link da api:{' '}
            <Link href="https://desafio-final-cubos-academy.vercel.app/">
              https://desafio-final-cubos-academy.vercel.app/
            </Link>
          </strong>
          <br /> <br />
          <strong>
            Link do repositório:{' '}
            <Link href="https://github.com/douglas1777/Desafio-Final-Cubos-Academy">
              https://github.com/douglas1777/Desafio-Final-Cubos-Academy
            </Link>
          </strong>
        </div>
      </main>
    </div>
  );
};

export default Project;
