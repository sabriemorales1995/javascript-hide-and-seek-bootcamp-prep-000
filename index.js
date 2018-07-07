function getFirstSelector(selector){
  //returns first element that matches
  return document.querySelector(selector)
}

function nestedTarget(){
  //return .target within #nested 
  return document.querySelector(`#nested .target`);
}
function increaseRankBy(n){
  let temp = document.querySelectorAll(`ul.ranked-list li`);
  for(var i=0;i<temp.length;i++){
    temp[i].innerHTML=parseInt(temp[i].innerHTML)+n;
  }
}

function deepestChild(){
  //returns the most deeply nested child from div#grand-node
  
 let child= document.querySelector(`div#grand-node`); 
 while(child.querySelector(`div`)){
   child= child.querySelector(`div`);
 }
 return child;
}
  
