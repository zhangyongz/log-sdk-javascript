export default class Log {
  request(url: string, callback: any): void {
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
              callback({ status, error: error });
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