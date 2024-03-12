const favoriteEmptyHTML = `
  <div class="cart-empty">
    <div class="container">
      <div class="cart-empty__inner">
        <div class="cart-empty__content">
          <h1 class="cart-empty__title">Вам ещё ничего не понравилось. Товары ждут вас в каталоге</h1>
          <div class="cart-empty__img-box">
            <img src="images/cart-empty-img.png" alt="">
          </div>
          <a class="cart-empty__main-link"  href="#">В каталог</a>
          <div class="cart-empty__link-box">
            <a class="cart-empty__link"  href="#">Оборудование</a>
            <a class="cart-empty__link"  href="#">Звук</a>
            <a class="cart-empty__link"  href="#">Свет</a>
            <a class="cart-empty__link"  href="#">Сцена</a>
            <a class="cart-empty__link"  href="#">Медиа</a>
            <a class="cart-empty__link"  href="#">Мебель</a>
            <a class="cart-empty__link"  href="#">Шатры</a>
          </div>
          
        </div>
      </div>
    </div>
  </div>
`;


document.querySelectorAll('.increment').forEach(btn => {
  btn.onclick = (event) => {
    const counter = event.target.closest('.cart-item__counter');
    const count = counter.querySelector('.count');
    count.innerHTML = Number(count.innerHTML) + 1;
  }
});
document.querySelectorAll('.decrement').forEach(btn => {
  btn.onclick = (event) => {
    const counter = event.target.closest('.cart-item__counter');
    const count = counter.querySelector('.count');
    if (Number(count.innerHTML) > 0) {
      count.innerHTML = Number(count.innerHTML) - 1;
    }
  }
});

document.querySelectorAll('.cart-item__remover').forEach(btnRemover => {
  btnRemover.onclick = (event) => {
    const cartItemsContainer = event.target.closest('.cart__items');
    const parentElement = event.target.closest('.cart-item');
    parentElement.remove();
    if (cartItemsContainer.querySelector('.cart-item') == null) {
      console.log(true);
      document.querySelector('.cart').remove();
      document.querySelector('.favorite-page').insertAdjacentHTML('beforeend', favoriteEmptyHTML)
    }
    
  }
});