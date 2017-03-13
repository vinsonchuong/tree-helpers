/* @flow */
import type {Cursor} from './Cursor'

export default class Grid {
  rows: Array<string>
  parent: ?Grid
  topLeft: ?Cursor
  bottomRight: ?Cursor

  static fromString (string: string): Grid {
    const rows = string.split('\n').slice(1, -1)
    return new Grid(rows)
  }

  constructor (
    rows: Array<string>,
    parent: ?Grid,
    topLeft: ?Cursor,
    bottomRight: ?Cursor
  ) {
    this.rows = rows
    this.parent = parent
    this.topLeft = topLeft
    this.bottomRight = bottomRight
  }
}
