'use strict';
const btn = document.querySelector('.btn');
      let  timeId,
       i=0;

       function myAnimation(){
           const element = document.querySelector('.box');
           let position = 0;
 const id = setInterval(frame, 10);
           function frame(){
               if (position == 300){
                   clearInterval(id);
               } else{
                   position++;
                element.style.top = position + "px";
                element.style.left = position + "px";
               }
           }
       }

 btn.addEventListener('click', myAnimation
//     // const timeId = setTimeout(function(text){
//     //     console.log(text);
//     //     }, 2000, 'hello');
//         timeId = setInterval(function(text){
//             console.log(text);
//             if(i === 3){
//                 clearInterval(timeId);
//             }
//             i++;
//             }, 1000, 'hello');
           
);

// const now = new Date();
// new Date.parse()//также можно задать время
// ;console.log(now);

let start = new Date(); // записал когда начал
for (let i=0; i < 100000; i++){
    let some = i **3;
}
let end = new Date();// записал когда закончил
alert(`отработал ${end - start} миллисекунд`);