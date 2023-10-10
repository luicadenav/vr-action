AFRAME.registerComponent('clickable',{

    init:function () {
      let data= this.data;
      let el= this.el;
      console.log(data,el);
      let myVideo= document.querySelector('#my-video');
      let mySky= document.querySelector('#my-sky');
      let myHotspot= document.querySelector('#hotspot');

      el.addEventListener("click", ()=> {

        console.log('clickado');
        if (!myVideo.getAttribute("visible")) {
          myVideo.setAttribute('visible','true');
          myVideo.components.material.material.map.image.play();
          myVideo.components.material.material.map.image.currentTime= 0;
          mySky.setAttribute('visible','false');
          myHotspot.setAttribute('visible', 'true');

        } else {
          myVideo.setAttribute('visible','false');
          myVideo.components.material.material.map.image.pause();
          myVideo.components.material.material.map.image.currentTime= 0;
          mySky.setAttribute('visible','true');
          //myHotspot.setAttribute('visible', 'true');
        }
      })
    }

    
  
  })

