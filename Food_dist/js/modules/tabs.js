function tabs(tabSelector, tabItem, tabContent, activeClass){
    const tabs = document.querySelectorAll(tabItem),
    tabsContent = document.querySelectorAll(tabContent),
    tabParent = document.querySelector(tabSelector);

function hideTagContent(){
    tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
        tabs.forEach(tab =>{
            tab.classList.remove(activeClass);
        });
    }); //скрытие табов
}

function showTabContent(i = 0){
 tabsContent[i].classList.add('show', 'fade');
 tabsContent[i].classList.remove('hide');
 tabs[i].classList.add(activeClass);
} //если функция вызывается без аргумента, то по умолчанию i=0
hideTagContent();
showTabContent();

tabParent.addEventListener('click', (event)=>{
const target = event.target;

tabs.forEach((item, i)=>{
if (target == item){
    hideTagContent();
    showTabContent(i);
}
});
});

}

export default tabs;