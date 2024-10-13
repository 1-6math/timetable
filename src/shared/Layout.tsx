import { Outlet } from 'react-router';
import '../App.css';

const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Layout;
