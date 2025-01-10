import type { IUser } from '@api/user';
import type { GetServerSidePropsContext } from 'next/dist/types';

import { apiRoute } from '@/api/route';
import useInstance from '@/hooks/useInstance';

export const fetchMainSectionLocal = async (
  req?: GetServerSidePropsContext['req']
): Promise<IUser> => {
  const axiosInstance = await useInstance(req);
  const { data } = await axiosInstance.get<IUser>(
    apiRoute({ key: 'main.sections', searchParams: { index: 0 } })
  );

  return data;
};
