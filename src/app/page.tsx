import Link from 'next/link';

import styles from './page.module.css';
import Button from '@/components/Button';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 style={{position: 'absolute', top: '5rem'}}>Projeto PDV</h1>
      
      <section style={{ width: '80%', maxWidth: '800px' }}>
        <h3 style={{ marginBottom: '1rem' }}>
          Projeto desenvolvido pela
          equipe <strong className={styles.kakashi}>Kakashi</strong> da{' '}
          <strong className={styles.cubos}>Cubos Academy</strong>.
        </h3>
        <h3>
          {' '}
          Nosso objetivo foi desenvolver uma API funcional para um PDV(Ponto de
          Venda)-Frente de caixa. Este é um projeto acadêmico piloto, com
          potencial para expansão e implementação de outras funcionalidades no
          futuro
        </h3>
      </section>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center'}}>
        <Button>
          <Link href="/login" className={styles.link}>
            Ja sou cadastrado
          </Link>
        </Button>
        <Button>
          <Link href="/register" className={styles.link}>
            Não tenho cadastro
          </Link>
        </Button>
      </div>
    </main>
  );
}
