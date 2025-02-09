declare module '@api/user' {
  import type { User } from 'next-auth';

  export interface IUser extends User {
    accessToken: string;
    id: number;
    nickname: string;
    avatarUrl: string;
    email: string;
  }

  export interface UserStatus {
    type: string;
    status: string;
    data: {
      user: IUser;
    };
  }
}
