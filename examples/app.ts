import Log from '../src/index'

const log = new Log()

log.track('login', ['a', 1], (res: any) => {
  console.log(JSON.parse(res))
})
