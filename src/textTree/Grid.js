/* @flow */

export type Grid = Array<string>

export function gridFromString (string: string): Grid {
  return string.split('\n').slice(1, -1)
}
