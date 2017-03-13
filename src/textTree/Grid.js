/* @flow */

export type Grid = Array<string>

export function gridFromString (string: string): Grid {
  return string.split('\n').slice(1, -1)
}

export class Cursor {
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

export class Selection {
  start: Cursor
  end: Cursor

  constructor (start: Cursor, end: Cursor) {
    this.start = start
    this.end = end
  }
}

export function selection (
  start: [number, number],
  end: [number, number]
): Selection {
  return new Selection(new Cursor(...start), new Cursor(...end))
}
