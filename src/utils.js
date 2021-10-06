export function getMultipleImages(embedCodeURL, proxyURL, quantity) {
  let promises = [];

  for (let i = 0; i < quantity; i++) {
    const x = Math.random();
    const quesOrAmp = embedCodeURL.indexOf('?') === -1 ? '?' : '&';
    const randomizedURL = `${embedCodeURL}${quesOrAmp}cacheBust=${x}&mi_debug_context=true`;
    promises.push(getImage(randomizedURL,proxyURL));
  }

  return Promise.all(promises);
}

export function parsedRequestObject(req) {
  const { duration, response } = req;
  const url = URL.createObjectURL(response);
  const collapsed = isCollapsed(url);
  const corsCache = req.getResponseHeader('x-cors-cache');
  const allHeaders = req.getAllResponseHeaders();
  return { duration, url, collapsed, corsCache, allHeaders };
}

function isCollapsed(url) {
  const image = new Image();
  image.src = url;
  return image.width === 1 || image.width;
}

export function setDataCenter(url, dataCenter) {
  const domain = `${dataCenter}.ink1001.com`;
  return url.replace(/:\/\/([\w.-]+)\//, `://${domain}/`);
}

export function getImage(url) {
  url = proxyUrl(url, 'https://cors.movableink.com/');
  const startTime = new Date().getTime();
  return new Promise((resolve, reject) => {
    const httpRequest = new XMLHttpRequest();

    httpRequest.open('GET', url, true);
    httpRequest.responseType = 'blob';
    httpRequest.send();

    httpRequest.onreadystatechange = function () {
      if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
          const endTime = new Date().getTime();
          const duration = endTime - startTime;
          httpRequest.duration = duration;
          resolve(httpRequest);
        } else {
          reject(httpRequest.status);
          console.log('httpRequest failed');
        }
      }
    };
  });
}

function proxyUrl(url, proxyURL) {
  const a = document.createElement('a');
  a.href = url;

  let port = '';
  if (a.port === '0' || a.port === '') {
    port = a.protocol === 'https:' ? ':443' : '';
  } else {
    port = `:${a.port}`;
  }

  const { hostname, pathname, search, hash } = a;
  return `${proxyURL}${hostname}${port}${pathname}${search}${hash}`;
}
