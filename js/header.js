//Sticky-header при мобильной версии 
let lastScroll = 0;
const header = document.querySelector('.header-top');

const scrollPosition = () => window.pageYOffset;
const containHide = () => header.classList.contains('header-top--hide');

window.addEventListener('scroll', () => {
  
  if (window.pageYOffset > 54) {
    let top = scrollPosition();
    if (top > lastScroll && !header.classList.contains('header-top--hide')) {
      //scroll down
      header.classList.add('header-top--hide');
    }
    else if (top < lastScroll && header.classList.contains('header-top--hide')) {
      header.classList.remove('header-top--hide');
      //scroll up
    }
    lastScroll = scrollPosition();
  }
  else {
    header.classList.remove('header-top--hide');
  }
});

if (window.innerWidth > 991) {
  const stickyHeader = document.querySelector('.sticky-header');

  window.addEventListener('scroll', () => {
    
    if (window.pageYOffset > 180) {
      stickyHeader.style.transform = 'translateY(0)';
    }
    else {
      stickyHeader.style.transform = 'translateY(-100%)';
    }
  });
}


//Нахожу все drop-down элементы в выдвижном мобильном меню
document.querySelectorAll('.dropdown-target__head').forEach(el => {
  //вешаю обработчик
  el.onclick = (event) => {
    //Получаю родителя выпадающего меню
    const dropDownItem = event.target.closest('.dropdown-target');
    //Получаю само выпадающее меню
    const dropDownMenu = dropDownItem.querySelector('ul');
    //Тоглю активный класс
    dropDownItem.classList.toggle('dropdown-target--active');
    //Если родитель имеет класс отображаю выпадающее меню
    if (dropDownItem.classList.contains('dropdown-target--active')) {
      dropDownMenu.style.height = dropDownMenu.scrollHeight + 'px';
      dropDownMenu.style.marginTop = '10px';
    }
    //Иначе скрываю
    else {
      dropDownMenu.style.height = '0px';
      dropDownMenu.style.marginTop = '0px';
    }
  }
});

//Получаю кнопку бургер
const burger = document.querySelector('.header-top__burger');
//Получаю родителя выдвижного меню
const drawer = document.querySelector('.drawer-menu');
//Получаею выдвижное меню
const drawerMenu = document.querySelector('.drawer-menu__inner');
//Получаю кнопку закрытия меню
const closeMenuBtn = document.querySelector('.drawer-menu__close-btn');

//Функция отрывающая меню
const openMenu = () => {
  drawer.style.opacity = '1';
  drawer.style.visibility = 'visible';
  drawerMenu.style.transform = 'translateX(0)';
}

//Вешаю на бургер функцию открывающая меню
burger.onclick = openMenu;

//Функция закрывающая меню
const closeMenu = () => {
  drawer.style.opacity = '0';
  drawer.style.visibility = 'hidden';
  drawerMenu.style.transform = 'translateX(-100%)';
}

//Вешаю на кнопку закрытия функцию закрывающая меню
closeMenuBtn.onclick = closeMenu;

//Так же закрываю меню по клику на темную область
drawer.onclick = (event) => {
  if (event.target.classList.contains('drawer-menu')) {
    closeMenu();
  }
}



const showPopupCatalog = (event) => {
  //Если ширина дисплея больше 991px  отображаю десктопный каталог
  if (window.innerWidth > 991) {
    const popupCatalog = document.querySelector('.catalog-popup');
    popupCatalog.classList.toggle('catalog-popup--active');
  }
  //Отображаю мобильный каталог 
  else {
    const catalogMobil = document.querySelector('.catalog-mobil');
    catalogMobil.classList.toggle('catalog-mobil--active');
  }
  
}

document.querySelector('.sticky-header__catalog-btn').onclick = showPopupCatalog;

document.querySelectorAll('.header-bot__btn').forEach(btn => {
  btn.onclick = showPopupCatalog;
});

document.querySelector('.catalog-popup').onclick = (event) => {
  if (event.target.classList.contains('catalog-popup')) {
    showPopupCatalog();
  }
}



//Скрипты для табов в каталоге
const catalogPopupTabList = document.querySelector('.catalog-popup__tabs-list');
const catalogPopupTabItems = document.querySelectorAll('.catalog-popup__tab');
const catalogPopupLinksLists = document.querySelectorAll('.catalog-popup__links-list');
const catalogPopup = document.querySelector('.catalog-popup');

catalogPopupTabList.onmouseover = (event) => {
  //Если событие произошло на табе
  if (event.target.classList.contains('catalog-popup__tab')) {
    //Извлекаю id
    const id = event.target.id;
    //Нахожу все табы и удалаю активный класс
    catalogPopupTabItems.forEach(tab => {
      tab.classList.remove('catalog-popup__tab--active');
    });
    //Добавляю активный класс тому табу на которого навели
    event.target.classList.add('catalog-popup__tab--active');
    //Нахожу все списки ссылок и скрываю их
    catalogPopupLinksLists.forEach(list => {
      list.style.display = 'none';
    });
    //Отображаю тот список который соответствует id
    catalogPopup.querySelector(`[data-links="${id}"]`).style.display = 'block';
  }
};


//Скрипты для аккордиона мобильного каталога
//Получаю все верхушкт аккордиона
const accordionHeads = document.querySelectorAll('.catalog-mobil__accordion-head');

document.querySelector('.catalog-mobil__close-btn').onclick = showPopupCatalog;
document.querySelector('.catalog-mobil').onclick = (event) => {
  if (event.target.classList.contains('catalog-mobil')) {
    showPopupCatalog();
  }
}

accordionHeads.forEach(el => {
  el.onclick = (event) => {
    const accordionParent = event.target.closest('.catalog-mobil__accordion-item');
    const accordionList = accordionParent.querySelector('ul');
    accordionParent.classList.toggle('catalog-mobil__accordion-item--open');
    if (accordionParent.classList.contains('catalog-mobil__accordion-item--open')) {
      accordionList.style.height = accordionList.scrollHeight + 'px';
      accordionList.style.marginBottom = '10px';
    }
    else {
      accordionList.style.height = '0';
      accordionList.style.marginBottom = '0';
    }
  }
});

