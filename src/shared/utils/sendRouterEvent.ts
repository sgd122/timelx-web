export const sendRouterEvent = async (params: object) => {
  window.ReactNativeWebView.postMessage(
    JSON.stringify({ type: 'ROUTE_EVENT', ...params })
  );
};
