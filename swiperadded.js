const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3, // Показывать 3 слайда по умолчанию
    spaceBetween: 10,  // Расстояние между слайдами
  
    // Автопрокрутка слайдов
    autoplay: {
      delay: 5000,
      disableOnInteraction: false, // Не останавливать автопрокрутку при взаимодействии
    },
  
    // Адаптивные настройки (breakpoints)
    breakpoints: {
      1280: {
        slidesPerView: 3,
        spaceBetween: 0, // Нет расстояния между слайдами
        pagination: {
          el: null, // Убираем пагинацию
        },
        navigation: {
          nextEl: null, // Убираем навигацию
          prevEl: null, 
        },
        autoplay: false, // Отключаем автопрокрутку на экранах больше или равных 1280px
      },
      375: {
        slidesPerView: 1, // Показывать только 1 слайд
        spaceBetween: 10, // Расстояние между слайдами
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      },
    },
  });
  