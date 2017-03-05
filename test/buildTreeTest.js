/* @flow */
import test from 'ava'
import buildTree from 'tree-helpers/src/buildTree'

test('converting an existing data structure to a tree', (t) => {
  const tree = buildTree({
    root: 'html',

    * getChildren(tagName) {
      if (tagName === 'html') {
        yield 'head'
        yield 'body'
      }

      if (tagName === 'head') {
        yield 'meta'
      }

      if (tagName === 'body') {
        yield 'div'
      }
    },

    makeNode(tagName, children) {
      return {
        tagName,
        children
      }
    }
  })

  t.deepEqual(
    tree,
    {
      tagName: 'html',
      children: [
        {
          tagName: 'head',
          children: [
            {
              tagName: 'meta',
              children: []
            }
          ]
        },
        {
          tagName: 'body',
          children: [
            {
              tagName: 'div',
              children: []
            }
          ]
        }
      ]
    }
  )
})
