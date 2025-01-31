import { atom } from 'jotai';

import type { NavigateTab } from '@/shared/types/navigate';

export const activeTabAtom = atom<NavigateTab>('discover');
