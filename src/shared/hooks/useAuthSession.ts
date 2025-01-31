import { useSession } from 'next-auth/react';

export const useAuthSession = () => {
  const { data: session, status } = useSession();

  const isAuthenticated = status === 'authenticated';
  const user = session?.user || null;

  return { isAuthenticated, user };
};
