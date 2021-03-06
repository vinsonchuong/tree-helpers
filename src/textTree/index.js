/* @flow */
import type {Tree} from 'tree-helpers/src/Tree'
// import buildTree from 'tree-helpers/src/buildTree'
import search from 'tree-helpers/src/textTree/search'
import Grid from 'tree-helpers/src/textTree/Grid'

type TextTreeNode = {
  name: string
}

export default function (
  [textTree]: Array<string>
): {[id: string]: Tree<TextTreeNode>} {
  const grid = Grid.fromString(textTree)
  search(grid, /\w+/)

  return {root: {name: 'root', children: []}}
}

// const tree = buildTree({
//   root: '',
//   getChildren() {
//   },
//   makeNode() {
//   }
// })
