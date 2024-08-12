/*
// Change the background RGB background color by clicking the button.
*/

//Steps

 //step #1 create onload function
   window.onload = () => {
      main();
   }
   function main () {
      const root=document.getElementById('root');
      const btn=document.getElementById('change-btn');
      btn.addEventListener('click', function(){
       const bgcolor= generateRGBColor();
       root.style.backgroundColor=bgcolor;
      });
   }
  
 // Step #2 Create a random RGB Function generator
 function generateRGBColor(){
   // rgb(0,0,0) , rgb(255,255,255)
   const red= Math.floor(Math.random()*255);
   const green=Math.floor(Math.random()*255);
   const blue=Math.floor(Math.random()*255);
   return `rgb(${red},${green},${blue})`;
   
 }


 // Step #3 collect all necessary reference collect


 // step #4 handle the Click Event