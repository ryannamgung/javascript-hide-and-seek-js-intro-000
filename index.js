
function getFirstSelector(selector)
{
  return document.querySelector(selector);
}

function nestedTarget()
{
  return document.getElementById('#nested .target');
}

function deepestChild()
{
  let grandNode = document.getElementById('grand-node');
  while(grandNode.children[0] != NULL){
    grandNode = grandNode.children[0];
  }

  return grandNode;
}
