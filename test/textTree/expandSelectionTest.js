/* @flow */
import test from 'ava'
import Grid from 'tree-helpers/src/textTree/Grid'
import {selection} from 'tree-helpers/src/textTree/Selection'
import expandSelection from 'tree-helpers/src/textTree/expandSelection'

test('enlarging a selection using a regexp', (t) => {
  const grid = new Grid([
    'foo',
    'bar',
    'baz'
  ])

  t.deepEqual(
    expandSelection(grid, selection([1, 1], [1, 1]), /\w+/),
    selection([1, 0], [1, 2])
  )

  t.deepEqual(
    expandSelection(grid, selection([1, 1], [1, 2]), /\w+/),
    selection([1, 0], [1, 2])
  )

  t.deepEqual(
    expandSelection(grid, selection([2, 0], [2, 2]), /\w+/),
    selection([2, 0], [2, 2])
  )
})
