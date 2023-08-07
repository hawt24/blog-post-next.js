import LayoutStyle from '../styles/Layout.module.css'
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <>
      <Nav/>
      <div className={LayoutStyle.container}>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
