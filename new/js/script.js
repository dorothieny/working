'use strict';
for(let node of document.body.childNodes){
    if(node.nodeName == "#text"){
        continue;
    }
    console.log(node);
}

const req = new Promise((resolve, reject)=>{
setTimeout(()=>{
   console.log("Подготовка данных");
    const product = {
        name:'TV',
        price: 2000
    };
    resolve(product);
},2000);
});

req.then((data)=>{
   return new Promise((resolve, reject) =>{
       setTimeout(()=>{
    data.status = 'order';
    resolve(data);
   }, 2000);
});
}).then((data)=>{
    data.modify = true;
    console.log(data);
}).catch(()=>{
    console.error('Ошибка');
}).finally(() =>{
    console.log('finally');
});