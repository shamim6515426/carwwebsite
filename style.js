
 

    window.onload = function(){{

        var nextbtn= document.querySelector(" #prev"); 
     var prevtn= document.querySelector(" #next");

          nextbtn.addEventListener("click", function(){ 
            
            nextslider()

           });

        prevtn.addEventListener("click", function(){ 
            
            prevbutton()
         });
  
    }}


  var text= 0;
  var nextslider= ()=>{

      var slider= document.getElementById("slider");
     var sliders= slider.getElementsByClassName("sliders")
     var curroutber= slider.getElementsByClassName("curront");

   //  adkjf

   curroutber[0].classList.remove('curront');

 if( text == ( sliders.length -1)){
     text=0;
  }else{
      text += 1;
  }
 sliders[ text].classList.add('curront');

  }


  var prevbutton= ()=>{

   var slider= document.getElementById("slider");
    var sliders= slider.getElementsByClassName("sliders")
     var curroutber= slider.getElementsByClassName("curront");

    //  adkjf

   curroutber[0].classList.remove('curront');

 if( text == 0){
    text=sliders.length-1;
}else{
     text -= 1;
 }
 sliders[ text].classList.add('curront');

}



 



  
 





 