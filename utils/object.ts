import { Key } from "react"

export const isObject = (target: unknown) =>
  target && typeof target === "object"

export interface MergeObject {
  [key: string]: any
}

export const renameProp = (
  oldProp: string,
  newProp: string,
  { [oldProp]: old, ...others }
) => ({
  [newProp]: old,
  ...others,
})

export const copyObject = (obj: any) => {
  if (!isObject(obj)) return obj
  if (obj instanceof Array) return [...obj]
  return { ...obj }
}

export const omitObject = (obj: any, omitKeys: string[]) => {
  if (!isObject(obj)) return obj
  if (obj instanceof Array) return [...obj]
  const newObj = { ...obj }
  omitKeys.forEach(key => newObj[key] && delete newObj[key])
  return newObj
}

export const cleanObject = (obj: any) => {
  if (!isObject(obj)) return obj
  if (obj instanceof Array) return [...obj]
  const newObj = { ...obj }
  Object.keys(newObj).forEach(key => {
    if (newObj[key] === undefined || newObj[key] === null) {
      delete newObj[key]
    }
  })
  return newObj
}

export const cleanObjectKeys = (obj: any, keys: string[] = []) => {
  if (!isObject(obj)) return obj
  if (obj instanceof Array) return [...obj]
  const newObj = { ...obj }
  keys.forEach(key => {
    if (newObj[key]) {
      delete newObj[key]
    }
  })
  return newObj
}

export const getKeyValue = (obj: any, key: Key) => {
  if (!isObject(obj)) return obj
  if (obj instanceof Array) return [...obj]
  return obj[key]
}
