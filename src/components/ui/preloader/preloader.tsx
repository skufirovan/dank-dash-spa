import * as s from './preloader.module.css';

const Preloader = () => {
  return (
    <div className={s.preloader}>
      <p className={s.text}>Загрузка...</p>
    </div>
  );
};

export default Preloader;
