import { Outlet } from 'react-router';
import NavBar from '../components/NavBar';

export default function Layout() {
  return (
    <div className='container-xl'>
      <NavBar />
      <div className='p-4'>
        <Outlet />
      </div>
    </div>
  );
}
