function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}){
    //slider-navigation
    const slides = document.querySelectorAll(slide), 
    prev = document.querySelector(prevArrow),
    next = document.querySelector(nextArrow),
    total = document.querySelector(totalCounter),
    current = document.querySelector(currentCounter),
    slidesWrapper = document.querySelector(wrapper),
    slidesField = document.querySelector(field),
    width = window.getComputedStyle(slidesWrapper).width;
    let slideIndex = 1;
    let offset = 0;
    const entireSlider = document.querySelector(container);
    entireSlider.style.position = 'relative';

    const navigation = document.createElement('div');
    navigation.classList.add('carousel-indicators');
    entireSlider.append(navigation);

    for(let i=0; i < slides.length; i++ ){
        navigation.innerHTML += `<div class="dot"></div>`;
    }
    const dots = document.querySelectorAll('.dot');


function dotChange(){
    dots.forEach((item, i) =>{
        if(i == slideIndex - 1){
           item.style.opacity = "100%";
        } else{
            item.style.opacity = "50%";
        }
        
    });
}
//slider 

   if(slides.length < 10){
    total.innerHTML = `0${slides.length}`;
    }else{
    total.innerHTML = slides.length;
}
    changeIndex(slideIndex);

    function changeIndex(count){
        if(count < 10){
        current.innerHTML = `0${count}`;
    } else{
        current.innerHTML = count;
    }
    }
    slidesField.style.width = 100*slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = 'all .5s ease-in-out';
    slidesWrapper.style.overflow = 'hidden';
    slides.forEach(item =>{
        item.style.width = width;
    });
    dotChange();

    next.addEventListener('click',()=>{
        if (offset == +width.replace(/\D/g,'')*(slides.length - 1)){
            offset =0;
        }else{
            offset += +width.replace(/\D/g,'');
        }
        slideIndex += 1;
        if(slideIndex > slides.length){
            slideIndex = 1;
        }
        dotChange();
        changeIndex(slideIndex);
        slidesField.style.transform = `translateX(-${offset}px)`;

    });

    prev.addEventListener('click',()=>{
        if (offset == 0){
            offset = +width.replace(/\D/g,'')*(slides.length -1);
        }else{
            offset -= +width.replace(/\D/g,'');
        }
        slideIndex -= 1;
        if(slideIndex < 1){
            slideIndex = slides.length;
        }
        dotChange();
        changeIndex(slideIndex);
        slidesField.style.transform = `translateX(${-offset}px)`;

    });

    navigation.addEventListener('click', (event) =>{
        const target = event.target;

        dots.forEach((item, i) =>{
            if (target == item){
            slideIndex = i+1;
            offset = +width.replace(/\D/g,'')*i;
            changeIndex(slideIndex);
            dotChange();
            slidesField.style.transform = `translateX(${-offset}px)`;
            }  

           
        });
       
    });
}
export default slider;