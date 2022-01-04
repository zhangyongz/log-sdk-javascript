export interface responseObj {
  status: number,
  error: string
}

interface callback {
  (responseText: string): void
  (responseObj: responseObj): void
}

export interface LogClass {
  token: string
  track(event_name: string, params: any, callback?: callback): void
  request(url:string, callback?: callback): void
}
