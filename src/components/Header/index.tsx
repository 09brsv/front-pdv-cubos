import Link from 'next/link';
import styles from './index.module.css';

const Header = ({ children }: { children: React.ReactNode }) => {
  return <header className={styles.header}>{children}</header>;
};

export default Header;
