import Header from '@/components/Header';
import Link from 'next/link';
import styles from './page.module.css';
import Button from '@/components/Button';
import Logout from '@/components/Icons/Logout';

type TDataDevs = {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  blog: string;
  bio: string;
};
const githubApi = 'https://api.github.com/users/';

const Dashboard = async () => {
  const fetchDevelopments = Promise.all([
    fetch(`${githubApi}09brsv`),
    fetch(`${githubApi}douglas1777`),
    fetch(`${githubApi}HSfigueiredo`),
    fetch(`${githubApi}Luizmunhoz`)
  ]).then((responseArray) => {
    const data = responseArray.map((response) => response.json());
    return Promise.all(data);
  });

  const getDevelopments: TDataDevs[] = await fetchDevelopments.then(
    (response) => response
  );

  return (
    <div>
      <Logout />
      <Header>
        <Link
          className={styles.nav}
          href="/dashboard"
          style={{ pointerEvents: 'none' }}
        >
          Desenvolvedores
        </Link>
        <Link className={styles.nav} href="/project">
          Projeto
        </Link>
      </Header>
      <main className={styles.main}>
        {getDevelopments &&
          getDevelopments.map((dev) => {
            return (
              <div key={dev.login} className={styles.dev}>
                <div style={{textAlign: 'center'}}>
                  <img src={dev.avatar_url} alt={`imagem_${dev.name}`} />
                </div>
                <p>{dev.name}</p>
                <strong>{dev.bio}</strong>
                <Link href={dev.html_url} target="_blank">
                  <Button>Github</Button>
                </Link>
                <Link href={dev.blog} target="_blank">
                  <Button>Portfólio</Button>
                </Link>
              </div>
            );
          })}
      </main>
    </div>
  );
};

export default Dashboard;
