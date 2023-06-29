const linkMenu = document.querySelector('.link-menu')

function closeMenu(){
    document.querySelector('.menu-list').style.display = 'none'
}

document.addEventListener('mouseover', (event)=>{
    if(event.target.className == 'link-menu' || event.target.className == 'menu-list' || event.target.className == 'nav' || event.target.className == 'menu-item'){
        document.querySelector('.menu-list').style.display = 'inline-block'
        document.querySelector('.link-menu').innerHTML = '&#9660;'
    }
    else{
        closeMenu()
        document.querySelector('.link-menu').innerHTML = 'Menu'
    }
} )
