AFRAME.registerComponent('clickable',{
  schema: {
    name: {type: 'string'}
  },

    init:function () {
      let data= this.data;
      let el= this.el;
      console.log(data,el);
      let myVideo= document.querySelector('#my-video');
      let mySky= document.querySelector('#my-sky');
      let secondHotspot= document.querySelector('#second-hotspot');
      let savageHotspot= document.querySelector('#savage-hotspot');
      let thirdHotspot= document.querySelector('#third-hotspot');
      let fourthHotspot= document.querySelector('#fourth-hotspot');
      let fifththHotspot= document.querySelector('#fifth-hotspot');
      let firstHotspot= document.querySelector('#first-hotspot');
      let sixthtHotspot= document.querySelector('#sixth-hotspot');
      let seventhtHotspot= document.querySelector('#seventh-hotspot');
      
      el.addEventListener("click", ()=> {

        console.log(data.name);
        if (data.name == "savage") {
          myVideo.setAttribute('visible','true');
          myVideo.components.material.material.map.image.play();
          myVideo.components.material.material.map.image.currentTime= 0;
          mySky.setAttribute('visible','false');
          savageHotspot.setAttribute('visible', 'true');

        } 
        if (data.name =="salida-savage"){
          myVideo.setAttribute('visible','false');
          myVideo.components.material.material.map.image.pause();
          myVideo.components.material.material.map.image.currentTime= 0;
          mySky.setAttribute('src','#vista-tres');
          mySky.setAttribute('visible','true');
          savageHotspot.setAttribute('visible', 'false');
          secondHotspot.setAttribute('visible', 'false');
          thirdHotspot.setAttribute('visible', 'true');
          thirdHotspot.setAttribute('position', '-37 1 20');
          fourthHotspot.setAttribute('visible', 'true');
          firstHotspot.setAttribute('visible', 'true');
        }

        if (data.name =="pasillo"){
          mySky.setAttribute('src','#vista-tres');
          savageHotspot.setAttribute('visible', 'false');
          
          secondHotspot.setAttribute('visible', 'false');

          thirdHotspot.setAttribute('visible', 'true');
          thirdHotspot.setAttribute('position', '-37 1 20');
          fourthHotspot.setAttribute('visible', 'true');
          fourthHotspot.setAttribute('position', '60 -23 1.5');
          firstHotspot.setAttribute('visible', 'true');
          firstHotspot.setAttribute('position', '1.5 -7 -25');
          
        }
        if (data.name =="bebedero"){
          mySky.setAttribute('src','#vista-cuatro');
          savageHotspot.setAttribute('visible', 'false');
          firstHotspot.setAttribute('visible', 'false');
          secondHotspot.setAttribute('visible', 'true');
          secondHotspot.setAttribute('position', '-63 -23 6');
          secondHotspot.setAttribute('radius', 5);
          thirdHotspot.setAttribute('visible', 'false');
          fourthHotspot.setAttribute('visible', 'false');
          fifththHotspot.setAttribute('visible', 'true');
        }
        if (data.name =="puerta-tonic"){
          mySky.setAttribute('src','#vista-cinco');
          savageHotspot.setAttribute('visible', 'false');
          firstHotspot.setAttribute('visible', 'false');
          secondHotspot.setAttribute('visible', 'false');
          thirdHotspot.setAttribute('visible', 'false');
          fourthHotspot.setAttribute('visible', 'true');
          fourthHotspot.setAttribute('position', '3.7 -23 -90');
          fifththHotspot.setAttribute('visible', 'false');
          sixthtHotspot.setAttribute('visible', 'true');
        }

        if (data.name =="video-tonic"){
          myVideo.setAttribute('src','#video-tonic');
          myVideo.setAttribute('visible','true');

          setTimeout(() => {
            myVideo.components.material.material.map.image.play();
            myVideo.components.material.material.map.image.currentTime= 0;
          }, "1000");
        

          mySky.setAttribute('visible','false');
          savageHotspot.setAttribute('visible', 'false');
          firstHotspot.setAttribute('visible', 'false');
          secondHotspot.setAttribute('visible', 'false');
          thirdHotspot.setAttribute('visible', 'false');
          fourthHotspot.setAttribute('visible', 'false');
          fifththHotspot.setAttribute('visible', 'false');
          sixthtHotspot.setAttribute('visible', 'false');
          seventhtHotspot.setAttribute('visible', 'true');
          
        }

        
      })
    }

    
  
  })

