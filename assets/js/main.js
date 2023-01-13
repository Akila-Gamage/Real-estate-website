/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header');
};
window.addEventListener('scroll', scrollHeader);

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidePerView: 'auto',
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
 });

/*=============== VALUE ACCORDIAN ===============*/
const accordianItems = document.querySelectorAll('.value__accordian-item');

accordianItems.forEach((item) =>{
    const accordianHeader = item.querySelector('.value__accordian-header');

    accordianHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordian-open');

        toggleItem(item) 
        if(openItem && openItem!= item){
            toggleItem(openItem);
        }
    });
});

const toggleItem = (item) => {
    const accordianContent = item.querySelector('.value__accordian-content');

    if(item.classList.contains('accordian-open')){
        accordianContent.removeAttribute('style');
        item.classList.remove('accordian-open');
    }else{
        accordianContent.style.height = accordianContent.scrollHeight + 'px';
        item.classList.add('accordian-open');
    }  
};

/*=============== SWIPER TESTIMONIAL ===============*/
var swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidePerView: 'auto',
    loop: true,

    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    },
 });

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link');
		}else{
			sectionsClass.classList.remove('active-link');
		}                                                    
	})
};
window.addEventListener('scroll', scrollActive);


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    // reset: true
});

sr.reveal('.home__title, .popular__container, .footer__container, .testimonial__container');
sr.reveal('.home__description, .footer__info', {delay: 400});
sr.reveal('.search-button', {delay: 500});
sr.reveal('.home__value', {delay: 600});
sr.reveal('.home__images', {delay: 700, origin: 'bottom'});
sr.reveal('.logos__img', {interval: 100});
sr.reveal('.value__images, .contact__content', {origin: 'left'});
sr.reveal('.value__content, .contact__images', {origin: 'right'});

