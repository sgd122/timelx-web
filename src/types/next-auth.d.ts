import type { IUser } from '@api/user';
import 'next-auth';
import type * as auth from 'next-auth';
import NextAuth from 'next-auth';

declare module 'next-auth' {
  export * from 'next-auth';
  export type InitOptions = auth.InitOptions;
  export default NextAuth;
  export interface Session {
    user: IUser;
  }
}

declare module 'next-auth/client' {
  // eslint-disable-next-line import/no-unresolved
  export * from 'next-auth/client';

  export interface Session {
    user: IUser;
  }
}
