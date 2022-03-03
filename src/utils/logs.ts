export const logger = (TAG: string, ...args: any[]) => {
  // eslint-disable-next-line no-console
  if (__DEV__) console.log(`[${new Date().toISOString()}][${TAG}]`, ...args)
}
