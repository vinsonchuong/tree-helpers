/* @flow */
import type {Tree} from 'tree-helpers/src/Tree'

export default function buildTree<S, T> (
  {root, getChildren, makeNode} : {
    root: S,
    getChildren: (S) => Generator<S, void, void>,
    makeNode: (S, Iterable<T & Tree<T>>) => T & Tree<T>
  }
): T & Tree<T> {
  const children = []
  for (const child of getChildren(root)) {
    children.push(buildTree({root: child, getChildren, makeNode}))
  }
  return makeNode(root, children)
}
