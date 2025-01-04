import { atom } from 'jotai';

import type { NavigateTab } from '@/types/navigate';

export const activeTabAtom = atom<NavigateTab>('discover');
