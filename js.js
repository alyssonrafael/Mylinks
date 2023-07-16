function toggleMode(){
    const html = document.documentElement

 //    if (html.classList.contains('light')){
 //      html.classList.remove('light')
 //} else{
 //   html.classList.add('light')
 // }

 //existe já uma função própria que faz isso. 

   html.classList.toggle('light')
 
   // mudar a imagem de acordo com o tema
   // se tiver ligt mode imagem 1 
   // se tiver dark mode imagem 2 

   const img = document.querySelector("#profile img")

   if(html.classList.contains('light')){

    img.setAttribute('src','./assets/avatar.png')
    } else{
        img.setAttribute('src','./assets/avatar.png')
    }
}