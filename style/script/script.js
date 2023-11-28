const menu = document.querySelector('.header-menu-line');
const a_individual = document.querySelectorAll(".header-menu li a")
const faq_items = document.querySelectorAll(".FAQ-itens-click")
const faq_items_h2 = document.querySelectorAll(".FAq-itens h2")
const links_internos = document.querySelectorAll('.header-menu a[href^="#"]')
const images_animais_fantasticos = document.querySelectorAll('.image-roll img');

function ativar_menu_a() {
  const header_menu = document.querySelector(".header-menu")
  header_menu.classList.toggle('active');
}

function seletorAll(elemento_html) {
  return document.querySelectorAll(elemento_html)
}

function seletorFirst(elemento_html) {
  return document.querySelector(elemento_html)
}

function scrolltosection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href)

  section.scrollIntoView({
    behavior: "smooth",
    block: 'start',
  });
}

function removeactive(elemento){
 elemento.forEach((item)=>{ item.classList.remove("active")
})
}


menu.addEventListener('click', () => {
  ativar_menu_a()
})

a_individual.forEach((elemento) => {

  elemento.addEventListener("click", () => {

    elemento.classList.toggle("ativo");
  })

})

faq_items.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("toggle")
  })
})






// armazenar o valor clicado dentro de uma variavel e adicionar um classe
// tu faz um filtro que vai pegar tudo que é diferente do target  e remover as classes


seletorAll(".image-roll img").forEach((item) => {
  item.addEventListener("click", () => {
    seletorAll(".imagem-comentario-h2 h2").forEach((element) => {
      
        element.classList.remove("active")
         });

         seletorAll(".comentario-padding div").forEach((item)=>{
          item.classList.remove("active");
         })

         seletorAll(".FAQ-itens-click p").forEach((item)=>{

          item.classList.remove("active")
         })
   

   if (item.classList.contains("raposa")) {
     seletorFirst(".raposa_h2").classList.add("active")
     seletorFirst(".raposa_text").classList.add("active")
     seletorFirst(".raposa_text2").classList.add("active")
     seletorAll(".raposa_text2").forEach((item)=>{


      item.classList.add("active")})

    }
 else if (item.classList.contains("esquilo")) {
  seletorFirst(".esquilo_h2").classList.add("active")
  seletorFirst(".esquilo_text").classList.add("active")
  seletorFirst(".esquilo_text2").classList.add("active")
  seletorAll(".esquilo_text2").forEach((item)=>{


    item.classList.add("active")})
     }
     else if (item.classList.contains("urso")) {
      seletorFirst(".urso_h2").classList.add("active")
      seletorFirst(".urso_text").classList.add("active")
      seletorAll(".urso_text2").forEach((item)=>{


      item.classList.add("active")})
    }
   })
})

links_internos.forEach((item_link) => {
  item_link.addEventListener("click", scrolltosection)
})
