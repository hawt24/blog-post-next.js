import Link from 'next/link';
import syles from '../styles/Nav.module.css'

const Navigation = () => {
  return (
    <nav className={syles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/new-blog">Create New Blog Post</Link> 
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
