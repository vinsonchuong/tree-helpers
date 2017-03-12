/* @flow */
import type {Grid, Cursor} from 'tree-helpers/src/textTree/Grid'

export default function (
  grid: Grid,
  topLeft: Cursor,
  bottomRight: Cursor
): Grid {
  return grid.slice(topLeft.row, bottomRight.row + 1)
    .map(row => row.slice(topLeft.column, bottomRight.column + 1))
}
