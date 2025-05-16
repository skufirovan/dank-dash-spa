import { Outlet } from 'react-router-dom';
import * as s from './root.module.css';

const Root = () => {
  return (
    <main className={s.root}>
      <Outlet />
    </main>
  );
};

export default Root;
