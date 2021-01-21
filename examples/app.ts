import Log from '../src/index'

let log = new Log()

log.track('login', {}, (data: any) => {
  console.log(data)
})