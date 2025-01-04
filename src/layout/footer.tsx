import styled from '@emotion/styled';
import { Tabs } from '@radix-ui/themes';
import { useAtom } from 'jotai/react';
import { useRouter } from 'next/router';
import { FaCog, FaHeart, FaLightbulb } from 'react-icons/fa';

import { activeTabAtom } from '@/store/navigationAtom';
import type { NavigateTab } from '@/types/navigate';

const Footer = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useAtom(activeTabAtom);

  const TabTriggerOverride = styled(Tabs.Trigger)`
      &::before {
          content: none !important; /* 기본 before 제거 */
          background-color: transparent !important; /* 배경색 제거 */
      }
      & > span {
        background-color: transparent !important; /* 배경색 제거 */
        flex-direction: column;
        gap: 4px;
      }
  `;

  const onRouter = (path: NavigateTab) => {
    switch (path) {
      case 'discover':
        router.push('/');
        break;
      case 'saved':
        router.push('/');
        break;
      case 'settings':
        router.push('/');
        break;
    }
  };

  return (
    <Tabs.Root
      className="absolute bottom-0 w-full"
      defaultValue="discover"
      onValueChange={(value) => {
        setActiveTab(value as NavigateTab);
        onRouter(value as NavigateTab);
      }}
    >
      <Tabs.List
        aria-label="App Navigation"
        color="indigo"
        className="flex justify-around py-4"
      >
        <TabTriggerOverride value="discover">
          <FaLightbulb
            className={
              'discover' === activeTab ? 'text-yellow-400' : 'text-gray-500'
            }
            size={24}
          />
          발견
        </TabTriggerOverride>
        <TabTriggerOverride value="saved">
          <FaHeart
            className={
              'saved' === activeTab ? 'text-yellow-400' : 'text-gray-500'
            }
            size={24}
          />
          저장
        </TabTriggerOverride>
        <TabTriggerOverride value="settings">
          <FaCog
            className={
              'settings' === activeTab ? 'text-yellow-400' : 'text-gray-500'
            }
            size={24}
          />
          설정
        </TabTriggerOverride>
      </Tabs.List>
    </Tabs.Root>
  );
};

export default Footer;
