/* @flow */
import type {Tree} from 'tree-helpers/src/Tree'
// import buildTree from 'tree-helpers/src/buildTree'
import search from 'tree-helpers/src/textTree/search'
import type {Grid} from 'tree-helpers/src/textTree/Grid'

type TextTreeNode = {
  name: string
}

export default function (
  [textTree]: Array<string>
): {[id: string]: Tree<TextTreeNode>} {
  const grid = parseTextTree(textTree)
  search(grid, /\w+/)

  return {root: {name: 'root', children: []}}
}

function parseTextTree (textTree: string): Grid {
  return textTree.split('\n').slice(1, -1)
}

// const tree = buildTree({
//   root: '',
//   getChildren() {
//   },
//   makeNode() {
//   }
// })
