import { IUser } from '@models/IUser';

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
