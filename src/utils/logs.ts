export const log = (TAG: string, ...args: any[]) => {
  if (__DEV__) console.log(`[${TAG}] `, ...args)
}
