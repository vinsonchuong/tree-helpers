/* @flow */
import test from 'ava'
import textTree from 'tree-helpers/src/textTree'

test('parsing a text tree with only a root node', (t) => {
  const {root} = textTree`
          root
  `
  t.deepEqual(root, {name: 'root', children: []})
})

// test('parsing a text tree with a root and two children', (t) => {
//   const {root, child1, child2} = textTree`
//             root
//             |  |
//        child1  child2
//   `
//   t.deepEqual(root, {name: 'root', children: [child1, child2]})
//   t.deepEqual(child1, {name: 'child1', children: []})
//   t.deepEqual(child2, {name: 'child2', children: []})
// })
