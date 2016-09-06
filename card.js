
card1 = document.getElementById('card1'); 
card2 = document.getElementById('card2'); 
card3 = document.getElementById('card3');
card2.style.visibility="hidden";
card3.style.visibility="hidden";

function run(i){
  if(i==1) slideOpen(card1,card2);  
  if(i==2) slideOpen(card2,card3);
  if(i==3) location.reload(); 
  
  }




function slideOpen(el,card){
el.style.transition="width 4s linear 0s";
el.style.width="0.5%";
 card.style.visibility="visible";
 
}



run();
