'use strict'

const mobilemenu = document.querySelector('.headder__container')
document.querySelector('.header__mobile').addEventListener('click', function(){
    document.querySelector('.headder__container').classList.toggle('active');
    if(document.querySelector('.headder__container').classList.contains('active')){
        document.querySelector('body').style.overflow = 'hidden'
    }else{
        document.querySelector('body').style.overflow = 'auto'
    }
});

