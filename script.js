/* Declare variables below to save the different sections (divs) of your story*/
var start = document.getElementById("one")
var froze = document.getElementById("froze")
var wait = document.getElementById("wait")
var walked = document.getElementById("walked")
var d = 0

document.getElementById("wait").onclick=function(){
  froze.style.display="block"
  start.style.display="none"
  wait.style.display="none"
  document.getElementById("bone").style.display="none"
}
document.getElementById("bone").onclick=function(){
   walked.style.display="block"
  document.getElementById("lb").style.display="block"
  start.style.display="none"
 wait.style.display="none"
  document.getElementById("bone").style.display="none"
}
document.getElementById("pets").onclick=function(){
  start.style.display="none"
  document.getElementById("pat").style.display="block"
    walked.style.display="none"
  document.getElementById("lb").style.display="none"
}
document.getElementById("pets").onmouseover=function(){
  d+=1
  if(d==1){
    document.getElementById("pets").innerHTML ="DANGER"
    alert("DANGER")
    
  }
}
document.getElementById("walk").onclick=function(){
   document.getElementById("keptwalking").style.display="block"
  document.getElementById("pat").style.display="none"
walked.style.display="none" 
}






/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/
