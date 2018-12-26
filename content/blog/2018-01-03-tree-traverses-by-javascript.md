---
title: Tree Traverses by Javascript
date: '2018-01-03T00:52:24-05:00'
tags:
  - javascript
  - algorithm
---
Last week, I was asked by an interviewer by tree traverse with both recursion and iteration. Though I had done recursion on that topic, it took me some time to the iterative solution. I rethought the problems and reviewed the final solutions, on both preorder, in-order, and postorder. 

### Building a tree
``` js
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

module.exports = function buildTree(nodes) {
  const build = i => {
    if (nodes[i] !== null && nodes[i] !== undefined) {
      const node = new TreeNode(nodes[i])
      node.left = build(i * 2 + 1)
      node.right = build((i + 1) * 2)
      return node
    } else {
      return null
    }
  }

  return build(0)
}
```

### Preorder
```js
const buildTree = require('./build-tree.js')

const preorderRecursive = root => {
  // root left right
  const walk = node => {
    if (!node) return
    console.log(node.val)
    walk(node.left)
    walk(node.right)
  }

  walk(root)
}

const preorderIterative = root => {

  if (root == null) return

  let stack = [root]

  while (stack.length > 0) {
    let node = stack.pop()
    console.log(node.val)

    if (node.right !== null) {
      stack.push(node.right)
    }
    if (node.left !== null) {
      stack.push(node.left)
    }
  }
}

const tree = buildTree([1, 2, 3, 4, 5])

preorderRecursive(tree)
preorderIterative(tree)

```

### Inorder

```js
const buildTree = require('./build-tree.js')

const inorderRecursive = root => {
  // left root right
  const walk = node => {
    if (!node) return
    walk(node.left)
    console.log(node.val)
    walk(node.right)
  }

  walk(root)
}


const inorderIterative = root => {
  if (!root) return

  let stack = [root]
  let cur = root.left

  while (1) {
    if (cur !== null) {
      stack.push(cur)
      cur = cur.left
    } else {
      if (stack.length > 0) {
        cur = stack.pop()
        console.log(cur.val)
        cur = cur.right
      } else {
        break
      }
    }
  }
}


```

### Postorder

```js
const buildTree = require('./build-tree.js')

const postorderRecursive = root => {
  // left right root
  const walk = node => {
    if (!node) return
    walk(node.left)
    walk(node.right)
    console.log(node.val)
  }

  walk(root)
}

const postorderIterativeTwoStack = root => {
  if (root === null) return

  let s1 = []
  let s2 = []

  s1.push(root)

  while (s1.length > 0) {
    let node = s1.pop()
    s2.push(node)

    if (node.left) {
      s1.push(node.left)
    }
    if (node.right) {
      s1.push(node.right)
    }
  }

  while (s2.length > 0) {
    let node = s2.pop()
    console.log(node.val)
  }
}

```

### Levelorder
```js
const recursive = root => {
  let res = []

  const walk = (node, level) => {
    if (!node) return

    if (res[level] === undefined) res[level] = [node.val]
    else res[level].push(node.val)

    walk(node.left, level + 1)
    walk(node.right, level + 1)
  }

  walk(root, 0)

  return res 
}


const iterative = root => {
  let queue = [root]
  let res = []

  while (queue.length > 0) {
    let curLevel = []

    let len = queue.length

    for (let i = 0; i < len; i++) {
      let curNode = queue.shift()

      if (curNode !== null) {
        curLevel.push(curNode.val)

        queue.push(curNode.left)
        queue.push(curNode.right)
      }
    }

    if (curLevel.length !== 0) res.push(curLevel)
  }

  return res
}

```

