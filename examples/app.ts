import Log from '../src/index'

const token = new Date().getTime().toString()
const log = new Log(token)

log.track('login', ['a', 1], (res: any) => {
  console.log(JSON.parse(res))
})
