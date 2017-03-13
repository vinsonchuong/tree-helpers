/* @flow */
import Grid from './Grid'
import type {Selection} from './Selection'
import {selection} from './Selection'

export default function (
  grid: Grid,
  pattern: RegExp
): ?Selection {
  for (const [rowIndex, row] of grid.rows.entries()) {
    const match = pattern.exec(row)
    if (match) {
      return selection(
        [rowIndex, match.index],
        [rowIndex, match.index + match[0].length - 1]
      )
    }
  }

  return null
}
