/* @flow */

export default class Grid {
  rows: Array<string>

  static fromString (string: string): Grid {
    const rows = string.split('\n').slice(1, -1)
    return new Grid(rows)
  }

  constructor (rows: Array<string>) {
    this.rows = rows
  }
}
