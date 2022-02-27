export const logger = (TAG: string, ...args: any[]) => {
  if (__DEV__) console.log(`[${new Date().toISOString()}][${TAG}]`, ...args)
}
