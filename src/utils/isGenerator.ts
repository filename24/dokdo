// eslint-disable-next-line @typescript-eslint/ban-types
export const isGenerator = (target: any) =>
  target &&
  typeof target.next === 'function' &&
  typeof target.throw === 'function'
