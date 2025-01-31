export const useMocks = () => {
  if (process.env.NODE_ENV === 'development') {
    // cli: npx msw init public/ — save
    if (typeof window === 'undefined') {
      (async () => {
        const { server } = await import('@/app/mocks/server');
        server.listen();
      })();
    } else {
      (async () => {
        const { worker } = await import('@/app/mocks/browser');
        worker.start();
      })();
    }
  }
};
