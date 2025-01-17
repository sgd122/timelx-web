import styled from '@emotion/styled';
import { Tabs } from '@radix-ui/themes';
import { useAtom } from 'jotai/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { FaCog, FaHeart, FaLightbulb } from 'react-icons/fa';

import { activeTabAtom } from '@/store/navigationAtom';
import type { NavigateTab } from '@/types/navigate';

enum TabsEnum {
  Discover = 'discover',
  Saved = 'saved',
  Settings = 'settings',
}

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
      case TabsEnum.Discover:
        router.push('/');
        break;
      case TabsEnum.Saved:
        router.push('/saved');
        break;
      case TabsEnum.Settings:
        router.push('/settings');
        break;
    }
  };

  const determineActiveTab = (pathname: string): TabsEnum | null => {
    if (
      ['/', '/search'].includes(pathname) ||
      pathname.startsWith('/search/result') ||
      pathname.startsWith('/event/') ||
      pathname.startsWith('/auth/login')
    ) {
      return TabsEnum.Discover;
    }
    if (pathname.startsWith('/saved')) {
      return TabsEnum.Saved;
    }
    if (pathname.startsWith('/settings')) {
      return TabsEnum.Settings;
    }
    return null;
  };

  const handleTabClick = (value: NavigateTab) => {
    if (value === activeTab) {
      // 현재 탭을 다시 클릭한 경우 처리
      onRouter(value);
    }
  };

  useEffect(() => {
    const active = determineActiveTab(router.pathname);
    setActiveTab(active as NavigateTab);
  }, [router.pathname]);

  return (
    <footer>
      <Tabs.Root
        defaultValue={determineActiveTab(router.pathname) || undefined}
        value={activeTab}
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
          <TabTriggerOverride
            value="discover"
            onClick={() => handleTabClick(TabsEnum.Discover)}
          >
            <FaLightbulb
              className={
                TabsEnum.Discover === activeTab
                  ? 'text-yellow-400'
                  : 'text-gray-500'
              }
              size={24}
            />
            발견
          </TabTriggerOverride>
          <TabTriggerOverride
            value="saved"
            onClick={() => handleTabClick(TabsEnum.Saved)}
          >
            <FaHeart
              className={
                TabsEnum.Saved === activeTab
                  ? 'text-yellow-400'
                  : 'text-gray-500'
              }
              size={24}
            />
            저장
          </TabTriggerOverride>
          <TabTriggerOverride
            value="settings"
            onClick={() => handleTabClick(TabsEnum.Settings)}
          >
            <FaCog
              className={
                TabsEnum.Settings === activeTab
                  ? 'text-yellow-400'
                  : 'text-gray-500'
              }
              size={24}
            />
            설정
          </TabTriggerOverride>
        </Tabs.List>
      </Tabs.Root>
    </footer>
  );
};

export default Footer;
