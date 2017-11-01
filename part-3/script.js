document.addEventListener('DOMContentLoaded', function() {
  const cart = new Cart();  
  const modal = document.getElementById('modal');
  const modalBtn = document.getElementById('cartBtn');
  const closeBtn = document.querySelector('.closeBtn');
  const clearBtn = document.getElementById('clearBtn');
  const addToCartBtn = document.querySelectorAll('.addBtn');
  const total = document.getElementById('total-cart');
  const cartCount = document.getElementById('cart-item-count');
  const cartArray = document.querySelector('.cart-content');
  
  let Item = function(name, price) {
    this.name = name;
    this.price = price;
  };
  
  //display this if cart is empty 
  const emptyCartContent = () => {
    return '<span>Cart is empty </span>';
  }
  
  //open cart modal  
  modalBtn.addEventListener('click', openModal);
  function openModal() {
    modal.style.display = 'block';
    if(cart.count() > 0) {
      clearBtn.style.display = 'block';
      displayCart();
    } else {
      cartArray.innerHTML = emptyCartContent();
    }
  };
  
  
  //close cart modal  
  closeBtn.addEventListener('click', closeModal);
  function closeModal() {
    modal.style.display = 'none';
  };

  //clear the cart  
  clearBtn.addEventListener('click', clearCart);
  function clearCart() {
    cart.clearAll();
    total.innerText = '$0';
    cartArray.innerHTML = emptyCartContent();
  }


  function displayCart() {
    const items = cart.items;    
    cartArray.innerHTML = items.map(item => {
      return `<div class="item">
      <span>${item.name}</span>
      <span>${item.price}</span>
      </div>`;
    }).join('');
    total.innerText = `$${cart.total()}`;
  };


  //Add items to cart
  for(let i = 0; i < addToCartBtn.length; i++) {
    addToCartBtn[i].addEventListener('click', putInCart);
  }

  function putInCart(event) {
    event.preventDefault();
    const btnWrapper = event.target.parentNode;
    const itemName = btnWrapper.querySelector('.item-name').innerText;
    const itemPrice = btnWrapper.querySelector('.item-price').innerText;    
    const item = new Item(itemName, itemPrice);
    cart.addItem(item);
    cartCount.innerText = `(${cart.count()})`;
  };

})
