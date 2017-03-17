/* @flow */
import test from 'ava'
import Grid from 'tree-helpers/src/textTree/Grid'
import {selection} from 'tree-helpers/src/textTree/Selection'
import select from 'tree-helpers/src/textTree/select'

test('evaluating a single-line selection', (t) => {
  const grid = new Grid([
    'foo',
    'bar',
    'baz'
  ])
  t.is(
    select(selection([1, 1], [1, 2]), grid),
    'ar'
  )
})

test('evaluating a multi-line selection', (t) => {
  const grid = new Grid([
    'foo',
    'bar',
    'baz'
  ])
  t.is(
    select(selection([0, 1], [2, 1]), grid),
    'oo\nbar\nba'
  )
})
