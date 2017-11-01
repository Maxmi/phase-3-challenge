document.addEventListener('DOMContentLoaded', function() {
  const cart = new Cart();  
  const modal = document.getElementById('modal');
  const modalBtn = document.getElementById('cartBtn');
  const closeBtn = document.querySelector('.closeBtn');
  const clearBtn = document.getElementById('clearBtn');
  const addToCartBtn = document.querySelectorAll('.addBtn');
  const totalCost = document.getElementById('totalCost');
  const totalDiv = document.querySelector('.total');
  const cartCount = document.getElementById('cart-item-count');
  const cartArray = document.querySelector('.cart-content');
  
  //creating object 
  const Item = function(name, price) {
    this.name = name;
    this.price = price;
  };
  
  //open cart modal  
  modalBtn.addEventListener('click', openModal);
  //the modal initially is not displayed
  //it is displayed when the modalBtn clicked
  //clear button and total amount also not displayed when cart is empty
 
  function openModal() {
    modal.style.display = 'block';
    if(cart.count() > 0) {
      clearBtn.style.display = 'block';
      totalDiv.style.display = 'block';
      displayCart();
    } else {
      cartArray.innerHTML = emptyCartContent();
    }
  };
  
  //display this if cart is empty 
  function emptyCartContent() {
    return '<span>Cart is empty </span>';
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
    cartArray.innerHTML = emptyCartContent();
    totalDiv.style.display = 'none';
    clearBtn.style.display = 'none';
    cartCount.innerText = '(0)';
  }

  //iterate over array of items and insert it into html element 
  function displayCart() {
    const items = cart.items;    
    cartArray.innerHTML = items.map(item => {
      return `<div class="item">
      <span>${item.name}</span>
      <span>${item.price}</span>
      </div>`;
    }).join('');
    //total amount sometimes coming with more than 2 decimals, force it to show 2 only 
    totalCost.innerText = `$${cart.total().toFixed(2)}`;
  };


  //Add items to cart
  //select all add to cart buttons then iterate over the array 
  addToCartBtn.forEach(function(elem) {
    elem.addEventListener('click', putInCart);
  })


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
