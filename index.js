
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

function increaseRankBy(n)
{
  const rankedLists = document.querySelectorAll('.ranked-list');
  for(int i = 0; i < rankedLists.length; i++)
  {
    let children = rankedLists[i].children;
    for(int j = 0; j < children.length; j++)
    {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}
