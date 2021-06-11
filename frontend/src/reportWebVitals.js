const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry); //Cumulative Layout Shift (CLS)
      getFID(onPerfEntry); //First Input Delay (FID)  웹페이지 반응성
      getFCP(onPerfEntry); //First Contentful Paint (FCP) 화면이 그려질 때까지 걸리는 시간
      getLCP(onPerfEntry); //Largest Contentful Paint (LCP) 화면에서 가장 큰 덩어리(중요도가 높은)를 로딩하는 데 걸리는 시간
      getTTFB(onPerfEntry); //Time to First Byte (TTFB) 첫 번째 바이트를 가지고오는 데 걸린 시간
    });
  }
};

export default reportWebVitals;
