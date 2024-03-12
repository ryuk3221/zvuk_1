//Аккордион footer
//Получаю все верхушки выпадающего меню и вешаю обработчик
document.querySelectorAll('.footer-middle__column-title').forEach(el => {
  el.onclick = (event) => {
    //Получаю родителя  выпадающего меню
    const dropDownParent = event.target.closest('.footer-middle__column');
    //Получаю само выпадающее меню
    const dropDownMenu = dropDownParent.querySelector('ul');

    //Получаю svg стрелочку
    const dropDownArrow = dropDownParent.querySelector('svg');
    dropDownParent.classList.toggle('footer-middle__column--active');
    if (dropDownParent.classList.contains('footer-middle__column--active')) {
      dropDownMenu.style.height = dropDownMenu.scrollHeight + 'px';
      dropDownMenu.style.marginBottom = '10px';
      dropDownArrow.style.transform = 'rotate(0deg)';
    }
    else {
      dropDownMenu.style.height = '0';
      dropDownMenu.style.marginBottom = '0';
      dropDownArrow.style.transform = 'rotate(-180deg)';
    }
  }
});