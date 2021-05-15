const slide=document.getElementsByClassName('slide');
const wertili=document.getElementsByClassName('wertili');
//kaunteri romlitac vaketeb numeracias
let counter=1;


setInterval(plius(1), 17);


function plius(o){
    counter += o;
    slided(counter);
   
}


function slided(o){
   
    
    for(let i=0;i<slide.length;i++){
        
        slide[i].style.display="none";
    }
    if(o>slide.length){
counter=1;
    }
    if(o<1){
        counter=slide.length;
    }
slide[counter-1].style.display="block";
console.log(counter);

}
