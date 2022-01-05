import { baseUrl } from '../const'
import { buildURL } from '../helpers/url'

export default class Log {
  token: string;
  img: boolean;
  constructor(token: string, img = false) {
    this.token = token
    this.img = img
  }
  track(event_name: string, params: any, callback: any): void {
    const url = buildURL(baseUrl + '/track', {
      event_name,
      params,
      token: this.token
    })
    this.request(url, callback)
  }
  request(url: string, callback: any): void {
    if (this.img) {
      const img = document.createElement('img');
      img.src = url;
      document.body.appendChild(img);
    } else {
      try {
        const req = new XMLHttpRequest();
        req.open('GET', url, true);
        // send the mp_optout cookie
        // withCredentials cannot be modified until after calling .open on Android and Mobile Safari
        req.withCredentials = true;
        req.onreadystatechange = function () {
          if (req.readyState === 4) { // XMLHttpRequest.DONE == 4, except in safari 4
            if (req.status === 200) {
              if (callback) {
                callback(req.responseText);
              }
            } else {
              const error = 'Bad HTTP status: ' + req.status + ' ' + req.statusText;
              console.error(error);
              if (callback) {
                callback({ status: req.status, error: error });
              }
            }
          }
        };
        req.send(null); // 发送异步请求
      } catch (e) {
        console.error(e);
      }
    }
  }
}
