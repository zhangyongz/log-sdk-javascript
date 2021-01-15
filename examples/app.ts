import Log from '../src/index'

let log = new Log()

log.request('http://192.168.50.90:3000/v1', (data: any) => {
  console.log(data)
})