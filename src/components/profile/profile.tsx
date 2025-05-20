import { isReceivingSelector, logout, userSelector } from '@services/slices/user';
import { useDispatch, useSelector } from '@services/store';
import Button from '@components/ui/button/button';
import * as s from './profile.module.css';

const Profile = () => {
  const dispatch = useDispatch();
  const isReceiving = useSelector(isReceivingSelector);
  const user = useSelector(userSelector);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <section>
      <h3 className={s.title}>Личный кабинет</h3>
      <p className={s.text}>
        <span className={s.textMedium}>Почта: </span>
        {user?.email}
      </p>
      <p className={`${s.text} ${s.textMedium}`}>
        {user?.isActivated ? 'Ваша учетная запись подтверждена' : 'Подтвердите учетную запись'}
      </p>
      <Button onClick={handleLogout}>{isReceiving ? 'Выход...' : 'Выйти'}</Button>
    </section>
  );
};

export default Profile;
