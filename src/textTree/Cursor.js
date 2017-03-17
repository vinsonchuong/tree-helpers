/* @flow */

export default class Cursor {
  row: number
  column: number

  constructor (row: number, column: number) {
    this.row = row
    this.column = column
  }
}

export function cursor (row: number, column: number): Cursor {
  return new Cursor(row, column)
}
