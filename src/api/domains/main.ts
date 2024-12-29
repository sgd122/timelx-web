import type { IncomingMessage } from 'http';

import type { IUser } from '@api/user';
import type { NextApiRequestCookies } from 'next/dist/server/api-utils';

import { apiRoute } from '@/api/route';
import useInstance from '@/hooks/useInstance';

export const fetchMainSectionLocal = async (
  req?: IncomingMessage & {
    cookies: NextApiRequestCookies;
  }
): Promise<IUser> => {
  const axiosInstance = await useInstance(req);
  const { data } = await axiosInstance.get<IUser>(
    apiRoute({ key: 'main.sections', searchParams: { index: 0 } })
  );

  return data;
};
