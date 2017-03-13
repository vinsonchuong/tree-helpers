/* @flow */
import test from 'ava'
import Grid from 'tree-helpers/src/textTree/Grid'
import {cursor} from 'tree-helpers/src/textTree/Cursor'
import selectBlock from 'tree-helpers/src/textTree/selectBlock'

test('selecting the entire grid', (t) => {
  const grid = new Grid([
    'foo',
    'bar',
    'baz'
  ])
  t.deepEqual(
    selectBlock(grid, cursor(0, 0), cursor(2, 2)),
    new Grid(
      [
        'foo',
        'bar',
        'baz'
      ],
      grid,
      cursor(0, 0),
      cursor(2, 2)
    )
  )
})

test('selecting the middle of a grid', (t) => {
  const grid = new Grid([
    'abcd',
    'efgh',
    'ijkl',
    'mnop'
  ])
  t.deepEqual(
    selectBlock(grid, cursor(1, 1), cursor(2, 2)),
    new Grid(
      [
        'fg',
        'jk'
      ],
      grid,
      cursor(1, 1),
      cursor(2, 2)
    )
  )
})
