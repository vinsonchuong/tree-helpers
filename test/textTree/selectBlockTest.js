/* @flow */
import test from 'ava'
import {cursor} from 'tree-helpers/src/textTree/Grid'
import selectBlock from 'tree-helpers/src/textTree/selectBlock'

test('selecting a block from an empty grid', (t) => {
  const grid = []
  t.deepEqual(
    selectBlock(grid, cursor(0, 0), cursor(0, 0)),
    []
  )
})

test('selecting the entire grid', (t) => {
  const grid = [
    'foo',
    'bar',
    'baz'
  ]
  t.deepEqual(
    selectBlock(grid, cursor(0, 0), cursor(2, 2)),
    grid
  )
})

test('selecting the middle of a grid', (t) => {
  const grid = [
    'abcd',
    'efgh',
    'ijkl',
    'mnop'
  ]
  t.deepEqual(
    selectBlock(grid, cursor(1, 1), cursor(2, 2)),
    [
      'fg',
      'jk'
    ]
  )
})
