import { Outlet } from 'react-router-dom';
import AppHeader from '@components/app-header/app-header';
import * as s from './root.module.css';

const Root = () => {
  return (
    <div className={s.root}>
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
