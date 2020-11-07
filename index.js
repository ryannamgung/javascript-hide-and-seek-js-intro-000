
function getFirstSelector(selector)
{
  return document.querySelector(selector);
}

function nestedTarget()
{
  return document.querySelector('#nested .target');
}

function deepestChild()
{
  let grandNode = document.getElementById('grand-node');
  while(grandNode.children[0] != null){
    grandNode = grandNode.children[0];
  }

  return grandNode;
}
