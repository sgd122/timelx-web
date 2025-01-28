export const isIos =
  window.navigator.userAgent.match('iPad') ||
  window.navigator.userAgent.match('iPhone') ||
  window.navigator.userAgent.match('iPod');

export const isAndroid = window.navigator.userAgent.match('Android');

// 리액트 네이티브 웹뷰 객체의 inject
export const isWebView = !!window.ReactNativeWebView;
