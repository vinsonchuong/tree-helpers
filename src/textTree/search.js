/* @flow */
import type {Grid, Selection} from 'tree-helpers/src/textTree/Grid'
import {selection} from 'tree-helpers/src/textTree/Grid'

export default function (
  grid: Grid,
  pattern: RegExp
): ?Selection {
  for (const [rowIndex, row] of grid.entries()) {
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
