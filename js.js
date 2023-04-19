var personne =document.querySelector(".perso");
var obstacle=document.querySelector(".obstacle");

function mitseka(){
   
    //fonction hisoty
  if (personne.classList !="animation")
  {
    personne.classList.add('animation');
  }
    setTimeout(function()
    {
      personne.classList.remove('animation');},500)

}



    
  



var verifi=setInterval(function(){
    var persoTop=parseInt(window.getComputedStyle(personne).getPropertyValue("top"));
    var obstacleleft=parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"))
  if(obstacleleft<20 && obstacleleft>0 && persoTop>=100){
      obstacle.style.animation="none";
      alert("resy eee!!!!!")


  }
},1)
