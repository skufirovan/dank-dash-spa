import Profile from '@components/profile/profile';
import * as s from './profile-page.module.css';

export const ProfilePage = () => {
  return (
    <div className={s.profile}>
      <Profile />
    </div>
  );
};
