import {openModal, closeModal} from './modal';
import {postingData} from '../services/services';
function form(modalSelector, modalTimer, formSelector){

    const forms = document.querySelectorAll(formSelector);
    const message = {
        loading: 'img/spinner.svg',
        success: 'Спасибо, мы с вами свяжемся',
        failure: 'ЧТо-то пошло не так...'
    };
    
    forms.forEach(item =>{
     postData(item);
    });
    

    function postData(form){
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        
    const statusMessage = document.createElement('img');
    statusMessage.src = message.loading;
    statusMessage.style.cssText =`
        display:block;
        margin: 0 auto;
    `;
    form.after(statusMessage);
    
    const formData = new FormData(form);
    
    const json = JSON.stringify(Object.fromEntries(formData.entries()));
    
    postingData('http://localhost:3000/requests', json)
    .then(data => {
        console.log(data);//какие-то нечеткие данные response
        showThanksModal(message.success, modalSelector);
        statusMessage.remove();
    })
    .catch(() => {
        showThanksModal(message.failure, modalSelector);
    })
    .finally(()=>{
        form.reset();
    });
    });
    }
    
    //form post-modal 
    
    function showThanksModal(message, modalSelector){
        const modalDialog = document.querySelector('.modal__dialog');
        modalDialog.style.display = 'none'; //не удаляем иначе как пользователь отркое снова его 
        openModal('.modal', modalTimer);
    
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class="modal__content">
        <div class="modal__close" data-close >x</div>
        <div class="modal__title">${message}</div>
        </div>`;
        const modal = document.querySelector(modalSelector);
        modal.append(thanksModal);
        setTimeout(()=>{
            thanksModal.remove();
            modalDialog.style.display = 'block'; 
            closeModal('.modal');
        },4000);
    }
    
}
export default form;