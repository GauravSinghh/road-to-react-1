import {navbar} from "../components/navbar.js"

import '../styles/navbar.css';

let navbar_div = document.getElementById("navbar")
navbar_div.innerHTML= navbar();

let image = [["https://m.media-amazon.com/images/I/91jNNsw2KOL._SL1500_.jpg"],
["https://m.media-amazon.com/images/I/81zaIKa7iTL._SL1500_.jpg"],
["http://timesofindia.indiatimes.com/photo/61237738.cms"],
["https://m.media-amazon.com/images/M/MV5BNzY0MDdhNzQtNWU0NS00MjZkLThkZTAtMDMzM2YzNGZmYTI1XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_.jpg"],
["https://images-na.ssl-images-amazon.com/images/I/51HisHi-pEL.jpg"],

]

let i =0;
let id;

function start(){
    let img =document.createElement("img");
    slideshow.innerHTML= null;
   id = setInterval(function(){
      if(i== image.length)
      {
          i=0;
      }
       
        img.src=image[i]
        
        slideshow.append(img)
        i++
    },1000)

}

let btnstart = document.getElementById("start")
btnstart.addEventListener("click",start)


function stop(){
    clearInterval(id);
}
let btnstop = document.getElementById("stop")
btnstop.addEventListener("click",stop)