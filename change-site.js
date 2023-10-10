




  
  AFRAME.registerComponent('clickable',{
 

    init:function () {
      let data= this.data;
      let el= this.el;
      console.log(data,el);
      let myVideo= document.querySelector('#my-video');
      
      let mySky= document.querySelector('#my-sky');
      /* myVideo.components.material.material.map.image.pause();
      myVideo.components.material.material.map.image.currentTime= 0; */

      el.addEventListener("loaded",()=> {
        console.log("cargado");
        
        
      })
      
  
      el.addEventListener("click", ()=> {
        console.log('clickado');
        myVideo.setAttribute('visible','false');
        myVideo.components.material.material.map.image.pause();
        myVideo.components.material.material.map.image.currentTime= 0;
        mySky.setAttribute('visible','true');
        mySky.setAttribute('src', '#vista-dos');
        mySky.setAttribute('rotation', '0 180 0');
      })
    }
  
  })

  document.addEventListener("DOMContentLoaded", function(event) {
    let myVideoJab= document.querySelector('#video-jab');
    myVideoJab.play();
});

