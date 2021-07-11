function openModal(modalSelector, modalTimer){
    const modal = document.querySelector(modalSelector);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    if(modalTimer){
        clearInterval(modalTimer);
    }
    }
    

function closeModal(modalSelector){
    const modal = document.querySelector(modalSelector);
    modal.style.display = 'none';
    document.body.style.overflow = '';
}
function modal(triggerSelector, modalSelector, modalTimer){
    const btnmodal = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);




btnmodal.forEach((item)=>{
    item.addEventListener('click', ()=>{
    openModal(modalSelector, modalTimer);
    });
    });


modal.addEventListener('click', (e)=>{
if(e.target === modal || e.target.getAttribute('data-close') == ''){
   closeModal(modalSelector);
}
});
document.addEventListener('keydown', (e)=>{
    if(e.code === 'Escape' && modal.style.display === 'block'){
        closeModal(modalSelector);
    }
});
 function showModalByScroll(){
    if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
        openModal(modalSelector, modalTimer);
    window.removeEventListener('scroll', showModalByScroll);
    }
 }
 
window.addEventListener('scroll', showModalByScroll);


}
export default modal;
export {closeModal};
export{openModal};