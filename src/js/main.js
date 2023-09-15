import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';
// import AOS from 'aos';


document.addEventListener("DOMContentLoaded", () => {

// AOS.init({
//   once:true,
// });
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  let hashPageLink =  window.location.hash.substring(1);
  if (hashPageLink.length > 0)
  setEvent(hashPageLink)
  function setEvent(event){
    const swicthesItems = document.querySelectorAll(".swicth__item")
    // swicthesItems.classList.add("yo")\
    const swicthesContent = document.querySelectorAll(".content")
    const footerLink = document.querySelector('.footer__item[data-event="tennis"]')
    swicthesItems.forEach(item  => {
      item.classList.remove("swicth__item--js-active")
    })
    swicthesContent.forEach(item  => {
      item.classList.remove("js-active")
    })
    let activeTab = document.querySelector(`[data-value='${event}']`)
    activeTab.classList.add("swicth__item--js-active")
    const contentActive = document.querySelector(`[data-event='${event}']`)
    contentActive.classList.add("js-active")
    if (event == "tennis"){
      footerLink.classList.remove("is-hidden")
    } else {
      footerLink.classList.add("is-hidden")
    }
    // setTimeout(() => {
    //   console.log("qq")
    //   AOS.refreshHard();
    // }, 200);

  }
  document.querySelectorAll('.swicth__item').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
     let datavalue = link.dataset.value;
     setEvent(datavalue)
     let href = link.getAttribute('href').substring(1);
     window.location.hash = href;
    });
  });
  burger.addEventListener("click", () => {
    menu.classList.toggle("js-active")
  })
  document.querySelectorAll('.menu__link,.footer__link--anch').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.header').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        menu.classList.remove("js-active")
        burger.classList.remove("burger--active")
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
  });

});
