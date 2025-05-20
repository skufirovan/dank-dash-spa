import { Link } from 'react-router-dom';
import * as s from './not-found.module.css';

const NotFound = () => {
  return (
    <div className={s.notFound}>
      <h1 className={s.title}>Ничего не найдено</h1>
      <Link className={s.text} to="/">
        На Главную
      </Link>
    </div>
  );
};

export default NotFound;
