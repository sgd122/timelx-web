import type { IUser } from '@api/user';

import instance from '@/api';
import { apiRoute } from '@/api/route';

export const fetchMainSectionLocal = async (): Promise<IUser> => {
  const { data } = await instance.get<IUser>(
    apiRoute({ key: 'main.sections', searchParams: { index: 0 } })
  );

  return data;
};
