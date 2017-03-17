/* @flow */
import Grid from './Grid'
import type Cursor from './Cursor'

export default function (
  grid: Grid,
  topLeft: Cursor,
  bottomRight: Cursor
): Grid {
  const rows = grid.rows.slice(topLeft.row, bottomRight.row + 1)
    .map(row => row.slice(topLeft.column, bottomRight.column + 1))

  return new Grid(rows, grid, topLeft, bottomRight)
}
