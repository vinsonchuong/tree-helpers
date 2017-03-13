/* @flow */
import type {Cursor} from './Cursor'
import {cursor} from './Cursor'

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
  return new Selection(cursor(...start), cursor(...end))
}
