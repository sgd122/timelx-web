import type { IUser } from '@api/user';

import instance from '@/features/api';
import { apiRoute } from '@/features/api/route';

export const fetchMainSectionLocal = async (): Promise<IUser> => {
  const { data } = await instance.get<IUser>(
    apiRoute({ key: 'main.sections', searchParams: { index: 0 } })
  );

  return data;
};
