import { Navigate } from 'react-router';
import { useSelector } from '@store';
import { isReceivingSelector, userSelector } from '@services/slices/user';
import Preloader from '@components/ui/preloader/preloader';

type ProtectedRouteProps = {
  onlyUnAuth?: boolean;
  children: React.ReactElement;
};

export const ProtectedRoute = ({ onlyUnAuth, children }: ProtectedRouteProps) => {
  const user = useSelector(userSelector);
  const isReceiving = useSelector(isReceivingSelector);

  if (isReceiving) return <Preloader />;

  if (!onlyUnAuth && !user) {
    return <Navigate replace to="/sign-in" />;
  }

  if (onlyUnAuth && user) {
    return <Navigate replace to="/profile" />;
  }

  return children;
};
