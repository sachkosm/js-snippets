var elements = document.getElementsByTagName('div')
var element = elements[0]

function walk(node, o) {
  o.tagName = node.tagName
  if (node && node.children) {
    let arr = []
    let cur = node.children
    for (let i = 0; i < cur.length; i++) {
      if (cur[i] && cur[i].children) {
        var arr2 = []
        let cur2 = cur[i]
        for (let k = 0; k < cur2.children.length; k++) {
          arr2.push({
            tagName: cur2.children[k].tagName,
            children: []
          })
        }
      }
      arr.push({
        tagName: cur[i].tagName,
        children: arr2
      })
    }
    o.children = arr
  }

  return o
}
