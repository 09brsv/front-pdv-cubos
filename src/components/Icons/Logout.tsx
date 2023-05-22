import { FiLogOut } from 'react-icons/fi';

import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

function Logout(props: AnchorHTMLAttributes<HTMLAnchorElement>) {

  return (
    <Link
      {...props}
      href="/login"
      style={{ position: 'absolute', right: '2rem', top: '1rem' }}
    >
      <FiLogOut size="28px" color="black"></FiLogOut>
    </Link>
  );
}

export default Logout;
