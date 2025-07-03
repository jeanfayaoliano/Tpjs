 let list = document.querySelector('select');
 let element = document.getElementById('choix')
 
  list.addEventListener('change', ()=>{
    element.innerHTML=list.options[list.selectedIndex].value
  },true);

function toggle(elm){
  //const element = document.getElementById(elm);
  if(element.style.display=='block'){
    element.style.display=='none';
  }else{
    element.style.display=='block';
  }
}
const photo = document.getElementById('photo'); 
const photo1 = document.getElementById('photo1'); 
const cadrephoto = document.getElementById('img')
const table = document.getElementById('table')
const pencil = document.getElementById('pencil');
const textarea = document.getElementById('saisir');
pencil.addEventListener('click',()=>{
  if(textarea.style.display=='block'){
      textarea.style.display='none';
      pencil.style.color='blue'
      pencil.classList.value='fa fa-pencil-square'
    }else{
      textarea.style.display='block';
      pencil.classList.value='fa fa-close'
      pencil.style.color='red'
  }
})

textarea.addEventListener('keyup',()=>{
  table.innerText = textarea.value;
})

photo.addEventListener('click',()=>{

  cadrephoto.src='assets/img/armoirie.png'
  
})
photo1.addEventListener('click',()=>{

  cadrephoto.src='assets/img/digi-tech.png'
  
})

var buttons = document.querySelectorAll('input')
const resultat = document.getElementById('resultat')
  buttons.forEach(input => {
    input.onclick = () =>{
      if(input.value ==='='){
          resultat.innerText = eval(resultat.innerText)
      }
      else{
           resultat.innerText += input.value
      }
    }
  })
    
  const togglemenu = document.querySelector('#togglemenu');
  const menu = document.querySelector('#menu');

  togglemenu.addEventListener('click',()=>{
    menu.classList.toggle('cache')

  })
  

