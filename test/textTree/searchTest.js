/* @flow */
import test from 'ava'
import Grid from 'tree-helpers/src/textTree/Grid'
import {selection} from 'tree-helpers/src/textTree/Selection'
import search from 'tree-helpers/src/textTree/search'

test('searching an empty grid', (t) => {
  const grid = new Grid([
  ])
  t.deepEqual(search(grid, /foo/), null)
})

test('matching the entire contents of a 1 row grid', (t) => {
  const grid = new Grid([
    'foo'
  ])
  t.deepEqual(
    search(grid, /foo/),
    selection([0, 0], [0, 2])
  )
})

test('matching part of a 1 row grid', (t) => {
  const grid = new Grid([
    '111foo222'
  ])
  t.deepEqual(
    search(grid, /foo/),
    selection([0, 3], [0, 5])
  )
})

test('matching part of a multi-row grid', (t) => {
  const grid = new Grid([
    'text',
    'more text',
    'asdfasdf foo asdf',
    'other text'
  ])
  t.deepEqual(
    search(grid, /foo/),
    selection([2, 9], [2, 11])
  )
})
