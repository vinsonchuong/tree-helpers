/* @flow */
import Grid from './Grid'
import Selection, {selection} from './Selection'

export default function (
  grid: Grid,
  startingSelection: Selection,
  pattern: RegExp
): Selection {
  const rowIndex = startingSelection.start.row
  const row = grid.rows[rowIndex]
  let start = startingSelection.start.column
  let end = startingSelection.end.column

  while (start > 0 && row.slice(start - 1, end + 1).match(pattern)) {
    start--
  }

  while (end < row.length - 1 && row.slice(start, end + 2).match(pattern)) {
    end++
  }

  return selection([rowIndex, start], [rowIndex, end])
}
