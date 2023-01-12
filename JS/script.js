window.addEventListener('scroll',()=>{
  let content = document.querySelector('.row');
  let contentPostion = content.getBoundingClientRect().top;
  let screenPostion = window.innerHeight;
  if(contentPostion < screenPostion){
  content.classList.add('active');
  }
});