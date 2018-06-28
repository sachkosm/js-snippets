//Traversing a 'DIV' element with all elements children
//Text is ingnored
//Display in JSON Format

var elements = document.getElementsByTagName('div')
var element = elements[0]

function dom2Json(node, o) {
  o.tagName = node.tagName

  function rec(node) {
    if (node && node.children) {
      var arr = []
      let cur = node.children
      for (let i = 0; i < cur.length; i++) {
        arr.push({
          tagName: cur[i].tagName,
          children: rec(cur[i])
        })
      }
      o.children = arr
    }
    return arr
  }
  rec(node)
  return JSON.stringify(o)
}

dom2Json(element, {})
