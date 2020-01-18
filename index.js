
let boxBtn = document.querySelector('.modal-btn');
let boxContainer = document.querySelector('.box-modal_wrapper');
let btnClose = document.querySelector('.box_modal_close_icon');
let outSide = window;
let box_modal_content = document.querySelector('.box_modal_content');

btnClose.addEventListener('click', function(){
    boxContainer.style.display = 'none';
})
boxBtn.addEventListener('click', function(e){
    boxContainer.style.display =  'block';
})

outSide.addEventListener('click', function(e){
    if(e.target == boxContainer){
      boxContainer.style.display = 'none';
    }
});


let btn_inside_box_modal = document.querySelector('.btn_inside_box_modal');
let Second__box__content = document.querySelector('.Second__box__content');
let inside_box_close_icon = document.querySelector('.inside_box_close_icon')
let overlay = document.querySelector('.overlay');


btn_inside_box_modal.addEventListener('click',(e)=>{
    Second__box__content.classList.remove('Second_box_hide')
    Second__box__content.classList.add('Second_box_open');
    overlay.style.display = 'block'
})
inside_box_close_icon.addEventListener('click', (e)=>{
    Second__box__content.classList.add('Second_box_hide');
    Second__box__content.classList.remove('Second_box_open');
    overlay.style.display = 'none'
})