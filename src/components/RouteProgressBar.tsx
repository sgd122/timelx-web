import NextNProgress from 'nextjs-progressbar';

const RouteProgressBar = () => {
  return (
    <NextNProgress
      color="#03946E"
      startPosition={0.3}
      stopDelayMs={200}
      height={1}
      options={{ showSpinner: false }}
    />
  );
};

export default RouteProgressBar;
