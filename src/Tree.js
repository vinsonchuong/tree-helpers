/* @flow */
export type Tree<T> = {
  children: Iterable<T & Tree<T>>
}
