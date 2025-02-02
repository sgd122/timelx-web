import { Tabs } from '@radix-ui/themes';
import { useAtom } from 'jotai/react';
import { useEffect } from 'react';
import { FaCog, FaHeart, FaLightbulb } from 'react-icons/fa';

import { useAppRouter } from '@/shared/hooks/useAppRouter';
import { activeTabAtom } from '@/shared/store/navigationAtom';
import type { NavigateTab } from '@/shared/types/navigate';

enum TabsEnum {
  Discover = 'discover',
  Saved = 'saved',
  Settings = 'settings',
}

const Footer = () => {
  const router = useAppRouter();
  const [activeTab, setActiveTab] = useAtom(activeTabAtom);

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
          <Tabs.Trigger
            value="discover"
            onClick={() => handleTabClick(TabsEnum.Discover)}
            className="before:content-none before:bg-transparent"
            aria-hidden="true"
          >
            <span className="flex flex-col gap-1">
              <FaLightbulb
                className={
                  TabsEnum.Discover === activeTab
                    ? 'text-yellow-400'
                    : 'text-gray-500'
                }
                size={24}
                aria-hidden="true"
              />
              발견
            </span>
          </Tabs.Trigger>
          <Tabs.Trigger
            value="saved"
            onClick={() => handleTabClick(TabsEnum.Saved)}
            className="before:content-none before:bg-transparent"
            aria-hidden="true"
          >
            <span className="flex flex-col gap-1">
              <FaHeart
                className={
                  TabsEnum.Saved === activeTab
                    ? 'text-yellow-400'
                    : 'text-gray-500'
                }
                size={24}
                aria-hidden="true"
              />
              저장
            </span>
          </Tabs.Trigger>
          <Tabs.Trigger
            value="settings"
            onClick={() => handleTabClick(TabsEnum.Settings)}
            className="before:content-none before:bg-transparent"
            aria-hidden="true"
          >
            <span className="flex flex-col gap-1">
              <FaCog
                className={
                  TabsEnum.Settings === activeTab
                    ? 'text-yellow-400'
                    : 'text-gray-500'
                }
                size={24}
                aria-hidden="true"
              />
              설정
            </span>
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
    </footer>
  );
};

export default Footer;
