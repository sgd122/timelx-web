import { ScrollArea } from '@radix-ui/themes';
import type { ReactNode } from 'react';
import { createContext, useRef } from 'react';

interface ScrollAreaContextProps {
  scrollAreaRef: React.RefObject<HTMLDivElement>;
  bottomRef: React.RefObject<null>;
}

export const ScrollAreaContext = createContext<
  ScrollAreaContextProps | undefined
>(undefined);

export const ScrollAreaProvider = ({ children }: { children: ReactNode }) => {
  const bottomRef = useRef(null);
  const scrollAreaRef = useRef<HTMLDivElement>(
    null as unknown as HTMLDivElement
  );

  return (
    <ScrollAreaContext.Provider value={{ scrollAreaRef, bottomRef }}>
      <ScrollArea ref={scrollAreaRef} type="hover" scrollbars="vertical">
        {children}
        <div ref={bottomRef} />
      </ScrollArea>
    </ScrollAreaContext.Provider>
  );
};
