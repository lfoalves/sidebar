const buttomMenu = document.querySelector('img.menu')
console.log(buttomMenu)

const divicons = document.querySelector('.icons')
console.log(divicons)

const logout = document.querySelector('.log-out')
console.log(logout)

const sidebar = document.getElementById('sidebar')
console.log(sidebar)

buttomMenu.onclick = function() {
  sidebar.classList.add('close')
  divicons.classList.add('display')
  logout.classList.add('none')
}

document.addEventListener('keydown', function(event){
  console.log(event)
  const isEscKey = event.key === 'Escape'
  if(isEscKey) {
    sidebar.classList.remove('close')
    divicons.classList.remove('display')
    logout.classList.remove('none')
  }
})

 function ClickOpens() {
  sidebar.classList.remove('close')
    divicons.classList.remove('display')
    logout.classList.remove('none')
}