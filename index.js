//return the first element that matches the selector
function getFirstSelector(selector) {
   var firstElement = document.querySelector(selector)
<<<<<<< HEAD
   return firstElement
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  const rankedlists = document.getElementById('app').querySelectorAll('ul.ranked-list')
    for (let i = 0; i < rankedlists.length; i++) {
    rankedlists[i].innerHTML = (i + n).toString()
    }
}

//Define a function deepestChild() that pulls out the most deeply nested child from div#grand-node.
//(Remember, you can iterate over elements and call querySelector() and querySelectorAll()
function deepestChild(){
  let current = document.querySelector('#grand-node')
  let nextNode = current.children[0]

  while(nextNode) {
    current = nextNode
    nextNode = current.children[0];
  }

  return current

=======
>>>>>>> 88b0da60445a7d0f7c8ddee5b515a0493771220e
}
