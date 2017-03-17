/* @flow */
import Grid from './Grid'
import Selection from './Selection'

export default function select (
  selection: Selection,
  grid: Grid
): string {
  if (selection.start.row === selection.end.row) {
    return grid.rows[selection.start.row].slice(
      selection.start.column,
      selection.end.column + 1
    )
  }

  return [
    grid.rows[selection.start.row].slice(selection.start.column),
    ...grid.rows.slice(
      selection.start.row + 1,
      selection.end.row
    ),
    grid.rows[selection.end.row].slice(0, selection.end.column + 1)
  ].join('\n')
}
